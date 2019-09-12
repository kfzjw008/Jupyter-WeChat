Component({
    properties: {
        adData: Object
    },
    attached: function () {
        this.setData({
            adID: this.dataset.id
        })
    },
    methods: {
      cancelJump(baseURL, curl) {
          if (!curl) {
            return
          }
          wx.request({
            url: baseURL + 'v1/api/cancelclk',
            data: {
              curl
            },
            method: 'POST'
          })
        },
        adLoad() {
            this.triggerEvent('adload')
        },
        clickAd(e) {
            this.triggerEvent('click')
        },
        complete() {
        },
        navSuc(e) {
        },
        close() {
          this.triggerEvent('close')
        },
        navFail(e) {
          console.log('errMsg:', e.detail.errMsg)
          let { errMsg } = e.detail
          let { adData, adID } = this.data
          if (errMsg.indexOf('not in navigateToMiniProgramAppIdList')!==-1) {
            wx.request({
              url: adData.baseURL + 'v1/api/skipfail',
              data: {
                appid: adData[adID].appid[1],
                appkey: adData[adID].ak
              },
              method: 'GET'
            })
          } else if (errMsg.indexOf('cancel') !== -1) {
            let obj = this.data.adData[this.data.adID]
            obj ? this.cancelJump(adData.baseURL, obj.curl) : (setTimeout(() => {
              this.cancelJump(adData.baseURL, obj ? obj.curl : '')
            }, 3000))
          } else if (errMsg.indexOf('fail to open') !== -1) {
          } else {
          }
        }
    }
});
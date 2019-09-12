// pages/xmadPage/sell.js
Page({

  data: {
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    genderIndex: '',
    userInfo: {},
    dataJson: [],
    formConfig: {},
    base: '',
    title: '',
    hasAuth: true,
    num: {
      canSub: false,
      canAdd: true,
      total: 1
    }
  },

  onLoad: function (options) {
    this.setData({
      base: options.bs,
      title: options.title,
      'formConfig.uuid': options.ukey,
      'formConfig.ak': options.appkey,
      'formConfig.page_key': options.pagekey,
      'formConfig.curl': options.cu.replace(/!/gi, '=')
    })
    this.setTitle()

    var dataJson = JSON.parse(options.xmadPage)
    dataJson.forEach(item => {
      if (item.type == 'form') {
        var goods = item.data.config.goods
        goods.details.forEach(detail => {
          detail.values[0].checked = true
        })
      }
    });
    this.setData({
      dataJson: dataJson
    })

    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.address']) {
          wx.authorize({
            scope: 'scope.address',
            success: () => {
              this.setData({
                hasAuth: !0
              })
            },
            fail: () => {
              this.setData({
                hasAuth: !1
              })
            }
          })
        }
      }
    })
  },

  onShow: function () {
    
  },

  setCallBack: function (e) {
    if (e.detail.authSetting['scope.address']) {
      this.setData({
        hasAuth: !0
      })
    }
  },

  toDetail: function () {
    wx.createSelectorQuery()
      .select('.form-container')
      .boundingClientRect(function (res) {
        wx.pageScrollTo({
          scrollTop: res.top,
          duration: 300
        })
      })
      .exec()
  },
  
  _subNum: function (e) {
    var total = this.data.num.total
    if (total == 1) {
      return
    }
    this.setData({
      'num.total': --total,
      'num.canSub': total > 1,
      'num.canAdd': total < 200
    })
  },

  _inputNum: function (e) {
    var value = e.detail.value
    if (value < 1) {
      value = 1
    }
    if (value > 200) {
      value = 200
    }
    this.setData({
      'num.total': value,
      'num.canSub': value > 1,
      'num.canAdd': value < 200
    })
  },

  _addNum: function (e) {
    var total = this.data.num.total
    this.setData({
      'num.total': ++total,
      'num.canSub': total > 1,
      'num.canAdd': total < 200
    })
  },

  checkItem: function (e) {
    var i = e.target.dataset.i, idx = e.target.dataset.idx
    this.data.dataJson.forEach(item => {
      if (item.type == 'form') {
        var goods = item.data.config.goods
        goods.details.forEach((detail, index) => {
          if (i === index) {
            detail.values.forEach(t => t.checked = false)
            detail.values[idx].checked = true
          }
        })
      }
    })
    this.setData({
      dataJson: this.data.dataJson
    })
  },

  postLog: function (t, isShow) {
    var retryTimes = 0
    var bUrl = this.data.base
    var sendLog = function () {
      wx.request({
        url: bUrl + t.url,
        data: t.data,
        method: 'post',
        success() {
          if (isShow) {
            wx.showModal({
              content: '下单成功~',
              showCancel: false,
              confirmText: '好的'
            })
          }
        },
        fail() {
          if (retryTimes < 2) {
            retryTimes++;
            setTimeout(() => {
              sendLog()
            }, 1000);
          }
        }
      })
    }
    sendLog()
  },

  submitForm: function (e) {
    var inputData = e.detail.value
    var form = this.data.dataJson.filter(item => item.type === 'form')[0]
    var goods = form.data.config.goods
    var good = {}
    good.leave_msg = inputData.leave_msg || ''
    good.detail = goods.details.map(detail => {
      var checked = detail.values.filter(item => item.checked)[0]
      return {
        name: detail.name,
        value: checked.label
      }
    })
    good.num = this.data.num.total
    wx.chooseAddress({
      success: res => {
        delete res.errMsg
        this.postLog({ url: 'order', data: Object.assign({}, { dataType: 3 }, this.data.formConfig, { good, customer: res }) }, 1)
      },
      fail: e => {
      }
    })
  },
  
  hotLine: function () {
    var form = this.data.dataJson.filter(item => item.type === 'form')[0]
    if (form) {
      wx.makePhoneCall({
        phoneNumber: form.data.config.contactPhone,
        success: () => {
          this.postLog({ url: 'phone', data: this.data.formConfig }, 0)
        },
        fail: () => {}
      })
    }
  },

  setTitle: function () {
    this.data.title && wx.setNavigationBarTitle({
      title: this.data.title
    })
  }
})
// pages/xmadPage/sell.js
Page({
  
  data: {
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    dataJson: [],
    formConfig: {},
    base: '',
    title: ''
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
    let dataJson = JSON.parse(options.xmadPage)
    this.setTitle()
    this.setData({
      dataJson
    })
  },

  onShow: function () {
  },
  setTitle: function () {
    this.data.title && wx.setNavigationBarTitle({
      title: this.data.title
    })
  },

  copyPublicAddress: function () {
    let acount
    const _t = this
    _t.data.dataJson.forEach((item, inex, arr) => {
      switch (item.type) {
        case 'form':
          acount = item.data.config.orderInfo.wechatCount
      }
    })
    let retryTimes = 0;
    let sendLog = function () {
      wx.request({
        url: _t.data.base + "copyPublicAccount",
        data: {
          curl: _t.data.formConfig.curl
        },
        method: "post",
        success: function () { },
        fail: function () {
          if (retryTimes < 2) {
            retryTimes++;
            data["retryTimes"] = retryTimes;
            setTimeout(() => {
              sendLog();
            }, 1000);
          }
        }
      });
    };
    sendLog();
    wx.setClipboardData({
      data: acount,
      success: function (res) {
      },
      fail: function () { },
      complete: function () { }
    })
  }
})

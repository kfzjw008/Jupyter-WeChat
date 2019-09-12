// pages/xmadPage/collect.js
Page({

  data: {
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    genderIndex: '',
    genders: [
      {name: '男', value: '1'},
      {name: '女', value: '2'}
    ],
    area: [],
    userInfo: {},
    dataJson: [],
    formConfig: {},
    hasAuth: 0,
    base: '',
    title: ''
  },

  onLoad: function (options) {
    this.setData({
      dataJson: JSON.parse(options.xmadPage),
      hasAuth: options.hasAuth == '0' ? 0 : 1,
      base: options.bs,
      title: options.title,
      'formConfig.uuid': options.ukey,
      'formConfig.ak': options.appkey,
      'formConfig.page_key': options.pagekey,
      'formConfig.curl': options.cu.replace(/!/gi, '=')
    })
    this.setTitle()
  },

  onShow: function () {
    
  },

  areaChange: function (e) {
    this.setData({
      area: e.detail.value
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
        success: function () {
          if (isShow) {
            wx.showModal({
              content: '提交成功~',
              showCancel: false,
              confirmText: '好的'
            })
          }
        },
        fail: function () {
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
    var form = this.data.dataJson.filter(item => item.type === 'form')[0]
    var needData = form.data.needs
    var inputData = e.detail.value

    for (var key in needData) {
      if (needData[key] && !inputData[key]) {
        return wx.showModal({
          content: '请填写完整后再提交哦~',
          showCancel: false,
          confirmText: '知道了'
        })
      }
    }
    this.postLog({ url: 'order', data: Object.assign({}, { dataType: 2 }, this.data.formConfig, inputData) }, 1)
  },

  setTitle: function() {
    this.data.title && wx.setNavigationBarTitle({
      title: this.data.title
    })
  }
})
// pages/qa/cs/start.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
jdg:''
  }, jd: function (e) {
    //console.log(e)
    this.setData({

      jdg: e.detail.value
    })
  }, gotoPage2: function (e) {
    var that = this
    wx.navigateBack({
      delta: 1,

    })
  }, gotoPage6: function () {
    var that = this
    app.globalData.name = that.data.jdg;
    console.log(app.globalData.name)




    wx.redirectTo({ url: 'test', })
  }, gotoPage7: function () {
    wx.navigateTo({ url: 'zdy', })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onGotUserInfo: function (e) {
    if (this.data.jdg == '') {
      wx.showModal({
        content: '请输入姓名！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }else{

      var that = this
      app.globalData.name = that.data.jdg;
      console.log(app.globalData.name)
      app.globalData.nickname = e.detail.userInfo.nickName
      app.globalData.location = e.detail.userInfo.country + e.detail.userInfo.province + e.detail.userInfo.city
      console.log(app.globalData.nickname)
      console.log(app.globalData.location)


      //console.log(e.detail.errMsg)
      console.log(e.detail.userInfo)
      console.log(e.detail.rawData)
      wx.redirectTo({ url: 'test', })
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    app.globalData.sj = 600,//修改题数
      app.globalData.tishu = 20
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    app.globalData.sj=600,//修改题数
      app.globalData.tishu=20
   // clearInterval(that.data.intervarID);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/index/more/index.js
var app = getApp();  

Page({

  /**
   * 页面的初始数据
   */
  data: {
jdg:'',
wdg:''
  }, jd: function (e) {
    console.log(e)
    this.setData({
      
      jdg: e.detail.value
    })
  }, wd: function (e) {
    console.log(e)
    this.setData({
      wdg: e.detail.value
    })
  },
  gotoPage2: function (e) {
    var that = this
    wx.navigateBack({
      delta: 1,
      success(res) {
        var jdg=
          app.globalData.jd = that.data.jdg;
        app.globalData.wd = that.data.wdg;
        console.log(app.globalData.jd)
        wx.request({
          url: 'https://api.majorbillliu.com/getIndex',
          data: {
            lon: this.data.wdg,
            lat: this.data.jdg
          }
        
      
        })
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
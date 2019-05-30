// pages/bk/detail/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id111: '',
    Name111: '',
    Bayer111: '',
    Fransted111: '',
    Variable_star111: '',
    HD111: '',
    HIP111: '',
    Right_ascension111: '',
    Declination111: '',
    Apparent_magnitude111: '',
    Absolute_magnitude111: '',
    Distance111: '',
    Classification111: '',
    Notes111: '',
    Constellation111: '',
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
    wx.showToast({
      title: '加载中',
      icon: "loading",
      duration: 3000
    })
    var that = this
    wx.request({
      url: 'https://api.majorbillliu.com/questions/' + app.globalData.idp,

      fail(res) {
        console.log(res)
        wx.showToast({
          title: '加载失败',
          icon: "none",
          duration: 2000
        })

      },
      success(res) {
        console.log(res.data.Question_body)
        var id111 = res.data.id
        var Name111 = res.data.Question_body
        var Bayer111 = res.data.Examination_Place
        var Fransted111 = res.data.A
        var Variable_star111 = res.data.B
        var HD111 = res.data.C
        var HIP111 = res.data.D
        var Right_ascension111 = res.data.Correct_Answer
        var Declination111 = res.data.Question_Analysis
        
        that.setData({
          id111: res.data.id,
          Name111: res.data.Question_body,
          Bayer111: res.data.Examination_Place,
          Fransted111: res.data.A,
          Variable_star111: res.data.B,
          HD111: res.data.C,
          HIP111: res.data.D,
          Right_ascension111: res.data.Correct_Answer,
          Declination111: res.data.Question_Analysis,
         
        })
      
      }
    })


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
  , sc: function () {
    wx.showToast({
      title: '收藏成功！',
      icon: 'none',
      duration: 3000
    })



  },
})
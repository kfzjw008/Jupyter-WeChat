// pages/qa/mokuai/index.js




var app = getApp();
var base64 = require("../../../dist/example/images/base64.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pic1: 'https://api.majorbillliu.com/media/questions/images/datiansai.JPG',
      pic2: 'https://api.majorbillliu.com/media/questions/images/diyuexi.jpg',
      pic3: 'https://api.majorbillliu.com/media/questions/images/hangkonghangtian.jpg',
      pic4: 'https://api.majorbillliu.com/media/questions/images/hengxing.jpg',
      pic5: 'https://api.majorbillliu.com/media/questions/images/taiyangxi.jpg',
      pic6: 'https://api.majorbillliu.com/media/questions/images/tianwenguance.jpg',
      pic7: 'https://api.majorbillliu.com/media/questions/images/tianwenxianxiang.JPG',
      pic8: 'https://api.majorbillliu.com/media/questions/images/lengzhishi.JPG',
      pic9: 'https://api.majorbillliu.com/media/questions/images/tianwenxueshi.jpg',
      pic10: 'https://api.majorbillliu.com/media/questions/images/jichuzhishi.JPG',
      pic11: 'https://api.majorbillliu.com/media/questions/images/xingzuoxingtu.jpg',
      pic12: 'https://api.majorbillliu.com/media/questions/images/yinhexi.jpg',
      pic13: 'https://api.majorbillliu.com/media/questions/images/zhongxigudai.jpg',
      //icon60: 'https://api.majorbillliu.com/media/questions/images/datiansai.JPG',
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }, resul: function (e) {
    app.globalData.search = e.currentTarget.id;
    wx.navigateTo({ url: 'result', })
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
// pages/qa/jl/index.js
var app = getApp();  
var Charts = require('../../../dist/charts.js'); 
var util = require('../../../utils/util.js');
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
    if(app.globalData.allquestion==0){

      wx.navigateBack({
        delta: 1,

      }),
        wx.showToast({
          title: '您还没有试题练习记录！',
          icon: "none",
          duration: 2000
        })
    }
    var time = util.formatTime(new Date());
    new Charts({
      canvasId: 'columnCanvas',
      type: 'column',
      categories: [time],
      series: [{
        name: '正确数量',
        data: [app.globalData.allquestionright]
      }, {
        name: '错误数量',
          data: [app.globalData.allquestionwrong]
        },{
          name: '总数量',
          data: [app.globalData.allquestion]
        }],
      yAxis: {
        format: function (val) {
          return val.toFixed(0) ;
        },
        min: 0
      },
      width: 320,
      height: 200
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }, gotoPage2: function (e) {
    var that = this
    wx.navigateBack({
      delta: 1,

    })
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
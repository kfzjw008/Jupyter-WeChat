// pages/index/qs/index.js
var app = getApp();  
var Charts = require('../../../dist/charts.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gotoPage2: function (e) {
    var that = this
    wx.navigateBack({
      delta: 1,

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
    var that = this
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 5000
    })


    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //console.log(res)

        that.setData({
          wd: app.globalData.wd,
          jd: app.globalData.jd,
        })
        wx.request({
          url: 'https://api.majorbillliu.com/getIndex',
          data: {
            lon: app.globalData.jd,
            lat: app.globalData.wd
          },
          fail(res) {
            wx.showToast({
              title: '加载失败',
              icon: "none",
              duration: 2000
            })
            that.setData({
              locat: '加载失败',
              cloudcover: '加载失败',
              seeing: '加载失败',
              rh2m: '加载失败',
              temp: '加载失败',
              temp2m: '加载失败',
              transparency: '加载失败',
              lifted_index: '加载失败',
              P0: "--",
            })

          },
          success(res) {

            var P0 = res.data.astronomy[1].P
            var P1 = res.data.astronomy[2].P
            var P2 = res.data.astronomy[3].P
            var P3 = res.data.astronomy[4].P
            var P4 = res.data.astronomy[5].P
            var P5 = res.data.astronomy[6].P
            var P6 = res.data.astronomy[7].P
            var P7 = res.data.astronomy[8].P
            var P8 = res.data.astronomy[9].P
            var P9 = res.data.astronomy[10].P
            var P10 = res.data.astronomy[11].P
            var P11 = res.data.astronomy[12].P
            var P12 = res.data.astronomy[13].P
            var P13 = res.data.astronomy[14].P
            var P14 = res.data.astronomy[15].P
            var P15 = res.data.astronomy[16].P
            var P16 = res.data.astronomy[17].P
            var P17 = res.data.astronomy[18].P
            var P18 = res.data.astronomy[19].P
            var P19 = res.data.astronomy[20].P
            that.setData({

              P0: P0,
              P1: P1,
              P2: P2,
              P3: P3,
              P4: P4,
              P5: P5,
              P6: P6,
              P7: P7,
              P8: P8,
              P9: P9,
              P10: P10,
              P11: P11,
              P12: P12,
              P13: P13,
              P14: P14,
              P15: P15,
              P16: P16,
              P17: P17,
              P18: P18,
              P19: P19,
             
            })
            //console.log(res.data)
            new Charts({
              canvasId: 'lineCanvas',
              type: 'line',
              categories: ['3H', '9H', '15H', '21H', '27H', '33H', '39H', '45H', '51H', '57H'],
              series: [{
                name: res.data.location+'的观测适宜度',
                data: [res.data.astronomy[0].P, res.data.astronomy[2].P, res.data.astronomy[4].P, res.data.astronomy[6].P, res.data.astronomy[8].P, res.data.astronomy[10].P, res.data.astronomy[12].P, res.data.astronomy[14].P, res.data.astronomy[16].P, res.data.astronomy[18].P],
                format: function (val) {
                  return val.toFixed(0);
                }
              }],
              yAxis: {
                title: '观测适宜度',
                format: function (val) {
                  return val.toFixed(0);
                },
                min: 0,
                max: 100
              },
              width: 320,
              height: 150
            });
          }
        })
      }
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
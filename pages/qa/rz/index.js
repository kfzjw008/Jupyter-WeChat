// pages/qa/rz/index.js
var a,b
var app = getApp();  
Page({

  /**
   * 页面的初始数据
   */
  data: {
xming:'',
xhing:'',
    timu:app.globalData.allqsxs
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
    this.setData({
      timu: app.globalData.allqsxs

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

  },
  gotoPage2: function () {

    wx.navigateTo({ url: 'school', })
  }, 
  xm: function (e) {
    //console.log(e)
    this.setData({

      xming: e.detail.value
    })
    a = e.detail.value
    console.log(e)
  }, xh: function (e) {
    //console.log(e)
    this.setData({

      xhing: e.detail.value
    })
    b = e.detail.value
    console.log(e.detail.value)
  },




  rz: function () {
var bj=0
if(a=='张峻巍'&&b=='2016214345')bj=1//0为未认证，1为本校，2为外校









    if (app.globalData.rz == 1) {
      wx.showModal({
        content: "您已经认证，本次打开无需重复认证",
        title: "已认证",
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      wx.navigateBack({
        delta: 1,

      })
    }

    else {
      if (bj == 1) {
        app.globalData.allqs = 623 //认证之后题目数量
        app.globalData.allqsxs = 623//用户可以看到的数字
        app.globalData.rz = 1//已认证
        wx.showModal({
          content: "您已经可以使用全部题库！（请注意，下次打开仍需要进行认证）",
          title: "认证成功！",
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
        this.setData({
          timu: app.globalData.allqs

        })
        wx.navigateBack({
          delta: 1,

        })
      } else if (bj == 2){
        app.globalData.allqs = 200 //认证之后实际题目数量
        app.globalData.allqsxs = 623//用户可以看到的数字
        app.globalData.rz = 1//已认证
        wx.showModal({
          content: "您已经可以使用全部题库！（请注意，下次打开仍需要进行认证）",
          title: "认证成功！",
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
        this.setData({
          timu: app.globalData.allqs

        })
        wx.navigateBack({
          delta: 1,

        })
        
      }
      
      
      else {
        wx.showModal({
          content: "不存在此用户，请联系学校管理员核对。",
          title: "认证失败！",
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })

      }


    }


 



  }, 
})
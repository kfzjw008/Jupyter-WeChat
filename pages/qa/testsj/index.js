// pages/qa/testsj/index.js
var app = getApp();  
 
Page({

  /**
   * 页面的初始数据
   */
  data: {
  AA:false,
  BB:false,
  CC:false,
  DD:false
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
    console.log(app.globalData.id)
    var that = this
    wx.request({
      url: 'https://api.majorbillliu.com/questions/'+app.globalData.id ,

      fail(res) {
        console.log(res)
        wx.showToast({
          title: '加载失败',
          icon: "none",
          duration: 2000
        })

      },
      success(res) {
        var Question_body = res.data.Question_body
        var A = res.data.A
        var B = res.data.B
        var C = res.data.C
        var D = res.data.D
        var Correct_Answer = res.data.Correct_Answer
        var Examination_Place = res.data.Examination_Place
        var Question_Analysis = res.data.Question_Analysis
        app.globalData.Correct_Answer= Correct_Answer,
        that.setData({
           Question_body :Question_body,
         A :A,
         B : res.data.B,
        C : res.data.C,
         D : res.data.D,
         Correct_Answer:Correct_Answer,
          
         Examination_Place:Examination_Place,
         Question_Analysis:Question_Analysis,
        })
        console.log(res.data)
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

  },
  gotoPage3: function () {
    var cr = "正确答案：" + app.globalData.Correct_Answer;
  },
  gotoPage1: function () {
    app.globalData.id = app.globalData.id - 1
    console.log(app.globalData.id)
    var that = this
    wx.request({
      url: 'https://api.majorbillliu.com/questions/' + app.globalData.id,

      fail(res) {
        console.log(res)
        wx.showToast({
          title: '加载失败',
          icon: "none",
          duration: 2000
        })

      },
      success(res) {
        var Question_body = res.data.Question_body
        var A = res.data.A
        var B = res.data.B
        var C = res.data.C
        var D = res.data.D
        var Correct_Answer = res.data.Correct_Answer
        var Examination_Place = res.data.Examination_Place
        var Question_Analysis = res.data.Question_Analysis
        app.globalData.Correct_Answer = Correct_Answer,
          that.setData({
            Question_body: Question_body,
            A: A,
            B: res.data.B,
            C: res.data.C,
            D: res.data.D,
            Correct_Answer: Correct_Answer,

            Examination_Place: Examination_Place,
            Question_Analysis: Question_Analysis,
          })
        console.log(res.data)
      }
    })
  },
  gotoPage2: function () {
    app.globalData.id =parseInt(Math.random()*230);
    //app.globalData.id = app.globalData.id+1
    console.log(app.globalData.id)
    var that = this
    wx.request({
      url: 'https://api.majorbillliu.com/questions/' + app.globalData.id,

      fail(res) {
        console.log(res)
        wx.showToast({
          title: '加载失败',
          icon: "none",
          duration: 2000
        })

      },
      success(res) {
        var Question_body = res.data.Question_body
        var A = res.data.A
        var B = res.data.B
        var C = res.data.C
        var D = res.data.D
        var Correct_Answer = res.data.Correct_Answer
        var Examination_Place = res.data.Examination_Place
        var Question_Analysis = res.data.Question_Analysis
        app.globalData.Correct_Answer = Correct_Answer,
          that.setData({
            Question_body: Question_body,
            A: A,
            B: res.data.B,
            C: res.data.C,
            D: res.data.D,
            Correct_Answer: Correct_Answer,

            Examination_Place: Examination_Place,
            Question_Analysis: Question_Analysis,
          })
        console.log(res.data)
      }
    })
  }
})
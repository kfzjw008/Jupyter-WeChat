// pages/qa/testsj/index.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    AA: false,
    BB: false,
    CC: false,
    DD: false,
    dis: false,
    jsq:0,
    jsq2: 0,
    jsqr:0,
    Correct_Answer: '',
    inputShoweda1: true,
    inputShoweda2: false,
    inputShoweda3: false,
    inputShoweda4: false,
    inputShowedb1: true,
    inputShowedb2: false,
    inputShowedb3: false,
    inputShowedb4: false,
    inputShowedc1: true,
    inputShowedc2: false,
    inputShowedc3: false,
    inputShowedc4: false,
    inputShowedd1: true,
    inputShowedd2: false,
    inputShowedd3: false,
    inputShowedd4: false
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
      icon: "none",
      duration: 2000
    })
    console.log(app.globalData.id)
    app.globalData.id = parseInt(Math.random() * app.globalData.allqs);
    var that = this
    wx.request({
      url: 'https://api.majorbillliu.com/questions/' + app.globalData.id,

      fail(res) {
        console.log(res)
        wx.navigateBack({
          delta: 1,

        }), wx.showToast({
          title: '加载失败,请稍后重试',
          icon: "none",
          duration: 2000
        })

      },
      success(res) {
        wx.showToast({
          title: '加载成功',
          icon: 'none',
          duration: 2000
        })
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
  gotoPage3: function (res) {
   
    var that = this
    console.log(that.data.jsq)
    that.data.jsq++;
   // res.data.jsq = res.data.jsq+1;
    if (app.globalData.Correct_Answer == 'A') {
      console.log(app.globalData.Correct_Answer)
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionright = app.globalData.allquestionright + 1;
      that.data.jsqr++;
      that.setData({
        inputShoweda1: false,
        inputShoweda3: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd2: true,
        jsq2: that.data.jsq,
        jsqr: that.data.jsqr
      })

    }
    else if (app.globalData.Correct_Answer == 'B') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      that.setData({
        inputShoweda1: false,
        inputShoweda4: true,
        inputShowedb1: false,
        inputShowedb3: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd2: true,
   jsq2: that.data.jsq
      })


    }
    else if (app.globalData.Correct_Answer == 'C') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      console.log(3)
      that.setData({
        inputShoweda1: false,
        inputShoweda4: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc3: true,
        inputShowedd1: false,
        inputShowedd2: true,
   jsq2: that.data.jsq
      })
    }
    else if (app.globalData.Correct_Answer == 'D') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      console.log(4)
      that.setData({
        inputShoweda1: false,
        inputShoweda4: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd3: true,
   jsq2: that.data.jsq
      })
    }
    // this.onLoad()
  },
  gotoPage4: function (res) {
  
    var that = this
    console.log(that.data.jsq)
    that.data.jsq++;
    if (app.globalData.Correct_Answer == 'A') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      console.log(app.globalData.Correct_Answer)
      that.setData({
        inputShoweda1: false,
        inputShoweda3: true,
        inputShowedb1: false,
        inputShowedb4: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd2: true,
   jsq2: that.data.jsq
      })

    }
    else if (app.globalData.Correct_Answer == 'B') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionright = app.globalData.allquestionright + 1;
      that.data.jsqr++;
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb3: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd2: true,
        jsq2: that.data.jsq,
        jsqr: that.data.jsqr
      })


    }
    else if (app.globalData.Correct_Answer == 'C') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      console.log(3)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb4: true,
        inputShowedc1: false,
        inputShowedc3: true,
        inputShowedd1: false,
        inputShowedd2: true,
   jsq2: that.data.jsq
      })
    }
    else if (app.globalData.Correct_Answer == 'D') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      console.log(4)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb4: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd3: true,
   jsq2: that.data.jsq
      })
    }
    // this.onLoad()
  },
  gotoPage5: function (res) {

    var that = this
    console.log(that.data.jsq)
    that.data.jsq++;
    if (app.globalData.Correct_Answer == 'A') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      console.log(app.globalData.Correct_Answer)
      that.setData({
        inputShoweda1: false,
        inputShoweda3: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc4: true,
        inputShowedd1: false,
        inputShowedd2: true,
   jsq2: that.data.jsq
      })

    }
    else if (app.globalData.Correct_Answer == 'B') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb3: true,
        inputShowedc1: false,
        inputShowedc4: true,
        inputShowedd1: false,
        inputShowedd2: true,
        jsq2: that.data.jsq
      })


    }
    else if (app.globalData.Correct_Answer == 'C') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionright = app.globalData.allquestionright + 1;
      that.data.jsqr++;
      console.log(3)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc3: true,
        inputShowedd1: false,
        inputShowedd2: true,
        jsq2: that.data.jsq,
        jsqr: that.data.jsqr
      })
    }
    else if (app.globalData.Correct_Answer == 'D') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      console.log(4)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc4: true,
        inputShowedd1: false,
        inputShowedd3: true,
   jsq2: that.data.jsq
      })
    }
    // this.onLoad()
  },
  gotoPage6: function (res) {

    var that = this
    console.log(that.data.jsq)
    that.data.jsq++;
    if (app.globalData.Correct_Answer == 'A') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      console.log(app.globalData.Correct_Answer)
      that.setData({
        inputShoweda1: false,
        inputShoweda3: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd4: true,
   jsq2: that.data.jsq
      })

    }
    else if (app.globalData.Correct_Answer == 'B') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb3: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd4: true,
        jsq2: that.data.jsq
      })


    }
    else if (app.globalData.Correct_Answer == 'C') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionwrong = app.globalData.allquestionwrong + 1;
      console.log(3)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc3: true,
        inputShowedd1: false,
        inputShowedd4: true,
        jsq2: that.data.jsq

      })
    }
    else if (app.globalData.Correct_Answer == 'D') {
      app.globalData.allquestion = app.globalData.allquestion + 1;
      app.globalData.allquestionright = app.globalData.allquestionright + 1;
      that.data.jsqr++;
      console.log(4)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd3: true,
        jsq2: that.data.jsq,
        jsqr: that.data.jsqr

      })
    }
    // this.onLoad()
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

    var jsq = this.data.jsq2
    var jsqr = this.data.jsqr
    if (jsq >= 20) {
      app.globalData.cstimu = jsq ;
      console.log("cstimu:"+app.globalData.cstimu)
      app.globalData.csrighttimu = jsqr,
        app.globalData.csscore = 100 / jsq * jsqr;

      wx.navigateTo({ url: 'result', })
    }
    this.setData({ dis: true ,jsq:jsq})

    app.globalData.id = parseInt(Math.random() * app.globalData.allqs);
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
        console.log(3)
        var Question_body = res.data.Question_body
        var A = res.data.A
        var B = res.data.B
        var C = res.data.C
        var D = res.data.D
        var Correct_Answer = res.data.Correct_Answer
      

        var Examination_Place = res.data.Examination_Place
        var Question_Analysis = res.data.Question_Analysis
        app.globalData.Correct_Answer = Correct_Answer
        
          that.setData({
            dis: false,
            Question_body: Question_body,
            A: A,
            B: res.data.B,
            C: res.data.C,
            D: res.data.D,
            Correct_Answer: Correct_Answer,
            inputShoweda1: true,
            inputShoweda2: false,
            inputShoweda3: false,
            inputShoweda4: false,
            inputShowedb1: true,
            inputShowedb2: false,
            inputShowedb3: false,
            inputShowedb4: false,
            inputShowedc1: true,
            inputShowedc2: false,
            inputShowedc3: false,
            inputShowedc4: false,
            inputShowedd1: true,
            inputShowedd2: false,
            inputShowedd3: false,
            inputShowedd4: false,
            Examination_Place: Examination_Place,
            Question_Analysis: Question_Analysis,
          })
        console.log(res.data)
      }
    })
  }
})
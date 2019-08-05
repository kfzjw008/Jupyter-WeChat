// pages/qa/testsj/index.js
var app = getApp();
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    intervarID: '',//定时器名字
    time_diff: 600,//最早的时间差
    day: 0,//天
    hourse: 0,//小时
    minute: 0,//分
    second: 0,//秒
    AA: false,
    BB: false,
    CC: false,
    DD: false,
    dis: false,
    jsq:0,
    ts:app.globalData.tishu,
    jsq2: 0,
    jsqr:0,
    clock: '',
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
  countDown: function () {
    var that = this;
    var now_time =  app.globalData.sj//修改时间从这里
    //var now_time = that.data.time_diff;//获取时间差
    this.data.intervarID = setInterval(function () {//设置定时器
      //将时间差减一秒
      now_time--;
      //计算天时分秒
      let d = Math.floor((now_time - (now_time % 86400)) / 86400);
      let h = Math.floor((now_time % 86400) / 3600);
      let m = Math.floor((now_time % 3600) / 60);
      let s = now_time % 60;
      //将计算结果保存至data
      that.setData({
        day: d,
        hourse: h,
        minute: m,
        second: s,
      });
      var jsq = that.data.jsq2
      var jsqr = that.data.jsqr
      //当时间差为0时,清除定时器
      if (d <= 0 && h <= 0 && m <= 0 && s <= 0 && app.globalData.cspd1 == 0) {
        app.globalData.cspd1 =1;
        app.globalData.cstimu = jsq;
        console.log("cstimu:" + app.globalData.cstimu)
        app.globalData.csrighttimu = jsqr
        if(jsq!=0){
          app.globalData.csscore = 100 / jsq * jsqr;
        }else{
          app.globalData.csscore =0;
        }
         
        clearInterval(that.data.intervarID);
      //  wx.navigateBack({
      //    delta: 1,

      //  })
        wx.redirectTo({ url: 'result', })
      }
    }, 1000
    )
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //countDown(this);
    //app.globalData.sj = 600,//修改题数
     // app.globalData.tishu = 20

    this.ts = app.globalData.tishu
    this.setData({
      ts : app.globalData.tishu
    })
    app.globalData.cspd1 == 0
    this.countDown();

    app.globalData.cspd1 = 0;
    wx.showToast({
      title: '加载中',
      icon: "none",
      duration: 2000
    })
    console.log(app.globalData.id)
    app.globalData.id = randomNum(1, app.globalData.allqs);
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    app.globalData.cspd1 == 0;
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
   // clearInterval(this.data.intervarID);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.intervarID);
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
    if (jsq >= app.globalData.tishu && app.globalData.cspd1== 0) {//试题数量在此修改
      app.globalData.cspd1=1;
      app.globalData.cstimu = jsq ;
      console.log("cstimu:"+app.globalData.cstimu)
      app.globalData.csrighttimu = jsqr
            if (jsq != 0) {
        app.globalData.csscore = 100 / jsq * jsqr;
      } else {
        app.globalData.csscore = 0;
      }
    //  wx.navigateBack({
      //  delta: 1,

      //})
      wx.redirectTo({ url: 'result', })
    }

    else{
      this.setData({ dis: true, jsq: jsq })

      app.globalData.id = randomNum(1, app.globalData.allqs);
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

  }
})
// pages/qa/cs/result.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
 cstimu:app.globalData.cstimu,
 csrighttimu:app.globalData.csrighttimu,
csscore:app.globalData.csscore ,
    sj: app.globalData.sj,
    jdg:'无',
    wdg:''
  }, jd: function (e) {
    //console.log(e)
    this.setData({

      jdg: e.detail.value
    })
  }, wd: function (e) {
    //console.log(e)
    this.setData({

      wdg: e.detail.value
    })
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }, gotoPage6: function () {
    if (this.data.wdg == '') {
      wx.showModal({
        content: '请输入邮箱用于证书发放！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else{
      var that = this;      //获取汇率 

         wx.request( {   
           url: "https://api.majorbillliu.com/upload/?name=" + app.globalData.name + "&email=" + this.data.wdg + "&school=" + this.data.jdg + "&allquestion=" + app.globalData.cstimu + "&right=" + app.globalData.csrighttimu + "&allscore=" + app.globalData.csscore + "&alltime=" + app.globalData.sj + "&nickname=" + app.globalData.nickname + "&place=" + app.globalData.location,  
           fail(res) {
             wx.navigateTo({ url: 'fail', })

           },
                      success: function( res ) {     
                           
                        wx.redirectTo({ url: 'success', })
            }   

               })
      //此处填写上传内容代码


      //成功后跳转界面
    

    //失败后跳转界面
   // wx.navigateTo({ url: 'fail', })

    }

  }, gotoPage2: function () {
    wx.redirectTo({ url: 'info', })

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
      cstimu: app.globalData.cstimu,
      csrighttimu: app.globalData.csrighttimu,
      csscore: app.globalData.csscore.toFixed(0) ,
      sj: app.globalData.sj
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
})
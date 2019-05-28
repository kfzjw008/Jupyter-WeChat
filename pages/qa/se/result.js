// pages/bk/result.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: '',
    pgc: '',
    search: '',
    page: "",
    list: [{
    }, {

    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.page1 = 1
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  }, nextpage: function () {
    console.log(pgc)
    this.onLoad()
    var that = this
    app.globalData.page1 = app.globalData.page1 + 1
    var pgc = app.globalData.page1
    wx.request({
      url: 'https://api.majorbillliu.com/questions',
      data: {
        page: app.globalData.page1,
        search: app.globalData.search
        
      }, success(res) {
        var count = res.data.count
        var pgc = count / 20
        console.log(pgc)
        that.setData({
          count: res.data.count,
          list: res.data.results,
          search: app.globalData.search,
          page: app.globalData.page1,
          pgc: count / 20
        })
      }

    })

  }, nextpage2: function () {
    console.log(pgc)
    this.onLoad()
    var that = this
    app.globalData.page1 = app.globalData.page1 - 1
    var pgc = app.globalData.page1
    wx.request({
      url: 'https://api.majorbillliu.com/questions',
      data: {
        page: app.globalData.page1,
        search: app.globalData.search
       
      }, success(res) {
        var count = res.data.count
        var pgc = count / 20
        console.log(pgc)
        that.setData({
          count: res.data.count,
          list: res.data.results,
          search: app.globalData.search,
          page: app.globalData.page1,
          pgc: count / 20
        })
      }

    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  det: function (e) {


    app.globalData.idp = e.currentTarget.id;
    wx.navigateTo({ url: 'detail/inidex', })


  },
  onShow: function (res) {

    var that = this
    console.log(res)
    wx.showToast({
      title: '搜索中',
      icon: 'loading',
      duration: 6000
    }),
      
      wx.request({
        url: 'https://api.majorbillliu.com/questions',
        data: {
          search: app.globalData.search,
          page: app.globalData.page1
        },
        fail(res) {
          console.log(res)
          wx.showToast({
            title: '加载失败',
            icon: "none",
            duration: 2000
          })

        },
        success(res) {

          console.log(res)
          wx.showToast({
            title: '加载成功',
            icon: 'success',
            duration: 2000
          })
          var count = res.data.count
          console.log(app.globalData.page1)

          that.setData({
            count: count,
            list: res.data.results,
            search: app.globalData.search,
            page: app.globalData.page1,
            pgc: count / 20
          })
          var count = res.data.count
          var pgc = count / 20
          console.log(pgc)
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
})
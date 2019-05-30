// pages/bk/result.js
var app = getApp();
var page = 0;
var page_size = 5;
var sort = "last";
var is_easy = 0;
var lange_id = 0;
var pos_id = 0;
var unlearn = 0;

var loadMore = function (that) {

  that.setData({
    hidden: false
  });
  wx.request({
    url: 'https://api.majorbillliu.com/classes',
    data: {
      className: app.globalData.search,
      page: app.globalData.page1

    },
    fail(res) {
      //console.log(res)
      wx.navigateBack({
        delta: 1,

      }), wx.showToast({
        title: '加载失败,请稍后重试',
        icon: "none",
        duration: 2000
      })

    },
    success(res) {

      //console.log(res)
 
      var count = res.data.count
   
      var list = that.data.list;
    
      //console.log('插入？？？？？')
      //console.log(that.data.list)
      for (var i = 0; i < res.data.results.length; i++) {
        list.push(res.data.results[i]);
        //console.log('插入！！！！！！！！')
       
        //console.log(list)
        //console.log(res.data.results[i])
      }
      //console.log(list)
      app.globalData.page1 = app.globalData.page1 + 1;
      //console.log(app.globalData.page1)

      that.setData({
        list: list,
        count: count,
        //list: res.data.results,
        search: app.globalData.search,
        page: app.globalData.page1,
      
        hidden: true
      })
      var count = res.data.count
    
      //console.log(pgc)
    }
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: '',
 
    search: '',
    page: "",
    list :[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    app.globalData.page1 = 1
      var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    loadMore(that);
  }, bindDownLoad: function () {
    var that = this;
    loadMore(that);
    //console.log("lower");
  },
  scroll: function (event) {
    //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  topLoad: function (event) {
    //   该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
  
    loadMore(this);
    //console.log("lower");
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },  

  /**
   * 生命周期函数--监听页面显示
   */
  det: function (e) {


    app.globalData.idp = e.currentTarget.id;
    wx.navigateTo({ url: 'test', })


  },
  onShow: function (res) {



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
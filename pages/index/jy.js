// pages/index/jy.js
var app = getApp();   
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    time: (new Date()).toString(),
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wd: '加载中...',
    jd: '加载中...',
    locat: '定位中...',
    cloudcover: '加载中...',
    seeing: '加载中...',
    rh2m: '加载中...',
    temp: '加载中...',
    temp2m: '加载中...',
    transparency: '加载中...',
    lifted_index: '加载中...',
    P0: "--",
    all:'加载中……'
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
   */  gotoPage2: function (e) {
    var that = this
    wx.navigateBack({
      delta: 1,

    })
  },
  onShow: function () {
    var that = this

    wx.getLocation({

      type: 'wgs84',
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: '数据加载中',
          icon: 'loading',
          duration: 6000
        })
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
            console.log(res)
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
            wx.showToast({
              title: '加载成功',
              icon: 'success',
              duration: 2000
            })
            var location = res.data.location
            var cloudcover = res.data.astronomy[0].cloudcover
            var seeing = res.data.astronomy[0].seeing
            var transparency = res.data.astronomy[0].transparency
            var lifted_index = res.data.astronomy[0].lifted_index
            var P0 = res.data.astronomy[0].P
            var rh2m = res.data.astronomy[0].rh2m
            var temp2m = res.data.astronomy[0].temp2m
            var temp = res.data.astronomy[0].temp
            if (cloudcover == 1) { cloudcover = '万里无云，适合开展各种类型的观测活动。' }
            if (cloudcover == 2) { cloudcover = '偶尔会有一定云，对观测带来的影响稍小。' }
            if (cloudcover == 3) { cloudcover = '存在云层，对观测会有一段时间的影响。' }
            if (cloudcover == 4) { cloudcover = '云层略薄，可以进行小型的观测活动。' }
            if (cloudcover == 5) { cloudcover = '云层存在，对观测可能会有一定影响。' }
            if (cloudcover == 6) { cloudcover = '云层略厚，对观测会有一定的影响。' }
            if (cloudcover == 7) { cloudcover = '云层稍厚，对观测会带来一定的影响。' }
            if (cloudcover == 8) { cloudcover = '云层较厚，对观测带来的影响较大。' }
            if (cloudcover == 9) { cloudcover = '云层很厚，几乎无法观测，因此不建议进行观测。' }
            if (seeing == 1) { seeing = '视宁度很差,外围会受到较大干扰，' }
            if (seeing == 2) { seeing = '视宁度差，外围事物干扰明显，' }
            if (seeing == 3) { seeing = '视宁度并不好，可能在观测的时候会造成干扰，' }
            if (seeing == 4) { seeing = '视宁度稍差，' }
            if (seeing == 5) { seeing = '视宁度适中，造成的影响不大。' }
            if (seeing == 6) { seeing = '大气视宁度较好，' }
            if (seeing == 7) { seeing = '大气视宁度很好，有利于观测，' }
            if (seeing == 8) { seeing = '大气视宁度极好，对观测带来的帮助很大，' }
            if (transparency == 1) { transparency = '透明度很差,' }
            if (transparency == 2) { transparency = '透明度较差,' }
            if (transparency == 3) { transparency = '透明度对观测造成较大影响,' }
            if (transparency == 4) { transparency = '透明度一般,' }
            if (transparency == 5) { transparency = '透明度稍好,' }
            if (transparency == 6) { transparency = '透明度较好,' }
            if (transparency == 7) { transparency = '透明度有利于观测,' }
            if (transparency == 8) { transparency = '透明度非常好,' }
            if (lifted_index == -10) { lifted_index = '<-7' }
            if (lifted_index == -6) { lifted_index = '-6' }
            if (lifted_index == -4) { lifted_index = '-4' }
            if (lifted_index == -1) { lifted_index = '-1.5' }
            if (lifted_index == 2) { lifted_index = '2' }
            if (lifted_index == 6) { lifted_index = '6' }
            if (lifted_index == 10) { lifted_index = '9' }
            if (lifted_index == 15) { lifted_index = '>11' }
            if (temp2m > 30 && temp2m<=35) { temp2m = '天气较为炎热，不太利于观测，' }
            if (temp2m > 35 ) { temp2m = '天气非常炎热，难以进行活动，谨防中暑，' }
            if (temp2m > 24 && temp2m <= 30) { temp2m = '温度较为舒适，' }
            if (temp2m > 18 && temp2m <= 24) { temp2m = '天气较为凉爽，利于到户外放松身心，' }
            if (temp2m > 7 && temp2m <= 18) { temp2m = '天气较为凉爽，但注意保暖，' }
            if (temp2m > -3 && temp2m <= 7) { temp2m = '天气较冷，不太利于观测。' }
            if (temp2m <= -3) { temp2m = '天气很寒冷，不利于观测，在户外应当及其注意保暖。' }
            var all = seeing + transparency + "大气不稳定值为"+lifted_index+"," + temp2m + cloudcover   ;
            that.setData({
              locat: location,
              cloudcover: cloudcover,
              seeing: seeing,
              rh2m: rh2m,
              temp: temp,
              temp2m: temp2m,
              transparency: transparency,
              lifted_index: lifted_index,
              P0: P0,
              all:all
            })
            console.log(all)
          }
        })
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
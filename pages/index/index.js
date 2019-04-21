//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    time: (new Date()).toString(),
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wd: '',
    jd: '',
    locat:'',
   
    P0:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function () {
     var that = this
 
   wx.getLocation({ 
     type: 'wgs84',
      success: function (res) { 
     console.log(res)       
    var latitude = res.latitude     
       var longitude = res.longitude       
   that.setData({ 
     wd: latitude, 
     jd: longitude,
      })
        wx.request({
          url: 'http://api.majorbillliu.com:8000/v1/getIndex',
          data: {
            lon: longitude,
            lat: latitude
          },
          success(res) {
            var location = res.data.location
            var cloudcover = res.data.astronomy[0].cloudcover
            var seeing = res.data.astronomy[0].seeing
            var transparency = res.data.astronomy[0].transparency
            var lifted_index = res.data.astronomy[0].lifted_index
            var P0 = res.data.astronomy[0].P
            var rh2m = res.data.astronomy[0].rh2m
            var temp2m = res.data.astronomy[0].temp2m
            var temp = res.data.astronomy[0].temp
            that.setData({
              locat: location,
              cloudcover: cloudcover,
              seeing: seeing,
              rh2m: rh2m,
              temp:temp,
              temp2m: temp2m,
              transparency:transparency,
              lifted_index:lifted_index,
              P0: P0,
            })
            console.log(res.data)
          }
        }) 
       } 
       })

        }
,
  onLoad: function () {
 
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

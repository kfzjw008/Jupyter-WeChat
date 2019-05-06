//index.js
//获取应用实例
var app = getApp();   

Page({
  data: {
    motto: 'Hello World',
    time: (new Date()).toString(),
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wd: '加载中...',
    jd: '加载中...',
    locat:'定位中...',
    cloudcover: '加载中...',
    seeing: '加载中...',
    rh2m: '加载中...',
    temp: '加载中...',
    temp2m: '加载中...',
    transparency: '加载中...',
    lifted_index: '加载中...',
    P0:"--"
  },
 
  onLoad: function () {

    var that = this

    wx.getLocation({
   
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        app.globalData.wd = res.latitude
        app.globalData.jd = res.longitude
        that.setData({
          wd: app.globalData.wd,
          jd: app.globalData.jd,
        })
        wx.request({
          url: 'https://api.majorbillliu.com/getIndex',
          data: {
            lon: app.globalData.wd,
            lat: app.globalData.jd
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
              temp: temp,
              temp2m: temp2m,
              transparency: transparency,
              lifted_index: lifted_index,
              P0: P0,
            })
            console.log(res.data)
          }
        })
      }
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
            })
            console.log(res.data)
          }
        })
      }
    })

  },
   fresh: function (a) {
    console.log(a)
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 6000
    })
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
          url: 'https://api.majorbillliu.com/getIndex',
          data: {
            lon: longitude,
            lat: latitude
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
            })
            console.log(res.data)
          }
        })
      }
    })

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function () {
     var that = this
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 3000
    })


   wx.getLocation({ 
     type: 'wgs84',
      success: function (res) { 
     console.log(res)       
        app.globalData.wd = res.latitude
        app.globalData.jd = res.longitude
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

  gotoPage1: function () { 
    wx.navigateTo({ url: 'more/index', }) }

  , gotoPage3: function () {
    wx.navigateTo({ url: 'qs/index', })
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

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
    q1:'正在计算',
    temp: '加载中...',
    temp2m: '加载中...',
    transparency: '加载中...',
    lifted_index: '加载中...',
    P0:"--",
    jpg: 'https://api.majorbillliu.com/media/questions/images/66-80.jpg'
  },
 
  onLoad: function () {







    var that = this

    wx.getLocation({
   
      type: 'wgs84',
      success: function (res) {
        //console.log(res)
        app.globalData.wd = res.latitude
        app.globalData.jd = res.longitude
        that.setData({
          wd: app.globalData.wd,
          jd: app.globalData.jd,
        })
     
      }
    })

  },
  onShow: function () {

    var that = this

    wx.getLocation({

      type: 'wgs84',
      success: function (res) {
        ////console.log(res)
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
            wx.showToast({
              title: '加载失败',
              icon: "none",
              duration: 2000
            })
            that.setData({
              locat: '加载失败',
              cloudcover: '加载失败',
              seeing: '加载失败',
              // rh2m: '加载失败',
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
            if (cloudcover == 1) { cloudcover = '3%' }
            if (cloudcover == 2) { cloudcover = '13%' }
            if (cloudcover == 3) { cloudcover = '25%' }
            if (cloudcover == 4) { cloudcover = '37%' }
            if (cloudcover == 5) { cloudcover = '50%' }
            if (cloudcover == 6) { cloudcover = '62%' }
            if (cloudcover == 7) { cloudcover = '75%' }
            if (cloudcover == 8) { cloudcover = '87%' }
            if (cloudcover == 9) { cloudcover = '97%' }
      
            if (seeing == 1) { seeing = '<0.5"' }
            if (seeing == 2) { seeing = '0.75"' }
            if (seeing == 3) { seeing = '1"' }
            if (seeing == 4) { seeing = '1.25"' }
            if (seeing == 5) { seeing = '1.5"' }
            if (seeing == 6) { seeing = '2"' }
            if (seeing == 7) { seeing = '2.5"' }
            if (seeing == 8) { seeing = '>2.5"' }
            if (transparency == 1) { transparency = '0.3' }
            if (transparency == 2) { transparency = '0.4' }
            if (transparency == 3) { transparency = '0.5' }
            if (transparency == 4) { transparency = '0.6' }
            if (transparency == 5) { transparency = '0.7' }
            if (transparency == 6) { transparency = '0.85' }
            if (transparency == 7) { transparency = '1' }
            if (transparency == 8) { transparency = '>1' }
            if (transparency == 1) { transparency = '0.3' }
            if (transparency == 2) { transparency = '0.4' }
            if (transparency == 3) { transparency = '0.5' }
            if (transparency == 4) { transparency = '0.6' }
            if (transparency == 5) { transparency = '0.7' }
            if (transparency == 6) { transparency = '0.85' }
            if (transparency == 7) { transparency = '1' }
            if (transparency == 8) { transparency = '>1' }
            if (lifted_index == -10) { lifted_index = '<-7' }
            if (lifted_index == -6) { lifted_index = '-6' }
            if (lifted_index == -4) { lifted_index = '-4' }
            if (lifted_index == -1) { lifted_index = '-1.5' }
            if (lifted_index == 2) { lifted_index = '2' }
            if (lifted_index == 6) { lifted_index = '6' }
            if (lifted_index == 10) { lifted_index = '9' }
            if (lifted_index == 15) { lifted_index = '>11' }

            if (P0 <= 55) {
              console.log(55)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/0-55.jpg'
,q1:'不适宜观测'
              })

            }
            if (56 <= P0 && P0 <= 65) {
              console.log(65)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/56-65.jpg'
                , q1: '勉强可以观测'
              })

            }
            if (66 <= P0 && P0 <= 80) {
              console.log(80)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/66-80.jpg'
                , q1: '可以观测'
              })

            }
            if (81 <= P0 && P0 <= 95) {
              console.log(95)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/81-95.jpg'
                , q1: '适合观测'
              })

            }
            if (96 <= P0 && P0 <= 100) {
              console.log(100)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/96-100.jpg'
                , q1: '非常适合观测'
              })

            }
            that.setData({
              locat: location,
              cloudcover: cloudcover,
              seeing: seeing,
              // rh2m: rh2m,
              temp: temp,
              temp2m: temp2m,
              transparency: transparency,
              lifted_index: lifted_index,
              P0: P0,
            })
            //console.log(res.data)
            wx.reportAnalytics('search_p0', {
              locat: location,
              p0: P0
            })
          }
        }) 
    
       // console.log(this.P0)
      }
    })

  },
   fresh: function (a) {
  //  //console.log(a)
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 6000
    })
    var that = this
    wx.getLocation({

      type: 'wgs84',
      success: function (res) {
        //console.log(res)
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
             // rh2m: '加载失败',
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
            if (cloudcover == 1) { cloudcover = '3%' }
            if (cloudcover == 2) { cloudcover = '13%' }
            if (cloudcover == 3) { cloudcover = '25%' }
            if (cloudcover == 4) { cloudcover = '37%' }
            if (cloudcover == 5) { cloudcover = '50%' }
            if (cloudcover == 6) { cloudcover = '62%' }
            if (cloudcover == 7) { cloudcover = '75%' }
            if (cloudcover == 8) { cloudcover = '87%' }
            if (cloudcover == 9) { cloudcover = '97%' }
            if (seeing == 1) { seeing = '<0.5"' }
            if (seeing == 2) { seeing = '0.75"' }
            if (seeing == 3) { seeing = '1"' }
            if (seeing == 4) { seeing = '1.25"' }
            if (seeing == 5) { seeing = '1.5"' }
            if (seeing == 6) { seeing = '2"' }
            if (seeing == 7) { seeing = '2.5"' }
            if (seeing == 8) { seeing = '>2.5"' }
            if (transparency == 1) { transparency = '0.3' }
            if (transparency == 2) { transparency = '0.4' }
            if (transparency == 3) { transparency = '0.5' }
            if (transparency == 4) { transparency = '0.6' }
            if (transparency == 5) { transparency = '0.7' }
            if (transparency == 6) { transparency = '0.85' }
            if (transparency == 7) { transparency = '1' }
            if (transparency == 8) { transparency = '>1' }
            if (transparency == 1) { transparency = '0.3' }
            if (transparency == 2) { transparency = '0.4' }
            if (transparency == 3) { transparency = '0.5' }
            if (transparency == 4) { transparency = '0.6' }
            if (transparency == 5) { transparency = '0.7' }
            if (transparency == 6) { transparency = '0.85' }
            if (transparency == 7) { transparency = '1' }
            if (transparency == 8) { transparency = '>1' }
            if (lifted_index == -10) { lifted_index = '<-7' }
            if (lifted_index == -6) { lifted_index = '-6' }
            if (lifted_index == -4) { lifted_index = '-4' }
            if (lifted_index == -1) { lifted_index = '-1.5' }
            if (lifted_index == 2) { lifted_index = '2' }
            if (lifted_index == 6) { lifted_index = '6' }
            if (lifted_index == 10) { lifted_index = '9' }
            if (lifted_index == 15) { lifted_index = '>11' }
            if (P0 <= 55) {
              console.log(55)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/0-55.jpg'
                , q1: '不适宜观测'
              })

            }
            if (56 <= P0 && P0 <= 65) {
              console.log(65)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/56-65.jpg'
                , q1: '勉强可以观测'
              })

            }
            if (66 <= P0 && P0 <= 80) {
              console.log(80)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/66-80.jpg'
                , q1: '可以观测'
              })

            }
            if (81 <= P0 && P0 <= 95) {
              console.log(95)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/81-95.jpg'
                , q1: '适合观测'
              })

            }
            if (96 <= P0 && P0 <= 100) {
              console.log(100)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/96-100.jpg'
                , q1: '非常适合观测'
              })

            }
            app.globalData.jd = longitude,
              app.globalData.wd = latitude
            that.setData({
              locat: location,
              cloudcover: cloudcover,
              seeing: seeing,
             // rh2m: rh2m,
              temp: temp,
              temp2m: temp2m,
              transparency: transparency,
              lifted_index: lifted_index,
              P0: P0,
            
            })
            wx.reportAnalytics('search_p0', {
              locat: location,
              p0: P0
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
     //console.log(res)       
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
             // rh2m: '加载失败',
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
            if (cloudcover == 1) { cloudcover = '3%' }
            if (cloudcover == 2) { cloudcover = '13%' }
            if (cloudcover == 3) { cloudcover = '25%' }
            if (cloudcover == 4) { cloudcover = '37%' }
            if (cloudcover == 5) { cloudcover = '50%' }
            if (cloudcover == 6) { cloudcover = '62%' }
            if (cloudcover == 7) { cloudcover = '75%' }
            if (cloudcover == 8) { cloudcover = '87%' }
            if (cloudcover == 9) { cloudcover = '97%' }
            if (seeing == 1) { seeing = '<0.5"' }
            if (seeing == 2) { seeing = '0.75"' }
            if (seeing == 3) { seeing = '1"' }
            if (seeing == 4) { seeing = '1.25"' }
            if (seeing == 5) { seeing = '1.5"' }
            if (seeing == 6) { seeing = '2"' }
            if (seeing == 7) { seeing = '2.5"' }
            if (seeing == 8) { seeing = '>2.5"' }
            if (transparency == 1) { transparency = '0.3' }
            if (transparency == 2) { transparency = '0.4' }
            if (transparency == 3) { transparency = '0.5' }
            if (transparency == 4) { transparency = '0.6' }
            if (transparency == 5) { transparency = '0.7' }
            if (transparency == 6) { transparency = '0.85' }
            if (transparency == 7) { transparency = '1' }
            if (transparency == 8) { transparency = '>1' }
            if (transparency == 1) { transparency = '0.3' }
            if (transparency == 2) { transparency = '0.4' }
            if (transparency == 3) { transparency = '0.5' }
            if (transparency == 4) { transparency = '0.6' }
            if (transparency == 5) { transparency = '0.7' }
            if (transparency == 6) { transparency = '0.85' }
            if (transparency == 7) { transparency = '1' }
            if (transparency == 8) { transparency = '>1' }
            if (lifted_index == -10) { lifted_index = '<-7' }
            if (lifted_index == -6) { lifted_index = '-6' }
            if (lifted_index == -4) { lifted_index = '-4' }
            if (lifted_index == -1) { lifted_index = '-1.5' }
            if (lifted_index == 2) { lifted_index = '2' }
            if (lifted_index == 6) { lifted_index = '6' }
            if (lifted_index == 10) { lifted_index = '9' }
            if (lifted_index == 15) { lifted_index = '>11' }

            if (P0 <= 55) {
              console.log(55)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/0-55.jpg'
                , q1: '不适宜观测'
              })

            }
            if (56 <= P0 && P0 <= 65) {
              console.log(65)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/56-65.jpg'
                , q1: '勉强可以观测'
              })

            }
            if (66 <= P0 && P0 <= 80) {
              console.log(80)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/66-80.jpg'
                , q1: '可以观测'
              })

            }
            if (81 <= P0 && P0 <= 95) {
              console.log(95)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/81-95.jpg'
                , q1: '适合观测'
              })

            }
            if (96 <= P0 && P0 <= 100) {
              console.log(100)
              console.log(P0)
              that.setData({
                jpg: 'https://api.majorbillliu.com/media/questions/images/96-100.jpg'
                , q1: '非常适合观测'
              })

            }
            that.setData({
              locat: location,
              cloudcover: cloudcover,
              seeing: seeing,
             // rh2m: rh2m,
              temp:temp,
              temp2m: temp2m,
              transparency:transparency,
              lifted_index:lifted_index,
              P0: P0,
            })
            wx.reportAnalytics('search_p0', {
              locat: location,
              p0: P0
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
  }, gotoPage6: function () {
    wx.navigateTo({ url: 'jy', })
  },
  getUserInfo: function(e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

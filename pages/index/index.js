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
    locat: '定位中...',
    cloudcover: '加载中...',
    seeing: '加载中...',
    rh2m: '加载中...',
    q1: '',
    temp: '加载中...',
    temp2m: '加载中...',
    transparency: '加载中...',
    lifted_index: '加载中...',
    P0: "--",
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
    that.setData({
      hid: false,
      hid2:true,
      isLoad: false
    })
    wx.getLocation({

      type: 'wgs84',
      success: function (res) {
        ////console.log(res)
 
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
       
            that.setData({
              hid: true,
              hid2: false,
              isLoad: false
            })
            setTimeout(function () {
              that.setData({
                hid2: true
              })
            }, 2000)
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
            var scloudcover = ''
            var sseeing = ''
            var strans = ''
            var slifted = ''
            that.setData({
              isLoad: true
            })
            setTimeout(function () {
              that.setData({
                hid: true
              })
              //要延时执行的代码

            }, 2000)
            if (cloudcover == 1) { cloudcover = '3%', scloudcover = '万里无云' }
            if (cloudcover == 2) { cloudcover = '13%', scloudcover = '少量云朵，可忽略' }
            if (cloudcover == 3) { cloudcover = '25%', scloudcover = '云层稀薄' }
            if (cloudcover == 4) { cloudcover = '37%', scloudcover = '云层较薄' }
            if (cloudcover == 5) { cloudcover = '50%', scloudcover = '云层明显' }
            if (cloudcover == 6) { cloudcover = '62%', scloudcover = '云层稍厚' }
            if (cloudcover == 7) { cloudcover = '75%', scloudcover = '云层较厚' }
            if (cloudcover == 8) { cloudcover = '87%', scloudcover = '云层很厚' }
            if (cloudcover == 9) { cloudcover = '97%', scloudcover = '云层很厚，天空不可见' }

            if (seeing == 1) { seeing = '<0.5"', sseeing = '视宁度很差，大气湍流干扰很大' }
            if (seeing == 2) { seeing = '0.75"', sseeing = '视宁度差，大气湍流干扰明显' }
            if (seeing == 3) { seeing = '1"', sseeing = '视宁度较差，天体闪烁较明显' }
            if (seeing == 4) { seeing = '1.25"', sseeing = '视宁度稍差，可见天体闪烁' }
            if (seeing == 5) { seeing = '1.5"', sseeing = '视宁度适中' }
            if (seeing == 6) { seeing = '2"', sseeing = '视宁度较好，天体无明显闪烁' }
            if (seeing == 7) { seeing = '2.5"', sseeing = '视宁度好，大气湍流干扰可忽略' }
            if (seeing == 8) { seeing = '>2.5"', sseeing = '视宁度非常好，无干扰' }
            if (transparency == 1) { transparency = '0.3', strans = '透明度非常差，天空浑浊' }
            if (transparency == 2) { transparency = '0.4', strans = '透明度差，天空较浑浊' }
            if (transparency == 3) { transparency = '0.5', strans = '透明度较差，天空通透性差' }
            if (transparency == 4) { transparency = '0.6', strans = '透明度一般，天空通透性不好' }
            if (transparency == 5) { transparency = '0.7', strans = '透明度适中' }
            if (transparency == 6) { transparency = '0.85', strans = '透明度较好，天空较通透' }
            if (transparency == 7) { transparency = '1', strans = '透明度好，天空清澈' }
            if (lifted_index == -10) { lifted_index = '<-7', slifted = '非常不稳定，短期内观测条件很可能有较大改变' }
            if (lifted_index == -6) { lifted_index = '-6', slifted = '不稳定，短期内观测条件很可能改变' }
            if (lifted_index == -4) { lifted_index = '-4', slifted = '不太稳定，短期内观测条件可能改变' }
            if (lifted_index == -1) { lifted_index = '-1.5', slifted = '一般，短期内观测条件可能改变' }
            if (lifted_index == 2) { lifted_index = '2', slifted = '适中，短期内观测条件可能改变不大' }
            if (lifted_index == 6) { lifted_index = '6', slifted = '较好，短期内观测条件可能较稳定' }
            if (lifted_index == 10) { lifted_index = '9', slifted = '好，短期内观测条件改变的可能较小' }
            if (lifted_index == 15) { lifted_index = '>11', slifted = '非常好，短期内观测条件很可能不改变' }

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
              temp: temp,
              temp2m: temp2m,
              transparency: transparency,
              lifted_index: lifted_index,
              P0: P0,
              scloudcover: scloudcover,
              sseeing: sseeing,
              strans: strans,
              slifted: slifted,
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

    var that = this
    that.setData({
      hid: false,
      hid2:true,
      isLoad: false,
      diss:true
    })
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
      
            that.setData({
              locat: '加载失败',
              cloudcover: '加载失败',
              seeing: '加载失败',
              // rh2m: '加载失败',
              temp: '加载失败',
              temp2m: '加载失败',
              transparency: '加载失败',
              lifted_index: '加载失败',
              hid2: false,
              P0: "--",
              diss: false
            })
            setTimeout(function () {
              that.setData({
                hid2: true
              })
            }, 2000)
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
            var scloudcover = ''
            var sseeing = ''
            var strans = ''
            var slifted = ''
            that.setData({
              isLoad: true,
               hid2: true,
              diss: false
            })

            setTimeout(function () {
              that.setData({
                hid: true
              })
              //要延时执行的代码

            }, 2000)
            if (cloudcover == 1) { cloudcover = '3%', scloudcover = '万里无云' }
            if (cloudcover == 2) { cloudcover = '13%', scloudcover = '少量云朵，可忽略' }
            if (cloudcover == 3) { cloudcover = '25%', scloudcover = '云层稀薄' }
            if (cloudcover == 4) { cloudcover = '37%', scloudcover = '云层较薄' }
            if (cloudcover == 5) { cloudcover = '50%', scloudcover = '云层明显' }
            if (cloudcover == 6) { cloudcover = '62%', scloudcover = '云层稍厚' }
            if (cloudcover == 7) { cloudcover = '75%', scloudcover = '云层较厚' }
            if (cloudcover == 8) { cloudcover = '87%', scloudcover = '云层很厚' }
            if (cloudcover == 9) { cloudcover = '97%', scloudcover = '云层很厚，天空不可见' }

            if (seeing == 1) { seeing = '<0.5"', sseeing = '视宁度很差，大气湍流干扰很大' }
            if (seeing == 2) { seeing = '0.75"', sseeing = '视宁度差，大气湍流干扰明显' }
            if (seeing == 3) { seeing = '1"', sseeing = '视宁度较差，天体闪烁较明显' }
            if (seeing == 4) { seeing = '1.25"', sseeing = '视宁度稍差，可见天体闪烁' }
            if (seeing == 5) { seeing = '1.5"', sseeing = '视宁度适中' }
            if (seeing == 6) { seeing = '2"', sseeing = '视宁度较好，天体无明显闪烁' }
            if (seeing == 7) { seeing = '2.5"', sseeing = '视宁度好，大气湍流干扰可忽略' }
            if (seeing == 8) { seeing = '>2.5"', sseeing = '视宁度非常好，无干扰' }
            if (transparency == 1) { transparency = '0.3', strans = '透明度非常差，天空浑浊' }
            if (transparency == 2) { transparency = '0.4', strans = '透明度差，天空较浑浊' }
            if (transparency == 3) { transparency = '0.5', strans = '透明度较差，天空通透性差' }
            if (transparency == 4) { transparency = '0.6', strans = '透明度一般，天空通透性不好' }
            if (transparency == 5) { transparency = '0.7', strans = '透明度适中' }
            if (transparency == 6) { transparency = '0.85', strans = '透明度较好，天空较通透' }
            if (transparency == 7) { transparency = '1', strans = '透明度好，天空清澈' }
            if (lifted_index == -10) { lifted_index = '<-7', slifted = '非常不稳定，短期内观测条件很可能有较大改变' }
            if (lifted_index == -6) { lifted_index = '-6', slifted = '不稳定，短期内观测条件很可能改变' }
            if (lifted_index == -4) { lifted_index = '-4', slifted = '不太稳定，短期内观测条件可能改变' }
            if (lifted_index == -1) { lifted_index = '-1.5', slifted = '一般，短期内观测条件可能改变' }
            if (lifted_index == 2) { lifted_index = '2', slifted = '适中，短期内观测条件可能改变不大' }
            if (lifted_index == 6) { lifted_index = '6', slifted = '较好，短期内观测条件可能较稳定' }
            if (lifted_index == 10) { lifted_index = '9', slifted = '好，短期内观测条件改变的可能较小' }
            if (lifted_index == 15) { lifted_index = '>11', slifted = '非常好，短期内观测条件很可能不改变' }
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
              scloudcover: scloudcover,
              sseeing: sseeing,
              strans: strans,
              slifted: slifted,
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
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function () {
    var that = this

    that.setData({
      hid: false,
      hid2: true,
      isLoad: false
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
  
            that.setData({
              locat: '加载失败',
              cloudcover: '加载失败',
              seeing: '加载失败',
              // rh2m: '加载失败',
              temp: '加载失败',
              temp2m: '加载失败',
              transparency: '加载失败',
              lifted_index: '加载失败',
              hid2: false,
              P0: "--",
            })
            setTimeout(function () {
              that.setData({
                hid2: true
              })
            }, 2000)
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
            var scloudcover = ''
            var sseeing = ''
            var strans = ''
            var slifted = ''
            that.setData({
              isLoad: true
            })
            setTimeout(function () {
              that.setData({
                hid: true
              })
              //要延时执行的代码

            }, 2000)
            if (cloudcover == 1) { cloudcover = '3%', scloudcover = '万里无云' }
            if (cloudcover == 2) { cloudcover = '13%', scloudcover = '少量云朵，可忽略' }
            if (cloudcover == 3) { cloudcover = '25%', scloudcover = '云层稀薄' }
            if (cloudcover == 4) { cloudcover = '37%', scloudcover = '云层较薄' }
            if (cloudcover == 5) { cloudcover = '50%', scloudcover = '云层明显' }
            if (cloudcover == 6) { cloudcover = '62%', scloudcover = '云层稍厚' }
            if (cloudcover == 7) { cloudcover = '75%', scloudcover = '云层较厚' }
            if (cloudcover == 8) { cloudcover = '87%', scloudcover = '云层很厚' }
            if (cloudcover == 9) { cloudcover = '97%', scloudcover = '云层很厚，天空不可见' }

            if (seeing == 1) { seeing = '<0.5"', sseeing = '视宁度很差，大气湍流干扰很大' }
            if (seeing == 2) { seeing = '0.75"', sseeing = '视宁度差，大气湍流干扰明显' }
            if (seeing == 3) { seeing = '1"', sseeing = '视宁度较差，天体闪烁较明显' }
            if (seeing == 4) { seeing = '1.25"', sseeing = '视宁度稍差，可见天体闪烁' }
            if (seeing == 5) { seeing = '1.5"', sseeing = '视宁度适中' }
            if (seeing == 6) { seeing = '2"', sseeing = '视宁度较好，天体无明显闪烁' }
            if (seeing == 7) { seeing = '2.5"', sseeing = '视宁度好，大气湍流干扰可忽略' }
            if (seeing == 8) { seeing = '>2.5"', sseeing = '视宁度非常好，无干扰' }
            if (transparency == 1) { transparency = '0.3', strans = '透明度非常差，天空浑浊' }
            if (transparency == 2) { transparency = '0.4', strans = '透明度差，天空较浑浊' }
            if (transparency == 3) { transparency = '0.5', strans = '透明度较差，天空通透性差' }
            if (transparency == 4) { transparency = '0.6', strans = '透明度一般，天空通透性不好' }
            if (transparency == 5) { transparency = '0.7', strans = '透明度适中' }
            if (transparency == 6) { transparency = '0.85', strans = '透明度较好，天空较通透' }
            if (transparency == 7) { transparency = '1', strans = '透明度好，天空清澈' }
            if (lifted_index == -10) { lifted_index = '<-7', slifted = '非常不稳定，短期内观测条件很可能有较大改变' }
            if (lifted_index == -6) { lifted_index = '-6', slifted = '不稳定，短期内观测条件很可能改变' }
            if (lifted_index == -4) { lifted_index = '-4', slifted = '不太稳定，短期内观测条件可能改变' }
            if (lifted_index == -1) { lifted_index = '-1.5', slifted = '一般，短期内观测条件可能改变' }
            if (lifted_index == 2) { lifted_index = '2', slifted = '适中，短期内观测条件可能改变不大' }
            if (lifted_index == 6) { lifted_index = '6', slifted = '较好，短期内观测条件可能较稳定' }
            if (lifted_index == 10) { lifted_index = '9', slifted = '好，短期内观测条件改变的可能较小' }
            if (lifted_index == 15) { lifted_index = '>11', slifted = '非常好，短期内观测条件很可能不改变' }

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
              temp: temp,
              temp2m: temp2m,
              transparency: transparency,
              lifted_index: lifted_index,
              P0: P0,
              scloudcover: scloudcover,
              sseeing: sseeing,
              strans: strans,
              slifted: slifted,
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
    } else if (this.data.canIUse) {
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
    wx.navigateTo({ url: 'more/index', })
  }

  , gotoPage3: function () {
    wx.navigateTo({ url: 'qs/index', })
  }, gotoPage6: function () {
    wx.navigateTo({ url: 'jy', })
  },
  getUserInfo: function (e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

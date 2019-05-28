// pages/bk/result.js
var app = getApp();  

Page({

  /**
   * 页面的初始数据
   */
  data: {
count:'',
pgc:'',
    search:'',
page:"",
    list:[{
    },{

    }]
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

  },nextpage:function(){
    console.log(pgc)
    this.onLoad()
var that=this
    app.globalData.page1 = app.globalData.page1+1
     var pgc=app.globalData.page1
      wx.request({
        url: 'https://api.majorbillliu.com/knowledge',
        data: {
          search: app.globalData.search,
          page: app.globalData.page1
      }, success(res) {
          var count = res.data.count
          var pgc = count / 15
          console.log(pgc)
      that.setData({
        count: res.data.count,
        list: res.data.results,
        search: app.globalData.search,
        page: app.globalData.page1,
         pgc:count/15
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
      url: 'https://api.majorbillliu.com/knowledge',
      data: {
        search: app.globalData.search,
        page: app.globalData.page1
      }, success(res) {
        var count = res.data.count
        var pgc = count / 15
        console.log(pgc)
        that.setData({
          count: res.data.count,
          list: res.data.results,
          search: app.globalData.search,
          page: app.globalData.page1,
          pgc: count / 15
        })
      }

    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  det:function(e){
   
   
    app.globalData.idp = e.currentTarget.id;
    wx.navigateTo({ url: 'detail/index', })
  

  },
  onShow: function (res) {

    var that = this
        console.log(res)
        wx.showToast({
          title: '搜索中',
          icon: 'loading',
          duration: 6000
        }), 
          app.globalData.page1=1,
        wx.request({
          url: 'https://api.majorbillliu.com/knowledge',
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
            
            var id111 = res.data.results[0].id
            var Name111 = res.data.results[0].Name
            var Bayer111 = res.data.results[0].Bayer
            var Fransted111 = res.data.results[0].Fransted
            var Variable_star111 = res.data.results[0].Variable_star
            var HD111 = res.data.results[0].HD
            var HIP111 = res.data.results[0].HIP
            var Right_ascension111 = res.data.results[0].Right_ascension
            var Declination111 = res.data.results[0].Declination
            var Apparent_magnitude111 = res.data.results[0].Apparent_magnitude
            var Absolute_magnitude111 = res.data.results[0].Absolute_magnitude
            var Distance111 = res.data.results[0].Distance
            var Classification111 = res.data.results[0].Classification
            var Notes111 = res.data.results[0].Notes
            var Constellation111 = res.data.results[0].Constellation

            var id222 = res.data.results[1].id
            var Name222 = res.data.results[1].Name
            var Bayer222 = res.data.results[1].Bayer
            var Fransted222 = res.data.results[1].Fransted
            var Variable_star222 = res.data.results[1].Variable_star
            var HD222 = res.data.results[1].HD
            var HIP222 = res.data.results[1].HIP
            var Right_ascension222 = res.data.results[1].Right_ascension
            var Declination222 = res.data.results[1].Declination
            var Apparent_magnitude222 = res.data.results[1].Apparent_magnitude
            var Absolute_magnitude222 = res.data.results[1].Absolute_magnitude
            var Distance222 = res.data.results[1].Distance
            var Classification222 = res.data.results[1].Classification
            var Notes222 = res.data.results[1].Notes
            var Constellation222 = res.data.results[1].Constellation


            var id333 = res.data.results[2].id
            var Name333 = res.data.results[2].Name
            var Bayer333 = res.data.results[2].Bayer
            var Fransted333 = res.data.results[2].Fransted
            var Variable_star333 = res.data.results[2].Variable_star
            var HD333 = res.data.results[2].HD
            var HIP333 = res.data.results[2].HIP
            var Right_ascension333 = res.data.results[2].Right_ascension
            var Declination333 = res.data.results[2].Declination
            var Apparent_magnitude333 = res.data.results[2].Apparent_magnitude
            var Absolute_magnitude333 = res.data.results[2].Absolute_magnitude
            var Distance333 = res.data.results[2].Distance
            var Classification333 = res.data.results[2].Classification
            var Notes333 = res.data.results[2].Notes
            var Constellation333 = res.data.results[2].Constellation


            var id444 = res.data.results[3].id
            var Name444 = res.data.results[3].Name
            var Bayer444 = res.data.results[3].Bayer
            var Fransted444 = res.data.results[3].Fransted
            var Variable_star444 = res.data.results[3].Variable_star
            var HD444 = res.data.results[3].HD
            var HIP444 = res.data.results[3].HIP
            var Right_ascension444 = res.data.results[3].Right_ascension
            var Declination444 = res.data.results[3].Declination
            var Apparent_magnitude444 = res.data.results[3].Apparent_magnitude
            var Absolute_magnitude444 = res.data.results[3].Absolute_magnitude
            var Distance444 = res.data.results[3].Distance
            var Classification444 = res.data.results[3].Classification
            var Notes444 = res.data.results[3].Notes
            var Constellation444 = res.data.results[3].Constellation


            var id555 = res.data.results[4].id
            var Name555 = res.data.results[4].Name
            var Bayer555 = res.data.results[4].Bayer
            var Fransted555 = res.data.results[4].Fransted
            var Variable_star555 = res.data.results[4].Variable_star
            var HD555 = res.data.results[4].HD
            var HIP555 = res.data.results[4].HIP
            var Right_ascension555 = res.data.results[4].Right_ascension
            var Declination555 = res.data.results[4].Declination
            var Apparent_magnitude555 = res.data.results[4].Apparent_magnitude
            var Absolute_magnitude555 = res.data.results[4].Absolute_magnitude
            var Distance555 = res.data.results[4].Distance
            var Classification555 = res.data.results[4].Classification
            var Notes555 = res.data.results[4].Notes
            var Constellation555 = res.data.results[4].Constellation



            var id666 = res.data.results[5].id
            var Name666 = res.data.results[5].Name
            var Bayer666 = res.data.results[5].Bayer
            var Fransted666 = res.data.results[5].Fransted
            var Variable_star666 = res.data.results[5].Variable_star
            var HD666 = res.data.results[5].HD
            var HIP666 = res.data.results[5].HIP
            var Right_ascension666 = res.data.results[5].Right_ascension
            var Declination666 = res.data.results[5].Declination
            var Apparent_magnitude666 = res.data.results[5].Apparent_magnitude
            var Absolute_magnitude666 = res.data.results[5].Absolute_magnitude
            var Distance666 = res.data.results[5].Distance
            var Classification666 = res.data.results[5].Classification
            var Notes666 = res.data.results[5].Notes
            var Constellation666 = res.data.results[5].Constellation


            var id777 = res.data.results[6].id
            var Name777 = res.data.results[6].Name
            var Bayer777 = res.data.results[6].Bayer
            var Fransted777 = res.data.results[6].Fransted
            var Variable_star777 = res.data.results[6].Variable_star
            var HD777 = res.data.results[6].HD
            var HIP777 = res.data.results[6].HIP
            var Right_ascension777 = res.data.results[6].Right_ascension
            var Declination777 = res.data.results[6].Declination
            var Apparent_magnitude777 = res.data.results[6].Apparent_magnitude
            var Absolute_magnitude777 = res.data.results[6].Absolute_magnitude
            var Distance777 = res.data.results[6].Distance
            var Classification777 = res.data.results[6].Classification
            var Notes777 = res.data.results[6].Notes
            var Constellation777 = res.data.results[6].Constellation


            var id888 = res.data.results[7].id
            var Name888 = res.data.results[7].Name
            var Bayer888 = res.data.results[7].Bayer
            var Fransted888 = res.data.results[7].Fransted
            var Variable_star888 = res.data.results[7].Variable_star
            var HD888 = res.data.results[7].HD
            var HIP888 = res.data.results[7].HIP
            var Right_ascension888 = res.data.results[7].Right_ascension
            var Declination888 = res.data.results[7].Declination
            var Apparent_magnitude888 = res.data.results[7].Apparent_magnitude
            var Absolute_magnitude888 = res.data.results[7].Absolute_magnitude
            var Distance888 = res.data.results[7].Distance
            var Classification888 = res.data.results[7].Classification
            var Notes888 = res.data.results[7].Notes
            var Constellation888 = res.data.results[7].Constellation


            var id999 = res.data.results[8].id
            var Name999 = res.data.results[8].Name
            var Bayer999 = res.data.results[8].Bayer
            var Fransted999 = res.data.results[8].Fransted
            var Variable_star999 = res.data.results[8].Variable_star
            var HD999 = res.data.results[8].HD
            var HIP999 = res.data.results[8].HIP
            var Right_ascension999 = res.data.results[8].Right_ascension
            var Declination999 = res.data.results[8].Declination
            var Apparent_magnitude999 = res.data.results[8].Apparent_magnitude
            var Absolute_magnitude999 = res.data.results[8].Absolute_magnitude
            var Distance999 = res.data.results[8].Distance
            var Classification999 = res.data.results[8].Classification
            var Notes999 = res.data.results[8].Notes
            var Constellation999 = res.data.results[8].Constellation


            var id101010 = res.data.results[9].id
            var Name101010 = res.data.results[9].Name
            var Bayer101010 = res.data.results[9].Bayer
            var Fransted101010 = res.data.results[9].Fransted
            var Variable_star101010 = res.data.results[9].Variable_star
            var HD101010 = res.data.results[9].HD
            var HIP101010 = res.data.results[9].HIP
            var Right_ascension101010 = res.data.results[9].Right_ascension
            var Declination101010 = res.data.results[9].Declination
            var Apparent_magnitude101010 = res.data.results[9].Apparent_magnitude
            var Absolute_magnitude101010 = res.data.results[9].Absolute_magnitude
            var Distance101010 = res.data.results[9].Distance
            var Classification101010 = res.data.results[9].Classification
            var Notes101010 = res.data.results[9].Notes
            var Constellation101010 = res.data.results[9].Constellation


            var id111111 = res.data.results[10].id
            var Name111111 = res.data.results[10].Name
            var Bayer111111 = res.data.results[10].Bayer
            var Fransted111111 = res.data.results[10].Fransted
            var Variable_star111111 = res.data.results[10].Variable_star
            var HD111111 = res.data.results[10].HD
            var HIP111111 = res.data.results[10].HIP
            var Right_ascension111111 = res.data.results[10].Right_ascension
            var Declination111111 = res.data.results[10].Declination
            var Apparent_magnitude111111 = res.data.results[10].Apparent_magnitude
            var Absolute_magnitude111111 = res.data.results[10].Absolute_magnitude
            var Distance111111 = res.data.results[10].Distance
            var Classification111111 = res.data.results[10].Classification
            var Notes111111 = res.data.results[10].Notes
            var Constellation111111 = res.data.results[10].Constellation



            var id121212 = res.data.results[11].id
            var Name121212 = res.data.results[11].Name
            var Bayer121212 = res.data.results[11].Bayer
            var Fransted121212 = res.data.results[11].Fransted
            var Variable_star121212 = res.data.results[11].Variable_star
            var HD121212 = res.data.results[11].HD
            var HIP121212 = res.data.results[11].HIP
            var Right_ascension121212 = res.data.results[11].Right_ascension
            var Declination121212 = res.data.results[11].Declination
            var Apparent_magnitude121212 = res.data.results[11].Apparent_magnitude
            var Absolute_magnitude121212 = res.data.results[11].Absolute_magnitude
            var Distance121212 = res.data.results[11].Distance
            var Classification121212 = res.data.results[11].Classification
            var Notes121212 = res.data.results[11].Notes
            var Constellation121212 = res.data.results[11].Constellation


            var id131313 = res.data.results[12].id
            var Name131313 = res.data.results[12].Name
            var Bayer131313 = res.data.results[12].Bayer
            var Fransted131313 = res.data.results[12].Fransted
            var Variable_star131313 = res.data.results[12].Variable_star
            var HD131313 = res.data.results[12].HD
            var HIP131313 = res.data.results[12].HIP
            var Right_ascension131313 = res.data.results[12].Right_ascension
            var Declination131313 = res.data.results[12].Declination
            var Apparent_magnitude131313 = res.data.results[12].Apparent_magnitude
            var Absolute_magnitude131313 = res.data.results[12].Absolute_magnitude
            var Distance131313 = res.data.results[12].Distance
            var Classification131313 = res.data.results[12].Classification
            var Notes131313 = res.data.results[12].Notes
            var Constellation131313 = res.data.results[12].Constellation


            var id141414 = res.data.results[13].id
            var Name141414 = res.data.results[13].Name
            var Bayer141414 = res.data.results[13].Bayer
            var Fransted141414 = res.data.results[13].Fransted
            var Variable_star141414 = res.data.results[13].Variable_star
            var HD141414 = res.data.results[13].HD
            var HIP141414 = res.data.results[13].HIP
            var Right_ascension141414 = res.data.results[13].Right_ascension
            var Declination141414 = res.data.results[13].Declination
            var Apparent_magnitude141414 = res.data.results[13].Apparent_magnitude
            var Absolute_magnitude141414 = res.data.results[13].Absolute_magnitude
            var Distance141414 = res.data.results[13].Distance
            var Classification141414 = res.data.results[13].Classification
            var Notes141414 = res.data.results[13].Notes
            var Constellation141414 = res.data.results[13].Constellation


            var id151515 = res.data.results[14].id
            var Name151515 = res.data.results[14].Name
            var Bayer151515 = res.data.results[14].Bayer
            var Fransted151515 = res.data.results[14].Fransted
            var Variable_star151515 = res.data.results[14].Variable_star
            var HD151515 = res.data.results[14].HD
            var HIP151515 = res.data.results[14].HIP
            var Right_ascension151515 = res.data.results[14].Right_ascension
            var Declination151515 = res.data.results[14].Declination
            var Apparent_magnitude151515 = res.data.results[14].Apparent_magnitude
            var Absolute_magnitude151515 = res.data.results[14].Absolute_magnitude
            var Distance151515 = res.data.results[14].Distance
            var Classification151515 = res.data.results[14].Classification
            var Notes151515 = res.data.results[14].Notes
            var Constellation151515 = res.data.results[14].Constellation


            console.log(app.globalData.page1)

            that.setData({
             count:count,
              list: res.data.results,
              search: app.globalData.search,
              page: app.globalData.page1,
              pgc: count / 15
            })
            var count = res.data.count
            var pgc = count / 15
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
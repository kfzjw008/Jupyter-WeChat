// pages/index/jy.js
var app = getApp();  
var util = require('../../utils/util.js'); 
var base64 = require("../../dist/example/images/base64.js");
function fix(num, length) {
  return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}
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
    all:'加载中……',
    all2: '加载中……',
    yue:'-'
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


    var time = util.formatTime(new Date());
    //获取当前时间戳
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    console.log("当前时间戳为：" + timestamp);
    //获取当前时间
    var n = timestamp * 1000;
    var date = new Date(n);
    //年
    var Y = date.getFullYear();
    //月
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时
    var h = date.getHours();
    //分
    var m = date.getMinutes();
    //秒
    var s = date.getSeconds();
    console.log("当前时间：" + Y + M + D + h + ":" + m + ":" + s);
    //转换为时间格式字符串
    console.log(date.toDateString());
    console.log(date.toGMTString());
    console.log(date.toISOString());
    console.log(date.toJSON());
    console.log(date.toLocaleDateString());
    console.log(date.toLocaleString());
    console.log(date.toLocaleTimeString());
    console.log(date.toString());
    console.log(date.toTimeString());
    console.log(date.toUTCString());
    var all2;
    //M=3
if(M==6||M==7||M==8){
  all2 = '夏季是看星的好时节，天黑以后向西看，就找到狮子星座。\n狮子座东面是室女座, 还有天蝎座。在天空南方，比较低的星空闪耀着一颗红色的亮星，它是天蝎座的主星心宿二，也是一颗处在黄道上的亮星．天蝎座的明显特征是有三颗星等距成弧摆开，心宿二恰在圆心．在中国古代天文学中，天蝎属商星，猎户属参星．刚好一升一落，永不相见，于是有诗人说："人生不相见，动如参与商"。\n天蝎座东面，就是人马座，人马座的东半部分，有六颗星，被称为南斗。\n在天蝎与人马一带的星空，有一条白茫茫的光带，那就是银河了．顺着银河向东北找，可以看到紧靠着一个四边形的织女星和带着左右两颗小星的牛郎星．而与着这两颗亮星组成一个三角形的一颗亮星，就是天津四，它和它所属的天鹅座的其它星组成了一个十字，很好辨认。\n北斗七星此时在西北天，找到牧夫座后，向东，在差不多天顶的位置，有个半圆形的星座，叫做北冕座，就象一个镶满珠宝的皇冠，这里聚集着大量的星系。'
  this.setData({
    yue: M,
    all2: all2,
     pic3: base64.pic31
  })
}
    if (M == 9|| M ==10 || M == 11) {
      all2 = '“飞马当空，银河斜挂”，是秋季星空的象征。\n秋季四边形的4颗星分别叫做室宿一、室宿二、壁宿一、壁宿二。\n秋夜星空多的是王公贵族：仙王，仙后，仙女，英仙，飞马，鲸鱼．\n天顶偏东是飞马座．仙女座就是在飞马座东北的一字形星座．仙女座北面是W形的仙后座．仙后座西面是仙王座，东面是英仙座．\n英仙座的大陵五是著名的食变星，鲸鱼座中有一个长周期变星叫刍蒿增二（即鲸鱼座ο星）。英仙座与仙后座之间是英仙座双重星团．仙女座则有一个著名的大星系：仙女座大星云．这是一个比银河系还大得多的星系，也是北半天中距离我们最近的一个星系．\n秋季星空的亮星较少， 但像仙女座河外星系（M31）这样的深空天体却比比皆是。\n'
      this.setData({
        yue: M,
        all2: all2,
        pic3: base64.pic32
      })
    }
    if (M == 12 || M == 1 || M == 2) {
      all2 = '冬季虽然寒冷，但星空却极其壮丽．\n猎户座是冬季星空的中心．\n在厦门的纬度，入夜后，就可看到三颗排列整齐的亮星，民间说"三星高照"就是它们了．三星的周围有四颗亮星和三星组成一个长方形，就是猎户座．三星就是猎户的腰带．\n三星连线想左下方延长，就能遇到全天最亮的恒星：天狼星．它是大犬座的主星．\n从三星向右上方延长就是红色亮星毕宿五．旁边是五车二．\n金牛座东边稍偏北是双子座，在向东是巨蟹座，再往东是狮子的头部了．\n猎户座的西南是漫长巨大却十分暗淡的波江座．主星水委一，要到广东才依稀看到\n猎户座正南方是天兔，天鸽座．在往南是船底座的主星老人星．\n猎户座的三星下方，有一片亮斑，那就是猎户座大星云．三星最左边的那颗旁边是马头星云．金牛座的昴星团是一个极好看的疏散星团．大约由500颗恒星组成。\n'
      this.setData({
        yue: M,
        all2: all2,
        pic3: base64.pic33
      })
    }
    if (M == 3 || M == 4 || M == 5) {
      all2 = '春季星空的主要星座有：大熊座、小熊座、狮子座、牧夫座、猎犬座、室女座、乌鸦座长蛇座。\n在天顶略偏东北的方向，可以看到北斗七星，斗口两颗星的连线，指向北极星．而此时的斗柄，正指向东，所以有云：斗柄东指，天下皆春．斗柄南指，天下皆夏．斗柄西指天下皆秋．斗柄北指，天下皆冬．\n而顺着斗柄的指向，可以找到一颗亮星，即牧夫座的大角．然后到达室女座的主星角宿一．在大熊座的附近，可以找到一个叫做猎犬座的小星座，其中有一个漩涡星云，即M51, 是有名的河外星系．\n长蛇头部的东北，是著名的狮子座．它是春夜星空最辉煌的中心．狮子星座的主星，中名轩辕十四，是处于黄道上的一颗一等星．有时有明亮的行星走近时，就非常好看了．\n春季星空最显著的是春季大三角。\n'
      this.setData({
        yue: M,
        all2: all2,
        pic3: base64.pic34
      })
    }

    var that = this

    wx.getLocation({

      type: 'wgs84',
      success: function (res) {
        //console.log(res)
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
            //console.log(res)
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
            //console.log(all)
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
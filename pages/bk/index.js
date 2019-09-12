var app = getApp();  
var Page = require('../../utils/xmadx_sdk.min.js').xmad(Page).xmPage;
  Page({
    data: {
      xmad: {
        adData: {},
        ad: {
          banner: "xm9065dd29902f0f3959d5fb0becfa6d", 
        }
      },
      inputShowed: false,
      inpu: ''
    },
    showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function (e) {
    var that = this
    that.setData({
      
     

    });
   // app.globalData.search = e.detail.value,
      //console.log(e.detail.value,app.globalData.search)
      wx.navigateTo({ url: 'result', })
      //inputVal: "",
      //inputShowed: false
   
    }, hideInput2: function (e) {
      var that = this
    app.globalData.search = e.currentTarget.id
    
      // app.globalData.search = e.detail.value,
      //console.log(e.detail.value, app.globalData.search)
      wx.navigateTo({ url: 'result', })
      //inputVal: "",
      //inputShowed: false

    },
  clearInput: function () {
    this.setData({
    
    });
  },
  inputTyping: function (e) {
    var that = this

    app.globalData.search = e.detail.value
    //console.log(this.inpu);
    //console.log(e.detail.value);
  }

});
 
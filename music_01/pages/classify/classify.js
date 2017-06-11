//index.js
//获取应用实例
var app = getApp()
Page({  
  //事件处理函数
  bindViewTap_a: function () {   
    wx.navigateTo({
      url: '../music/music'
    })
  },
  bindViewTap_b: function () {
    wx.navigateTo({
      url: '../music2/music2'
    })
  }
})

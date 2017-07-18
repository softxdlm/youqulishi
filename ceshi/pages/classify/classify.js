//index.js
//获取应用实例
var app = getApp()
Page({ 
  data:{
    classify: [     
      {
        type: 'primary',
        name: '一',
        url: '../one/one'
      }, 
      {
        type: 'primary',
        name: '五',
        url: '../five/five'
      }
    ]    
  } ,
  //事件处理函数
  playTap: function (e) {
    const dataset = e.currentTarget.dataset;
    wx.navigateTo({
      url: dataset.id
    })
  }  
})

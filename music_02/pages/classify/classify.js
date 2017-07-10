//index.js
//获取应用实例
var app = getApp()
Page({ 
  data:{
    classify: [
      {
        type:'primary',
        name: "诗词解读（一）",
        url:'../music/music'  
      },
      {
        type: 'default',
        name: '诗词解读（二）', 
        url: '../music2/music2'       
      },
      {
        type: 'primary',
        name: '一年级',
        url: '../one/one' 
      },
      {
        type: 'default',
        name: '二年级',
        url: '../two/two'
      },
      {
        type: 'primary',
        name: '三年级',
        url: '../three/three'
      },
      {
        type: 'default',
        name: '四年级',
        url: '../four/four'
      },
      {
        type: 'primary',
        name: '五年级',
        url: '../five/five'
      },
      {
        type: 'default',
        name: '六年级',
        url: '../six/six'
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

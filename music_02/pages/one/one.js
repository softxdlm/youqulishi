// audio.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    // this.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay: function (e) {
    var tempFilePath = e.target.dataset.src
    this.setData({
      src: tempFilePath
    })
  }, 
  onShareAppMessage: function () {
    return {
      title: '一年级诗词合集',
      path: '/pages/one/one',
      success: function (res) {
        wx.showToast({
          title: '分享成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '分享失败',
          icon: 'warn',
          duration: 2000
        })
      }
    }
  },
  data: {
    songs:[
      {
        mp3: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/110201静夜思.mp3",
        pic: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/shici.jpg",
        name: "静夜思",       
        author: "每日解读诗词",  
      },
      {
        mp3: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/110202静夜思.mp3",
        pic: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/shici.jpg",
        name: "静夜思",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/120101春晓.mp3",
        pic: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/shici.jpg",
        name: "春晓",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/120102春晓.mp3",
        pic: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/shici.jpg",
        name: "春晓",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/120201村居.mp3",
        pic: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/shici.jpg",
        name: "村居",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/120202村居.mp3",
        pic: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/shici.jpg",
        name: "村居",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/120301所见.mp3",
        pic: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/shici.jpg",
        name: "所见",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/120302所见.mp3",
        pic: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/shici.jpg",
        name: "所见",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/120401小池.mp3",
        pic: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/shici.jpg",
        name: "小池",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/120402小池.mp3",
        pic: "http://git.oschina.net/huang_bo/meirijiedushici2/raw/master/shici.jpg",
        name: "小池",
        author: "每日解读诗词",
      }
    ]    
  }
})
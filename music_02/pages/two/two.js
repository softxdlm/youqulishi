// audio.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    songs:[
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/210101赠刘景文.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "赠刘景文",       
        author: "每日解读诗词",  
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/210201山行.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "山行",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/210301回乡偶书.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "回乡偶书",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/210401赠汪伦.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "赠汪伦",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/220101赋得古原草送别.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "赋得古原草送别",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/220201宿新市徐公店.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "宿新市徐公店",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/220301望庐山瀑布.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "望庐山瀑布",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/220401绝句.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "绝句",
        author: "每日解读诗词",
      }
    ]    
  }
})
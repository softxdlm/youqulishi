// audio.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    // wx.onBackgroundAudioPlay(function () {
    //   console.log("audio play");
    // })
  },
  
  audioPlay: function (e) {   
    const dataset = e.currentTarget.dataset;
    var tempFilePath = dataset.src
    var temptitle = dataset.name
    // this.setData({
    //   src: tempFilePath
    // })
    wx.playBackgroundAudio({
      dataUrl: tempFilePath,
      title: temptitle,
      coverImgUrl: 'http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg'
    })
    this.audioCtx.play();
  },
  bindplay: function () {
    // this.audioCtx.play();
  },
  

  // audioPlay: function () {   
  //   const dataset = e.currentTarget.dataset;
  //   var tempFilePath = dataset.src
  //   wx.playBackgroundAudio({
  //     dataUrl: tempFilePath,
  //     title: '诗词',
  //     coverImgUrl: 'http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg'
  //   })
  // },
  data: {
    songs: [
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/510101泊船瓜洲.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "泊船瓜洲",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/510201秋思.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "秋思",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/510301长相思.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "长相思",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/520101牧童.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "牧童",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/520201舟过安仁.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "舟过安仁",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/520301清平乐•村居.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "清平乐•村居",
        author: "每日解读诗词",
      }
    ]
  }
})
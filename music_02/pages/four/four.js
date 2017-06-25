// audio.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    songs:[
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/410101题西林壁.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "题西林壁",       
        author: "每日解读诗词",  
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/410201游山西村.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "游山西村",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/410301黄鹤楼送孟浩然之广陵.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "黄鹤楼送孟浩然之广陵",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/410401送元二使安西.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "送元二使安西",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/420101独坐敬亭山.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "独坐敬亭山",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/420201望洞庭.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "望洞庭",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/420301忆江南.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "忆江南",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/420401渔歌子.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "渔歌子",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/420501乡村四月.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "乡村四月",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/420601四时田园杂兴.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "四时田园杂兴",
        author: "每日解读诗词",
      }
    ]    
  }
})
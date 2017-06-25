// audio.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    songs: [
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/310101夜书所见.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "夜书所见",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/310201九月九日忆山东兄弟.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "九月九日忆山东兄弟",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/310301望天门山.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "望天门山",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/310401饮湖上初晴后雨.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "饮湖上初晴后雨",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/320101咏柳.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "咏柳",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/320201春日.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "春日",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/320301乞巧.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "乞巧",
        author: "每日解读诗词",
      },
      {
        mp3: "http://git.oschina.net/huang_bo/ersannianji/raw/master/320401嫦娥.mp3",
        pic: "http://git.oschina.net/huang_bo/ersannianji/raw/master/shici.jpg",
        name: "嫦娥",
        author: "每日解读诗词",
      }
    ]
  }
})
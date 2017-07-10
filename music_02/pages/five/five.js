// audio.js
Page({
  audioPlay: function (e) {
    var tempFilePath = e.target.dataset.src  
    this.setData({
      src: tempFilePath
    })
  },
  onShareAppMessage: function () {
    return {
      title: '五年级诗词合集',
      path: '/pages/five/five',
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
    songs: [
      {
        id: "1",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/510101泊船瓜洲.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "泊船瓜洲",
        author: "每日解读诗词",
      },
      {
        id: "2",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/510201秋思.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "秋思",
        author: "每日解读诗词",
      },
      {
        id: "3",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/510301长相思.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "长相思",
        author: "每日解读诗词",
      },
      {
        id: "4",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/520101牧童.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "牧童",
        author: "每日解读诗词",
      },
      {
        id: "5",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/520201舟过安仁.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "舟过安仁",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/520301清平乐•村居.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "清平乐•村居",
        author: "每日解读诗词",
      }
    ]
  }
})
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
      title: '六年级诗词合集',
      path: '/pages/six/six',
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
          icon: 'waiting',
          duration: 2000
        })
      }
    }
  },
  data: {
    songs: [
      {
        id: "1",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/610101诗经•采薇.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "诗经•采薇",
        author: "每日解读诗词",
      },
      {
        id: "2",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/610102诗经•采薇.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "诗经•采薇",
        author: "每日解读诗词",
      },
      {
        id: "3",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/610201春夜喜雨.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "春夜喜雨",
        author: "每日解读诗词",
      },
      {
        id: "4",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/610301西江月•夜行黄沙道中.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "西江月•夜行黄沙道中",
        author: "每日解读诗词",
      },
      {
        id: "5",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/610401天净沙•秋思.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "天净沙•秋思",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/610402天净沙•秋思.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "天净沙•秋思",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/620101元日.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "元日",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/620201天竺寺八月十五日夜桂子.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "天竺寺八月十五日夜桂子",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/620301七步诗.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "七步诗",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/620401鸟鸣涧.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "鸟鸣涧",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/620501芙蓉楼送辛渐.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "芙蓉楼送辛渐",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/620601江畔独步寻花.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "江畔独步寻花",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/620701石灰吟.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "石灰吟",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/620702石灰吟.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "石灰吟",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/620801竹石.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "竹石",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/620901闻官军收河南河北.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "闻官军收河南河北",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/620902闻官军收河南河北.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "闻官军收河南河北",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/621001己亥杂诗.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "己亥杂诗",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/621101浣溪沙·游蕲水清泉寺.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "浣溪沙·游蕲水清泉寺",
        author: "每日解读诗词",
      },
      {
        id: "6",
        mp3: "http://git.oschina.net/huang_bo/siwunianji/raw/master/621201卜算子·送鲍浩然之浙东.mp3",
        pic: "http://git.oschina.net/huang_bo/siwunianji/raw/master/shici.jpg",
        name: "卜算子·送鲍浩然之浙东",
        author: "每日解读诗词",
      }
    ]
  }
})
// audio.js

  var reportTypeList = [
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
      }
    ] 
 
var pageObject = {
    data: {
      reportTypeList: reportTypeList,
      num: 0,
      toLeftNum: 0,
      itemWidth: 150
    },
    var tempFilePath = e.target.dataset.src
    var temptitle = e.target.dataset.name
    var videoId = e.target.id
    
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc(tempFilePath)
    // setTimeout(function () {
      this.audioCtx.play()
    // }.bind(this), 300)
  } 
 
for (var i = 0; i<reportTypeList.length; i++) { 
  (function (item) {
    pageObject['bind' + item.id] = function (e) {
      var id = parseInt(e.currentTarget.dataset.typeid)

      this.setData({
        currentId: id
      })
    }
  })(reportTypeList[i])
}

Page(pageObject) 

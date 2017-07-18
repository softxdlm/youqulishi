// audio.js

  var reportTypeList = [
    { name: "日报1", id: "1" },
    { name: "目录2", id: "2" },
    { name: "季报3", id: "3" },
    { name: "月报4", id: "4" },
    { name: "日报5", id: "5" },
    { name: "目录6", id: "6" },
    { name: "季报7", id: "7" },
    { name: "月报8", id: "8" },
    { name: "日报9", id: "9" },
    { name: "目录10", id: "10" },
    { name: "季报11", id: "11" },
    { name: "月报12", id: "12" }] 
 
var pageObject = {
    data: {
      reportTypeList: reportTypeList,
      num: 0,
      toLeftNum: 0,
      itemWidth: 150
    }
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

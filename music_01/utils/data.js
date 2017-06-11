// http://music.163.com/#/song?id=363488
const songs = {
  "101": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/01m.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "春日忆李白",
    },
    "artists": "每日解读诗词",
    "name": "春日忆李白",
    "zh": "[00:00.00]春日忆李白  杜甫 (唐代)  白也诗无敌，飘然思不群。 清新庾开府，俊逸鲍参军。 渭北春天树，江东日暮云。 何时一樽酒，重与细论文 "
  },
  "102": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/102.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "黄鹤楼",
    },
    "artists": "每日解读诗词",
    "name": "崔颢《黄鹤楼》",
    "zh": "[00:00.00] 黄鹤楼 / 登黄鹤楼    唐代：崔颢   昔人已乘黄鹤去，此地空余黄鹤楼。    黄鹤一去不复返，白云千载空悠悠。    晴川历历汉阳树，芳草萋萋鹦鹉洲。    日暮乡关何处是？烟波江上使人愁。"
  },
  "103": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/03m.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "黄鹤楼",
    },
    "artists": "每日解读诗词",
    "name": "崔颢《黄鹤楼》",
    "zh": "[00:00.00] 黄鹤楼 / 登黄鹤楼   唐代：崔颢   昔人已乘黄鹤去，此地空余黄鹤楼。    黄鹤一去不复返，白云千载空悠悠。    晴川历历汉阳树，芳草萋萋鹦鹉洲。    日暮乡关何处是？烟波江上使人愁。"
  },
  "104": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/04l.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "江城子",
    },
    "artists": "每日解读诗词",
    "name": "苏轼《江城子》",
    "zh": "[00:00.00] 江城子·乙卯正月二十日夜记梦   宋代：苏轼   十年生死两茫茫，不思量，自难忘。   千里孤坟，无处话凄凉。  纵使相逢应不识，尘满面，鬓如霜。    夜来幽梦忽还乡，小轩窗，正梳妆。    相顾无言，惟有泪千行。   料得年年肠断处，明月夜，短松冈。"
  },
  "105": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/05m.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "题都城南庄",
    },
    "artists": "每日解读诗词",
    "name": "崔护《题都城南庄》",
    "zh": "[00:00.00] 题都城南庄   唐代：崔护   去年今日此门中，人面桃花相映红。    人面不知何处去，桃花依旧笑春风。"
  },
  "106": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/06l.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "迢迢牵牛星",
    },
    "artists": "每日解读诗词",
    "name": "汉乐府《迢迢牵牛星》",
    "zh": "[00:00.00] 迢迢牵牛星，皎皎河汉女。  纤纤擢素手，札札弄机杼。    终日不成章，泣涕零如雨。    河汉清且浅，相去复几许！    盈盈一水间，脉脉不得语。"
  },
  "107": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/107.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "雁丘词",
    },
    "artists": "每日解读诗词",
    "name": "元好问《摸鱼儿·雁丘词》",
    "zh": "[00:00.00] 摸鱼儿·雁丘词 / 迈陂塘   金朝：元好问    乙丑岁赴试并州，道逢捕雁者云：“今旦获一雁，杀之矣。其脱网者悲鸣不能去，竟自投于地而死。”予因买得之，葬之汾水之上，垒石为识，号曰“雁丘”。同行者多为赋诗，予亦有《雁丘词》。旧所作无宫商，今改定之。   问世间，情为何物，直教生死相许？    天南地北双飞客，老翅几回寒暑。     欢乐趣，离别苦，就中更有痴儿女。    君应有语：渺万里层云，千山暮雪，只影向谁去？    横汾路，寂寞当年箫鼓，荒烟依旧平楚。    招魂楚些何嗟及，山鬼暗啼风雨。   天也妒，未信与，莺儿燕子俱黄土。    千秋万古，为留待骚人，狂歌痛饮，来访雁丘处。"
  },
  "108": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/108.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "野有蔓草",
    },
    "artists": "每日解读诗词",
    "name": "诗经·郑风·野有蔓草",
    "zh": "[00:00.00] 野有蔓草，零露漙兮。有美一人，清扬婉兮。邂逅相遇，适我愿兮。    野有蔓草，零露瀼瀼。有美一人，婉如清扬。邂逅相遇，与子偕臧。"
  },
  "109": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/109.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "问莲根有丝多少",
    },
    "artists": "每日解读诗词",
    "name": "元好问《问莲根有丝多少》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "110": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/110.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "离思",
    },
    "artists": "每日解读诗词",
    "name": "元稹《离思》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "111": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/111.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "阙题",
    },
    "artists": "每日解读诗词",
    "name": "刘眘虚《阙题》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "112": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/112.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "白头吟",
    },
    "artists": "每日解读诗词",
    "name": "卓文君《白头吟》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "113": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/113.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "将进酒",
    },
    "artists": "每日解读诗词",
    "name": "李白《将进酒》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "114": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/114.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "诗经·邶风·燕燕",
    },
    "artists": "每日解读诗词",
    "name": "诗经·邶风·燕燕",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "115": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/115.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "长干行",
    },
    "artists": "每日解读诗词",
    "name": "崔颢《长干行》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "116": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/116.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "桃花溪",
    },
    "artists": "每日解读诗词",
    "name": "张旭《桃花溪》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "117": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/117.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "卜算子",
    },
    "artists": "每日解读诗词",
    "name": "李之仪《卜算子》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "118": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/118.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "如梦令",
    },
    "artists": "每日解读诗词",
    "name": "李清照《如梦令》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "119": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/119.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "醉花阴",
    },
    "artists": "每日解读诗词",
    "name": "李清照《醉花阴》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "120": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/120.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "虞美人",
    },
    "artists": "每日解读诗词",
    "name": "李煜《虞美人》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "121": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/121.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "春思",
    },
    "artists": "每日解读诗词",
    "name": "李白《春思》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "122": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/122.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "清平调·三首",
    },
    "artists": "每日解读诗词",
    "name": "李白《清平调》三首",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "123": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/123.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "送孟浩然之广陵",
    },
    "artists": "每日解读诗词",
    "name": "李白《送孟浩然之广陵》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "124": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/124.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "送孟浩然之广陵",
    },
    "artists": "每日解读诗词",
    "name": "李白《送孟浩然之广陵》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "125": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/125.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "和晋陵陆丞早春游望",
    },
    "artists": "每日解读诗词",
    "name": "杜审言《和晋陵陆丞早春游望》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "126": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/126.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "客至",
    },
    "artists": "每日解读诗词",
    "name": "杜甫《客至》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "127": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/127.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "江南逢李龟年",
    },
    "artists": "每日解读诗词",
    "name": "杜甫《江南逢李龟年》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "128": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/128.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "赠卫八处士",
    },
    "artists": "每日解读诗词",
    "name": "杜甫《赠卫八处士》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "129": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/129.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "江城子·密州出猎",
    },
    "artists": "每日解读诗词",
    "name": "苏轼《江城子·密州出猎》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "130": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/130.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "送杜少府之任蜀州",
    },
    "artists": "每日解读诗词",
    "name": "王勃《送杜少府之任蜀州》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "131": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/131.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "出塞",
    },
    "artists": "每日解读诗词",
    "name": "王昌龄《出塞》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "132": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/132.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "息夫人",
    },
    "artists": "每日解读诗词",
    "name": "王维《息夫人》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "133": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/133.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "相思",
    },
    "artists": "每日解读诗词",
    "name": "王维《相思》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "134": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/134.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "夜雨",
    },
    "artists": "每日解读诗词",
    "name": "白居易《夜雨》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "135": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/135.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "江城子",
    },
    "artists": "每日解读诗词",
    "name": "苏轼《江城子》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "136": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/136.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "蝶恋花",
    },
    "artists": "每日解读诗词",
    "name": "苏轼《蝶恋花》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "137": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/137.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "岳阳楼记",
    },
    "artists": "每日解读诗词",
    "name": "范仲淹《岳阳楼记》",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "138": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/138.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "诗经·国风·秦风·蒹葭",
    },
    "artists": "解读诗词",
    "name": "诗经·国风·秦风·蒹葭",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "139": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/139.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "诗经·国风·郑风·子衿",
    },
    "artists": "解读诗词",
    "name": "诗经·国风·郑风·子衿",
    "zh": "[00:00.00] 暂无诗词\n"
  },
  "140": {
    "mp3Url": "http://git.oschina.net/huang_bo/music/raw/master/140.mp3",
    "album": {
      "picUrl": "http://git.oschina.net/huang_bo/music/raw/master/shici.jpg",
      "name": "赤壁",
    },
    "artists": "每日解读诗词",
    "name": "杜牧《赤壁》",
    "zh": "[00:00.00] 暂无诗词\n"
  }
}

module.exports = {
  songs: songs
}
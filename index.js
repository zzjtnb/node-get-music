const axios = require('axios');
const fs = require("fs")
const path = require('path')
const title = [
  '士别三日', '大义灭亲', '代罪羔羊',
  '打草惊蛇', '百发百中-前功尽弃', '老成持重',
  '困兽犹斗', '束手无策-坐以待毙', '投鼠忌器',
  '车水马龙', '车载斗量', '易如反掌',
  '东山再起', '花团锦簇', '玩火自焚',
  '众叛亲离', '青出于蓝', '指鹿为马',
  '约法三章', '食指大动', '乘风破浪',
  '草木皆兵', '草菅人命', '卷土重来',
  '捷足先登', '深思熟虑', '喜出望外',
  '犹豫不决', '饮鸩止渴', '黄梁一梦',
  '沧海桑田', '落井下石', '请君入瓮',
  '醉翁之意', '墨守成规', '孺子可教',
  '滥竽充数', '惊弓之鸟', '鹬蚌相争'
]

function download(title, urls) {
  axios.get(urls, { responseType: 'stream' }).then((res) => {
    if (res.status === 200) {
      let ws = fs.createWriteStream('./mp3/' + title + ".mp3");
      res.data.pipe(ws)
    }
  }).catch((err) => {

  });
}

function getList(arr) {
  for (let index = 0; index < arr.length; index++) {
    let idx
    if (index < 9) {
      idx = "0" + (index + 1).toString()
    } else {
      idx = index + 1
    }
    let title = idx + arr[index]
    let url = `https://content.blubrry.com/ic975broadcast/icv-chineseidioms05-${idx}.mp3`
    download(title, url)
  }
}
getList(title)

let fs = require('fs')
//============== Data jid =============//
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Change/add owner number => src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit
//====== Needed in plugin/update.js ======//
global.repox = 'SudoAnirudh/Eva-Md'
global.branx = 'master'
//=========== Watermark & Url ==========//
global.wm = '© Eva-SudoAnirudh'
global.wmtitle = 'ΣVΛ'
global.wmbody = '𝓑𝔂 𝓢𝓾𝓭𝓸𝓐𝓷𝓲𝓻𝓾𝓭𝓱' 
global.wmlink = 'https://www.instagram.com/ani._.rudh_s'
global.linkgc = ''
global.linkmed = 'https://www.instagram.com/ani._.rudh_s'

//=========== Process Bot ============//
global.wait = 'Wait a minute'
global.eror = 'Sorry an error occurred, please try again later'

//========= Url Template Button =========//
global.dTux = 'Instagram'
global.uRlx = 'https://www.instagram.com/ani._.rudh_s' //''
//========= Call Template Button =========//
global.dTcx = 'Add Me'
global.nUmx = '+91 9539102851' 
//================ Buttons ================//
global.bTnx = [['DASHBOARD',]] //buttons map
global.mediaMenu = 'https://telegra.ph/file/01615b2470978183a85ff.jpg'
global.lIm = 'Ⓛ'
global.pRm = 'Ⓟ'
global.uRl = 'Ⓤ'
global.tXt = 'Ⓣ'
global.nUm = 'Ⓝ'
global.qRy = 'Ⓠ'
global.uSr = '@Ⓤ'
global.oPs = 'Ⓞ'

global.APIs = { // API Prefix
//======= name: 'https://website' ========//
  nrtm: 'https://nurutomo.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  xteam: 'https://api.xteam.xyz', 
  violet: 'https://violetics.pw'
}
global.APIKeys = { // APIKey Here
//======= 'https://website': 'apikey' =======//
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'https://api.xteam.xyz': 'benniismaelapikey',
  'https://violetics.pw': '0b55-fada-712f'
}

global.util = require('util')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.chalk = require('chalk')
global.os = require('os')
global.moment = require('moment-timezone')
global.axios = require('axios')
global.cheerio = require('cheerio')
global.scrape = require('./lib/scrape')
global.xfr = require('xfarr-api')
global.yzu = require('yuzzu-api')
global.dhn = require('dhn-api')
global.hxz = require('hxz-api')
global.bts = require('@bochilteam/scraper')
global.bs = require('@bochilteam/scraper')
global.bochil = require('@bochilteam/scraper')
//global.baileys = require('@whiskeysockets/baileys')

//=========== Sticker WM =============//
const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {

  var sticker_name = 'Sticker'
  var sticker_author = 'ΣVΛ'

  var sticker_name = ''
  var sticker_author = 'Eva'

 } else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}
const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})
global.packname = sticker_name
global.author = sticker_author
//====== Sticker take(colong stiker:v) ======//
const cpack = fs.readFileSync("lib/colong.json")
const ctickerpack = JSON.parse(cpack)
if (ctickerpack.cpackname == '') {
  var colong_name = ''
  var colong_author = '@Eva'
 } else {
  var colong_name = ctickerpack.cpackname
  var colong_author = ctickerpack.cauthor
}
const file_colong = "lib/colong.json"
fs.watchFile(file_colong, () => {
  fs.unwatchFile(file_colong)
  console.log(chalk.redBright("Update 'colong.json'"))
  delete require.cache[file_colong]
  require('./lib/colong.json')
})
global.pclg = colong_name
global.aclg = colong_author

global.wm = '© ΣVΛ'
global.ucpn = 'ΣVΛ'

//================= Url =================//
global.linkgc = ''
global.linkig = 'https://www.instagram.com/ani._.rudh_s'
global.linkyt = ''
global.linkfb = ''
global.web = 'https://github.com/SudoAnirudh'
global.web1 = 'https://www.instagram.com/ani._.rudh_s'

global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'https://www.instagram.com/ani._.rudh_s'

//========= Url Template Button =========//
global.dtu = 'Eva-Support Group'
global.urlnya = ''

//========= Call Template Button =========//
global.dtc = 'Contact Owner'
global.nmbrnya = '+919539102851'


//============ Proses Bot ============//
global.wait = 'Wait a minute'
global.eror = 'Sorry an error occurred, please try again later'


//========== Tampilan Bot ===========//
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''
global.lim ='Ⓛ'
global.prem = 'Ⓟ'


//======== Fake Size ========//
global.fsx  = 9999999999999  //fake size foto/video
global.fsdx = 9999999999999  //fake size document 
global.pcdx = 9999999999999  // fake page count document

global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

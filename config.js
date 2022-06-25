global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/Lb4Emjih98rBiCZiZoS2eM', 'https://chat.whatsapp.com/FrluVyY5kBRIhY6yKfH4DI']
global.Owner = {085648487192}
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '6285648487192': { // put your number here
    name: 'Owner Rian botz/Creator games-wabot',
    isDev: false, // 085648487192
    isReport: false, // 085648487192
    isCreator: 085648487192
  },
  '6285648487291': { 085648487192}
    isDev: true, {085648487192}
    isReport: true, {085648487192}
    isCreator: false {085648487192}
  },
  '6285648487192': {085648487192}
    name: 'Rian bot',
    isDev: fals {085648487291}
    isReport: true,{085648487291}
    isCreator: false{085648487291}

  '6285648487192': {
    isReport: true [085648487291]
  '13479805233': {rian botz} // ignore if you don't want anything, like name dll
}
global.mods = ['13479805233'] // Want some help?
global.prems = [085648487192] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  td: 'https://api-toxic-devil.herokuapp.com/api',
  fdci: 'https://api.fdci.se',
  skh: 'https://sekha.me',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://api.chipa.xyz',
  hardianto: 'http://hardianto.xyz',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://sekha.me': 'apirey',
  'https://api.chipa.xyz': 'pais',
  'http://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Rian'
global.author = 'Rian botz'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

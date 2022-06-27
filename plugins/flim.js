let xfar = require('xfarr-api')
let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, command, conn:fur, args }) => {
if (!args[0]) throw `Use format: ${usedPrefix}${command} spiderman`
xfar.Film(args[0]).then(async data => {
let txt = `*--------「 FILM-SEARCH 」--------*\n\n`
for (let i of data) {
txt += `*📫 Title :* ${i.judul}\n`
txt += `*🎞️  Type :* ${i.type}\n`
txt += `*📟 Quality :* ${i.quality}\n`
txt += `*📮Upload :* ${i.upload}\n`
txt += `*🔗 Url :* ${i.link}\n-----------------------------------------------------\n`
}

conn.sendButton(m.chat, await (await fetch(data[0].thumb)).buffer(), txt, wm, 'ok', m)
})
}
handler.help = ['film <keyword>']
handler.tags = ['film']
handler.command = /^(film)$/i

module.exports = handler

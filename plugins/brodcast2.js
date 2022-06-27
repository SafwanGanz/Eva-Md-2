// all chats ke broadcast
let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Send a broadcast message to ${chats.length} chat_`, m)
  for (let id of chats) {
       let bcbg = 'https://telegra.ph/file/b2ae8a0e437e4252d5124.png'
       await delay(500)
       await conn.sendTB(id, bcbg, text.trim(), wm, 'Menu', '.menu', 'Owner', '.owner')
     }
  m.reply('*Broadcast finished*')
}
handler.help = ['broadcast2','bc2'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast2|bc2)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

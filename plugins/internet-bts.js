import fetch from 'node-fetch'
let bts = []
fetch ('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/batues.txt')
    .then(res => res.text())
    .then(txt => bts = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = bts[Math.floor(Math.random() * bts.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '漏 nih BTSnya 馃憤', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['bts']
handler.tags = ['internet']
handler.limit = true
handler.command = /^(bts)$/i

export default handler

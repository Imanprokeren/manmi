let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor dan pesan yang akan dikirim\n\n.menfes 628xxxx|isi pesan', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya\n.menfes 628xxxx|isi pesan', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender

    conn.reply(korban + '@s.whatsapp.net',  `*「 Pesan Menfes! 」*\n\nDari : _Secret Number!_\nPesan : _${pesan}_\n\n*${global.wm}*`
, null)

    conn.reply(m.chat, `_*Pesan Menfes Berhasil Terkirim Ke ${korban}!*_`, m)
}
handler.help = ['menfes nomor|pesan']
handler.tags = ['new']
handler.command = /^(menfess|menfes)$/i
handler.rowner = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false
//plugins by Ndaa!!
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
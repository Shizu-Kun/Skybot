require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const welcome = JSON.parse(fs.readFileSync("./all/database/welcome.json"))
const NodeCache = require("node-cache")
const msgRetryCounterCache = new NodeCache()
const yargs = require('yargs/yargs')
const _ = require('lodash')
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./skysession`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "silent" }),
auth: state,
browser: ["Android","Safari","20.0.04"],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'WhatsApp Bot By ZALL'
}}
}

const DitzzHosting = func.makeWASocket(connectionOptions)
if (usePairingCode && !DitzzHosting.authState.creds.registered) {
var phoneNumber = await question(chalk.black(chalk.bgGreen(`Please type your WhatsApp number :\n`)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
var code = await DitzzHosting.requestPairingCode(phoneNumber.trim())
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.bgWhite(code)))
}

DitzzHosting.ev.on('creds.update', await saveCreds)
store?.bind(DitzzHosting.ev)

DitzzHosting.ev.on('call', async (user) => {
if (!global.anticall) return
let botNumber = await DitzzHosting.decodeJid(DitzzHosting.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await DitzzHosting.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnailUrl: global.imgreply, title: "乂 Panggilan Terdeteksi", body: "Powered By "+global.namabot, previewType: "PHOTO"}}}, {quoted: null})
DitzzHosting.sendContact(ff.from, [owner], "Telfon Atau Vc = Block", sendcall)
await sleep(7000)
await DitzzHosting.updateBlockStatus(ff.from, "block")
}}
}})

DitzzHosting.public = false

DitzzHosting.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) DitzzHosting.readMessages([m.key])
}
if (!DitzzHosting.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.isBaileys) return
if (global.autoread) DitzzHosting.readMessages([m.key])
m = func.smsg(DitzzHosting, m, store)
require("./DitzzHosting.js")(DitzzHosting, m, store)
} catch (err) {
console.log(err)
}
})

DitzzHosting.ev.on('group-participants.update', async (anu) => {
if (!welcome.includes(anu.id)) return
let botNumber = await DitzzHosting.decodeJid(DitzzHosting.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await DitzzHosting.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await DitzzHosting.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
if (anu.action == 'add') {
DitzzHosting.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Menambahkan @${num.split("@")[0]} Ke Dalam Grup Ini

*🏠 Grup Bebas Share :* https://chat.whatsapp.com/GhXLH2bpdMx4RhRWOJQzFQ

*🏠 Grup Bebas Share2 :* https://chat.whatsapp.com/IOq2B8kPY3LGbLAx2RnyvV

*🏠 Grup Bebas Share3 :* https://chat.whatsapp.com/DEoWtoMM1AHEySR4Q1ojfC` : `Hallo Kak @${num.split("@")[0]} Selamat Datang Di *${namagc}*

*🏠 Grup Bebas Share :* https://chat.whatsapp.com/GhXLH2bpdMx4RhRWOJQzFQ

*🏠 Grup Bebas Share2 :* https://chat.whatsapp.com/IOq2B8kPY3LGbLAx2RnyvV

*🏠 Grup Bebas Share3 :* https://whatsapp.com/channel/0029VahgWqG2975ElQC1Sc0p`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Welcome Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029VafvVpJ7DAWxsnWdSH10", mediaType: 1}}})
} 
if (anu.action == 'remove') { 
DitzzHosting.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Mengeluarkan @${num.split("@")[0]} Dari Grup Ini

*🏠 Grup Bebas Share :* https://chat.whatsapp.com/IOq2B8kPY3LGbLAx2RnyvV

*🏠 Grup Bebas Share2 :* https://chat.whatsapp.com/GhXLH2bpdMx4RhRWOJQzFQ

*🏠 Grup Bebas Share3 :* https://whatsapp.com/channel/0029VahgWqG2975ElQC1Sc0p` : `@${num.split("@")[0]} Telah Keluar Dari Grup Ini

*🏠 Grup Bebas Share :* https://chat.whatsapp.com/IOq2B8kPY3LGbLAx2RnyvV

*🏠 Grup Bebas Share2 :* https://chat.whatsapp.com/GhXLH2bpdMx4RhRWOJQzFQ

*🏠 Grup Bebas Share3 :* https://whatsapp.com/channel/0029VahgWqG2975ElQC1Sc0p`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Leaving Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029VafvVpJ7DAWxsnWdSH10", mediaType: 1}}})
}
if (anu.action == "promote") {
DitzzHosting.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Menjadikan @${num.split("@")[0]} Sebagai Admin Grup Ini

*🏠 Grup Bebas Share :* https://chat.whatsapp.com/IOq2B8kPY3LGbLAx2RnyvV

*🏠 Grup Bebas Share2 :* https://chat.whatsapp.com/GhXLH2bpdMx4RhRWOJQzFQ

*🏠 Grup Bebas Share3 :* https://chat.whatsapp.com/DEoWtoMM1AHEySR4Q1ojfC`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029VafvVpJ7DAWxsnWdSH10", mediaType: 1}}})
}
if (anu.action == "demote") {
DitzzHosting.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Memberhentikan @${num.split("@")[0]} Sebagai Admin Grup Ini

*🏠 Grup Bebas Share :* https://chat.whatsapp.com/IOq2B8kPY3LGbLAx2RnyvV

*🏠 Grup Bebas Share2 :* https://chat.whatsapp.com/GhXLH2bpdMx4RhRWOJQzFQ

*🏠 Grup Bebas Share3 :* https://chat.whatsapp.com/DEoWtoMM1AHEySR4Q1ojfC`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029VafvVpJ7DAWxsnWdSH10", mediaType: 1}}})
}
} 
} catch (err) {
console.log(err)
}})

DitzzHosting.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
DitzzHosting.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
DitzzHosting.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(color('Menghubungkan . . . '))
} else if (connection === "open") {
let teksnotif = `*Skybotz Version - 0.5 🍁*
Connected To ${DitzzHosting.user.id.split(":")[0]}`
DitzzHosting.sendMessage(global.owner+"@s.whatsapp.net", {text: teksnotif})
console.log(color('Bot Berhasil Tersambung'))
}
})

return DitzzHosting
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
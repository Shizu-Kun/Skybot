//========== DATABASE ===========//
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const welcome = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const premium = JSON.parse(fs.readFileSync("./all/database/premium.json"))

module.exports = async (DitzzHosting, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
let { randomBytes } = require("crypto")
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await DitzzHosting.decodeJid(DitzzHosting.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await DitzzHosting.groupMetadata(m.chat).catch(e => {}) : {}
let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, ucapan, generateProfilePicture, getBuffer, fetchJson, resize } = require('./all/function.js')
const { ssweb, igstalk, tts, remini, mediafire, ytmp3 } = require("./scrape/screaper.js")
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const isPremium = premium.includes(m.sender)

//=========== MESSAGE ===========//
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

//========= FAKE QUOTED =========//
const qtext2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "@ PutraHosting  Project v0.0.5" }}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `PutraHosting  Project v0.0.5`,jpegThumbnail: ""}}}

const qaudio = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {audioMessage: {seconds: 900030, ptt: true }}}

const qpayment = {
key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "IDR", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "PutraHosting  V0.0.5"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}}}}

//========== FUNCTION ===========//
var ppuser
try {
ppuser = await DitzzHosting.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

async function sendslide(jid) {
let imgsc = await prepareWAMessageMedia({ image: { url: global.imgslide } }, { upload: DitzzHosting.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*ZALLHost* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `LIST ALL PRODUK ZALL⚡
* Open Reseller Panel Private
* Open Admin Panel Private
* Open Pt Panel Private
* Open Own Panel Private
* Open Admin Panel Public
* Open Pt Panel Public
* Open Own Panel Public
* Jasa Install Panel Pterodactyll
* Panel Pterodactyl Public
* Panel Pterodactyl Private`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `LIST HARGA VPS PUTRA⚡
*_LIST VPS DO_*
*🌐VPS RAM 1GB CORE 1 : 15K*
*🌐VPS RAM 2GB CORE 1 : 20K*
*🌐VPS RAM 2GB CORE 2 : 25K*
*🌐VPS RAM 4GB CORE 2 : 45K*
*🌐VPSRAM 8GB CORE 4 : 55K*

*BENEFIT PEMBELIAN VPS :*
-FREE INSTALL PANEL PTERODACTYL
-FREE REQ REGION
-FREE REQ NAMA DOMAIN
-VPS AKTIF 30HARI
-GARANSI 30HARI (1X REPLACE)
-LINK LOGIN JADI MILIKMU 100%`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `📦 Ram 1GB & Cpu 40%*
Harga : Rp2000
*📦 Ram 2GB & Cpu 60%*
Harga : Rp3000
*📦 Ram 3GB & Cpu 80%*
Harga : Rp4000
*📦 Ram 4GB & Cpu 100%*
Harga : Rp5000
*📦 Ram 5GB & Cpu 120%*
Harga : Rp6000
*📦 Ram 6GB & Cpu 140%*
Harga : Rp7000
*📦 Ram 7GB & Cpu 160%*
Harga : Rp8000
*📦 Ram 8GB & Cpu 180%*
Harga : Rp9000
*📦 Ram 9GB & Cpu 200%*
Harga : Rp10000
*📦 Ram 10GB & Cpu 220%*
Harga : Rp11000
*📦 Ram & Cpu Unlimited*
Harga : Rp15.000

*Benefit Pembelian Panel :*
* Server Private (Tidak Ada Admin Panel)
* Script Dijamin Aman 100% (Anti Maling Sc!)
* Masa Aktif Kurang Lebih 1 Bulan
* Bergaransi 10 Hari (1x Replace)
* Claim Garansi Wajib Bawa Bukti Ss Chat Saat Transaksi!`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `OPEN BOT PUSHKONTAK,BUG,MD
   *_LIST SEWA BOT BUG_*
* 6K = 1 MINGGU
* 11K = 3 MINGGU
* 15K = PERMANEN

   *_LIST SEWA BOT BUG_*
* 7K = MINGGU
* 10K = 1BULAN
* 16K = PERMANEN

  *_LIST SEWA BOT PUSHKONTAK_*
* 5K = 1MINGGU 
* 10K = 1BULAN
* 15K = PERMANEN

SC ANTI PASARAN DAN ANTI KENON
*NOTE!! GARANSI 3× JIKA WHATSAPP KENON/DLL*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `LIST JASA SUNTIK SOSMED
  FOLLOWERS INSTAGRAM 
> 100 FOLLOWERS: 3K
> 200 FOLLOWERS: 5K
> 300 FOLLOWERS: 7K
> 400 FOLLOWERS: 9K
> 500 FOLLOWERS: 10K
> 1000 FOLLOWERS: 16K

  FOLLOWERS TIKTOK
> 100 FOLLOWERS: 4K
> 200 FOLLOWERS: 7K
> 300 FOLLOWERS: 9K
> 400 FOLLOWERS: 13K
> 500 FOLLOWERS: 16K
> 1000 FOLLOWERS: 25K

   LIKE INSTAGRAM 
> 1000 LIKE: 5K
> 5000 LIKE: 8K
> 10.000 LIKE: 10K

   LIKE TIKTOK
> 1000 LIKE: 7K
> 5000 LIKE: 10K
> 10.000 LIKE: 15K

   VIEWS INSTAGRAM 
> 1000 VIEWS: 6K
> 5000 VIEWS: 8K
> 10.000 VIEWS: 10K

   VIEWS TIKTOK
> 1000 VIEWS: 8K
> 5000 VIEWS: 10K
> 10.000: VIEWS: 15K`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `LIST SCRIPT ZALL HOSTING⚡
* SC CPANEL SIMPLE = 10K
* SC CPANEL BUTTON = 15K
* SC GARA V1 = 10K
* SC PutraHosting  V4 NO ENC = 25K
* SC PutraHosting  V5 NO ENC = 40K
* SC DELTA CRASH V5 = 15K
* SC ZXV V5 = 10K
* SC WYNZZ 8.5 = 5K
* SC MD = 30K
* SC DEVIL = 25K
* SC PUSHKONTAK × STORE = 7K`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}
]})
})
}}
}, {userJid: m.sender, quoted: qtext2})
await DitzzHosting.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

let example = (teks) => {
return `*Contoh Cara Command :*\nketik *${cmd}* ${teks}`
}


function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

async function SkyReply(teks, jid = m.chat, mention = []) {
await DitzzHosting.sendMessage(jid, {text: `${teks}`, contextInfo: {mentionedJid: mention, externalAdReply: {thumbnailUrl: global.imgreply, title: "© 𝐒𝐤𝐲𝐁𝐨𝐭𝐳 - v0.0.5", body: `Selamat ${ucapan()}`, 
previewType: "0"}}}, {quoted: m})
}

//========= SETTING EVENT ========//

if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await DitzzHosting.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await DitzzHosting.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: ppuser, title: "乂 Link Grup Terdeteksi", body: "Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
await DitzzHosting.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await DitzzHosting.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await DitzzHosting.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await DitzzHosting.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: ppuser, title: "乂 Link Grup Terdeteksi", body: "Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
await DitzzHosting.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}


switch (command) {
case "menu": case "p": case "v5": case "bokep": {
let teksnya = `*Haii* @${m.sender.split("@")[0]} 🍁
*Status User :* ${isOwner ? "Owner": isPremium ? "Premium" : "Gratisan"}

Saya adalah sistem otomatis *(WhatsApp Bot)* yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.
  
 *乂 I N F O R M A T I O N* 
 ┌  ◦ *Botname :* ${namabot2}
 │  ◦ *Creator :* @${global.owner}
 │  ◦ *Mode :* ${DitzzHosting.public ? "Public Mode" : "Self Mode"}
 │  ◦ *Library :* @whiskeysocket
 └  ◦ *Uptime :* ${runtime(process.uptime())}`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "application/pdf",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"fileLength": 99999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `Selamat ${ucapan()}`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Powered by ZALL dev.`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "list menu", "sections": [{ "title": "# Pilih List Menu Di Bawah Ini", "rows": [{ "title": "allmenu", "id": ".allmenu" }, 
{ "title": "produkmenu", "id": ".produkmenu" }, 
{ "title": "ownerbot", "id": ".owner" }]}, 
{ "title": "# Owner Tools Menu", "rows": [{ "title": "startjpmslide", "id": ".startslide" }, 
{ "title": "settingbot", "id": ".setbot" }]}
]}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"contact owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
title: `© ${namabot} v0.0.5`,
thumbnail: global.imgmenu,
sourceUrl: linkgc2,
renderLargerThumbnail: true, 
mediaType: 1
}}
})} 
}}, {userJid: m.sender, quoted: qlive}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "allmenu": case "allfeature": {
let teksmenu = `  *乂 M A I N M E N U*
 ┌ ◉ play
 │ ◉ tourl
 │ ◉ yts
 │ ◉ tiktoksearch
 │ ◉ cekkhodam
 │ ◉ tohd
 │ ◉ chatgpt
 │ ◉ ai
 │ ◉ translate
 │ ◉ remini
 │ ◉ sticker
 │ ◉ ssweb
 │ ◉ ssweb2
 │ ◉ listpremium
 │ ◉ pinterest
 └ ◉ qc
  
  *乂 D O W N L O A D E R*
 ┌ ◉ tiktok
 │ ◉ tiktokmp3
 │ ◉ tiktokaudio
 │ ◉ tiktokslide
 │ ◉ instagram
 │ ◉ facebook
 │ ◉ ytmp3
 └ ◉ mediafire
  
  *乂 C O N V E R T E R*
 ┌ ◉ toaudio
 │ ◉ tomp3
 │ ◉ tovn
 │ ◉ toptv
 │ ◉ tts
 └ ◉ toimage
  
  *乂 P A N E L M E N U*
 ┌ ◉ addadmin
 │ ◉ addadmin2
 │ ◉ cpanel
 │ ◉ cpanel2
 │ ◉ listpanel
 │ ◉ listadmin
 │ ◉ deladmin
 └ ◉ delpanel
  
  *乂 S T O R E M E N U*
 ┌ ◉ pushctc
 │ ◉ savectc
 │ ◉ listgc
 │ ◉ idgc
 │ ◉ jpm
 │ ◉ jpm2
 │ ◉ jpmhidetag
 │ ◉ jpmhidetag2
 └ ◉ jpmslide

  *乂 G R O U P M E N U*
 ┌ ◉ addmember
 │ ◉ antilink
 │ ◉ antilinkV2
 │ ◉ hidetag
 │ ◉ tagall
 │ ◉ delete
 │ ◉ open/close
 │ ◉ setgc
 │ ◉ setnamagc
 │ ◉ setdeskgc
 │ ◉ setppgc
 │ ◉ kick
 │ ◉ promote
 │ ◉ leavegc
 │ ◉ leavegc2
 └ ◉ demote
  
  *乂 O W N E R M E N U*
 ┌ ◉ addpremium
 │ ◉ delpremium
 │ ◉ delsampah
 │ ◉ done
 │ ◉ anticall
 │ ◉ autoread
 │ ◉ autoreadsw
 │ ◉ welcome
 │ ◉ getcase
 │ ◉ setppbotpanjang
 │ ◉ setppbot
 │ ◉ savesticker
 │ ◉ subdomain
 │ ◉ setnamabot
 └ ◉ setbiobot`
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Powered by ZALL dev.`
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Haii* @${m.sender.split("@")[0]}
*Selamat ${ucapan()}*

*Status :* ${isOwner ? "Owner": isPremium ? "Premium" : "Gratisan"}`, 
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.imgmenu2, 400, 400), 
"fileLength": 9999999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot} v0.0.5`, 
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Script Bot\",\"title\":\"Script Bot\",\"id\":\".sc\"}" 
}]
}), 
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender], 
forwardedNewsletterMessageInfo: {
newsletterName: `Powered By ${namaowner2} 🍁`,
newsletterJid: global.idsaluran
}}
})} 
}}, {userJid: m.sender, quoted: qlive}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "produkmenu": case "produk": {
let imgsc = await prepareWAMessageMedia({ image: { url: global.imgslide } }, { upload: DitzzHosting.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*ZALL* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `LIST ALL PRODUK ZALL⚡
* Open Reseller Panel Private
* Open Admin Panel Private
* Open Pt Panel Private
* Open Own Panel Private
* Open Admin Panel Public
* Open Pt Panel Public
* Open Own Panel Public
* Script Tema Panel Enigma
* Jasa Install Panel Pterodactyll
* Jasa Suntik Sosmed
* Panel Pterodactyl Public
* Panel Pterodactyl Private
* Jasa Fix Error Script Bot
* Jasa Edit Script Bot
* Jasa Tambah Fitur Script Bot`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `LIST HARGA VPS ZALLHOSTING⚡
*_LIST VPS DO_*
*🌐VPS RAM 1GB CORE 1 : 15K*
*🌐VPS RAM 2GB CORE 1 : 20K*
*🌐VPS RAM 2GB CORE 2 : 25K*
*🌐VPS RAM 4GB CORE 2 : 45K*
*🌐VPS RAM 8GB CORE 4 : 50K*
*BENEFIT PEMBELIAN VPS :*
-FREE INSTALL PANEL PTERODACTYL
-FREE REQ REGION
-FREE REQ NAMA DOMAIN
-VPS AKTIF 30HARI
-GARANSI 25HARI (1X REPLACE)
-LINK LOGIN JADI MILIKMU 100%`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `📦 Ram 1GB & Cpu 40%*
Harga : Rp2000
*📦 Ram 2GB & Cpu 60%*
Harga : Rp3000
*📦 Ram 3GB & Cpu 80%*
Harga : Rp4000
*📦 Ram 4GB & Cpu 100%*
Harga : Rp5000
*📦 Ram 5GB & Cpu 120%*
Harga : Rp6000
*📦 Ram 6GB & Cpu 140%*
Harga : Rp7000
*📦 Ram 7GB & Cpu 160%*
Harga : Rp8000
*📦 Ram 8GB & Cpu 180%*
Harga : Rp9000
*📦 Ram 9GB & Cpu 200%*
Harga : Rp10000
*📦 Ram 10GB & Cpu 220%*
Harga : Rp11000
*📦 Ram & Cpu Unlimited*
Harga : Rp15.000

*Benefit Pembelian Panel :*
* Server Private (Tidak Ada Admin Panel)
* Script Dijamin Aman 100% (Anti Maling Sc!)
* Masa Aktif Kurang Lebih 1 Bulan
* Bergaransi 10 Hari (1x Replace)
* Claim Garansi Wajib Bawa Bukti Ss Chat Saat Transaksi!`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `OPEN BOT PUSHKONTAK,BUG,MD
   *_LIST SEWA BOT BUG_*
* 6K = 1 MINGGU
* 11K = 3 MINGGU
* 15K = PERMANEN

   *_LIST SEWA BOT BUG_*
* 7K = MINGGU
* 10K = 1BULAN
* 16K = PERMANEN

  *_LIST SEWA BOT PUSHKONTAK_*
* 5K = 1MINGGU 
* 10K = 1BULAN
* 15K = PERMANEN

SC ANTI PASARAN DAN ANTI KENON
*NOTE!! GARANSI 3× JIKA WHATSAPP KENON/DLL*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `LIST JASA SUNTIK SOSMED
  FOLLOWERS INSTAGRAM 
> 100 FOLLOWERS: 3K
> 200 FOLLOWERS: 5K
> 300 FOLLOWERS: 7K
> 400 FOLLOWERS: 9K
> 500 FOLLOWERS: 10K
> 1000 FOLLOWERS: 16K

  FOLLOWERS TIKTOK
> 100 FOLLOWERS: 4K
> 200 FOLLOWERS: 7K
> 300 FOLLOWERS: 9K
> 400 FOLLOWERS: 13K
> 500 FOLLOWERS: 16K
> 1000 FOLLOWERS: 25K

   LIKE INSTAGRAM 
> 1000 LIKE: 5K
> 5000 LIKE: 8K
> 10.000 LIKE: 10K

   LIKE TIKTOK
> 1000 LIKE: 7K
> 5000 LIKE: 10K
> 10.000 LIKE: 15K

   VIEWS INSTAGRAM 
> 1000 VIEWS: 6K
> 5000 VIEWS: 8K
> 10.000 VIEWS: 10K

   VIEWS TIKTOK
> 1000 VIEWS: 8K
> 5000 VIEWS: 10K
> 10.000: VIEWS: 15K`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `LIST SCRIPT PUTRA HOSTING⚡
* SC CPANEL SIMPLE = 10K
* SC CPANEL BUTTON = 15K
* SC GARA V1 = 10K
* SC PutraHosting  V4 NO ENC = 25K
* SC PutraHosting  V5 NO ENC = 40K
* SC DELTA CRASH V5 = 15K
* SC ZXV V5 = 10K
* SC WYNZZ 8.5 = 5K
* SC MD = 30K
* SC DEVIL = 25K
* SC PUSHKONTAK × STORE = 7K`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}
]})
})
}}
}, {userJid: m.sender, quoted: qtext2})
await DitzzHosting.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break
case "clc": case "clearchat": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply(example("6285###"))
let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let anu = ".\n\n\n\n\n\n\n\n\n\n\n\n".repeat(75000)
await DitzzHosting.sendText(user, anu, null)
await SkyReply("Done ✅")
}
break
case "addstick": case "savesticker": case "savestick": case "savestik": {
if (!isOwner) return SkyReply(msg.owner)
if (!m.quoted) return SkyReply(example("dengan balas sticker"))
if (!/webp/g.test(mime)) return SkyReply(example("dengan balas sticker"))
let data = await DitzzHosting.downloadAndSaveMediaMessage(qmsg, "./storage/"+makeid+".webp", false)
let dir = await fs.readdirSync("./storage").filter(v => v !== "verif.js")
await SkyReply(`*Berhasil Menyimpan Sticker ✅*\n\nUntuk Mengambil Sticker Ketik *.getsticker*\n\nUntuk Menghapus Sticker Ketik *.delsticker*\n\nTotal Sticker Tersimpan : *${dir.length} Sticker*`)
}
break
case "getsticker": {
if (!isOwner) return SkyReply(msg.owner)
let dir = await fs.readdirSync("./storage").filter(v => v !== "verif.js")
if (dir.length < 1) return SkyReply("Tidak Ada Sticker Yang Tersimpan")
await SkyReply(`${dir.length} Sticker Tersimpan, Tunggu Sebentar Bot Akan Mengirim Semua Sticker`)
for (let i of dir) {
await DitzzHosting.sendStimg(m.chat, "./storage/"+i, m, {packname: global.packname})
}
}
break
case "delsticker": {
if (!isOwner) return SkyReply(msg.owner)
let dir = await fs.readdirSync("./storage").filter(v => v !== "verif.js")
if (dir.length < 1) return SkyReply("Tidak Ada Sticker Yang Tersimpan")
await SkyReply(`${dir.length} Sticker Tersimpan, Tunggu Sebentar Bot Akan Menghapus Semua Sticker`)
for (let i of dir) {
await fs.unlinkSync("./storage/"+i)
}
await SkyReply("Semua Sticker Berhasil Dihapus ✅")
}
break
case "addprem": case "addpremium": {
if (!isOwner) return SkyReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (premium.includes(orang)) return SkyReply(`*Gagal Menambah User Premium!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *User Premium*`)
await premium.push(orang)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
SkyReply(`*Berhasil Menambah Premium ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Premium*`)
} else {
return SkyReply(example("@tag/62838XXX"))
}}
break
case "delprem": case "delpremium": {
if (!isOwner) return SkyReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!premium.includes(orang)) return SkyReply(`*Gagal Menghapus User Premium!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Premium*`)
let indx = premium.indexOf(orang)
await premium.splice(indx, 1)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
SkyReply(`*Berhasil Menghapus Premium ✅*\n${orang.split('@')[0]} Sekarang Terhapus Dari Database *User Premium*`)
} else {
return SkyReply(example("@tag/62838XXX"))
}}
break
case "listprem": case "listpremium": {
if (premium.length < 1) return SkyReply("Tidak Ada User Premium")
let teksnya = `*LIST USER PREMIUM⚡*\n\n`
premium.forEach(e => teksnya += `*Tag :* @${e.split("@")[0]}
*WhatsApp :* ${e.split("@")[0]}\n\n`)
DitzzHosting.sendMessage(m.chat, {text: teksnya, mentions: [...premium]}, {quoted: qtext2})
}
break
case "ttsearch": case "tiktoksearch": {
if (!text) return SkyReply(example("preset am"))
await SkyReply(msg.wait)
const tts = await fetchJson(`https://widipe.com/tiktoksearch?text=${text}`)
if (!tts.status) return SkyReply("Error Result Tidak Ditemukan")
if (tts.result.data.length < 2) return SkyReply("Error Result Tidak Ditemukan")
let componen = new Array()
let temp = tts.result.data.slice(0,6)
if (tts.result.data.length < 6) temp = tts.result.data
for (let res of temp) {
let vidres = await prepareWAMessageMedia({ video: { url: `${res.play}`} }, { upload: DitzzHosting.waUploadToServer })
await componen.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Author :* ${res.author.nickname}
*Caption :* ${res.title}
*Total Views :* ${toRupiah(res.play_count)}`, 
hasMediaAttachment: true, 
...vidres
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Vidio\",\"url\":\"${res.play}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "🔎 Berikut Adalah Hasil Pencarian Dari *Tiktok*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: componen
})
})}
}}, {userJid: m.sender, quoted: m})
return DitzzHosting.relayMessage(m.chat, msgii.message, {
messageId: msgii.key.id
})
}
break
case "yts": {
if (!text) return SkyReply(example("Utopia"))
await SkyReply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return SkyReply(mess.error)
let datanew = new Array()
let txt = []
global.tempYts = []
let result = data.all.slice(0,10)
for (let i of result) {
global.tempYts.push({
judul: `${i?.title || "unknown"}`, 
durasi: `${i?.timestamp || "unknown"}`, 
author: `${i.author?.name || "unknown"}`, 
link: i.url, 
image: i.thumbnail
})
txt.push(`* *Judul :* ${i.title}
* *Channel :* ${i.author?.name || "unknown"}
* *Durasi :* ${i?.timestamp || "unknown"}
* *Link Url :* ${i.url}\n\n`)
}
for (let ii = 0; ii < result.length; ii++) {
datanew.push({
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
title: txt[ii], 
hasMediaAttachment: true,
...(await prepareWAMessageMedia({ image: await fetch(result[ii].thumbnail)}, { upload: DitzzHosting.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Vidio\",\"url\":\"${global.tempYts[ii].link}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "🔎 Berikut Adalah Hasil Pencarian Dari *Youtube*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: datanew
})
})}
}}, {userJid: m.sender, quoted: m})
return DitzzHosting.relayMessage(m.chat, msgii.message, {
messageId: msgii.key.id
})
}).catch(err => SkyReply(err.toString()))
}
break
case "setppbot": case "setpp": {
if (!isOwner) return SkyReply(msg.owner)
if (/image/g.test(mime)) {
let media = await DitzzHosting.downloadAndSaveMediaMessage(qmsg)
await DitzzHosting.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
SkyReply("*Berhasil Mengganti Profil ✅*")
} else return SkyReply(example('dengan mengirim foto'))}
break
case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return SkyReply(msg.owner)
if (/image/g.test(mime)) {
var medis = await DitzzHosting.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await DitzzHosting.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
SkyReply("*Berhasil Mengganti Profil ✅*")
} else return SkyReply(example('dengan mengirim foto'))
}
break
case "setnamabot": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply(example('teksnya'))
DitzzHosting.updateProfileName(text)
SkyReply("*Berhasil Mengganti Nama Bot ✅*")
}
break
case "setbio": case "setbiobot": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply(example('teksnya'))
DitzzHosting.updateProfileStatus(text)
SkyReply("*Berhasil Mengganti Bio Bot ✅*")
}
break
case "tts": {
if (!text) return SkyReply(example("Hallo saya manusia"))
if (text.length >= 300) return SkyReply("Jumlah huruf harus di bawah 300!")
SkyReply(msg.wait)
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
DitzzHosting.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return SkyReply(e.toString())
}
}
break
case "cekkodam": case "cekkhodam": {
if (!text) return SkyReply(example("Ahmad"))
await SkyReply("Tunggu Sebentar Bot Mau Ritual Dulu 🗿🚬")
let anuan = [
	  "Kaleng Cat Avian",
	  "Pipa Rucika",
	  "Botol Tupperware",
	  "Badut Mixue",
	  "Sabun GIV",
	  "Sandal Swallow",
	  "Kramik",
	  "Jarjit",
	  "Ultraman",
	  "Satria Baja Hitam",
	  "Anak Yatim",
	  "Anak Piatu",
	  "Anak Yapit",
	  "Anak Jalanan",
	  "Ijat",
	  "Fizi",
	  "Mail",
	  "Ehsan",
	  "Upin",
	  "Ipin",
	  "sungut lele",
	  "Tok Dalang",
	  "Opah",
	  "Opet",
	  "Alul",
	  "Pak Vinsen",
	  "Maman Resing",
	  "Pak RT",
	  "Popo Barbie",
	  "Mimi Peri",
	  "Dobby",
	  "Pikipiki",
	  "Nanang",
	  "Daryana",
	  "Tono",
	  "Emon",
	  "Jaya",
	  "Gito",
	  "Barkah",
	  "Slamet",
	  "Udin",
	  "Admin ETI",
	  "Bung Towel",
	  "Lumpia Basah",
	  "Martabak Manis",
	  "Baso Tahu",
	  "Bakso",
	  "Mie Ayam",
	  "Tahu Gejrot",
	  "Dimsum",
	  "Seblak Ceker",
	  "Telor Gulung",
	  "Tahu Aci",
	  "Tempe Mendoan",
	  "Nasi Kucing",
	  "Kue Cubit",
	  "Tahu Sumedang",
	  "Nasi Uduk",
	  "Wedang Ronde",
	  "Kerupuk Udang",
	  "Cilok",
	  "Cilung",
	  "Kue Sus",
	  "Jasuke",
	  "Seblak Makaroni",
	  "Sate Padang",
	  "Sayur Asem",
	  "Kromboloni",
	  "Marmut Pink",
	  "Belalang Mullet",
	  "Kucing Oren",
	  "Lintah Terbang",
	  "Singa Paddle Pop",
	  "Macan Cisewu",
	  "Jin Ifrit",
      "Ratu Pantai Selatan",
      "Nyi Roro Kidul",
      "Singa Rajawali",
      "Harimau Putih",
      "Mbah Jugo",
      "Kyai Ageng",
      "Putri Cemara",
      "Ratu Gung Binatara",
      "Kyai Kanjeng",
      "Dewi Sri",
      "Prabu Siliwangi",
      "Sunan Kalijaga",
      "Eyang Semar",
      "Hanoman",
      "Dewi Durga",
      "Kyai Petruk",
      "Kanjeng Ratu Kidul",
      "Sunan Gunung Jati",
      "Ki Juru Mertani",
      "Eyang Merapi",
      "Ki Ageng Gribig",
      "Nyai Blorong",
      "Eyang Suro",
      "Raden Wijaya",
      "Kyai Keramat",
      "Nyai Selasih",
      "Ki Juru Kunci",
      "Roro Mendut",
      "Ki Joko Bodo",
      "Eyang Panembahan Senopati",
      "Nyai Rantamsari",
      "Kyai Tumenggung",
      "Roro Jonggrang",
      "Nyai Loro Kidul",
      "Kyai Panembahan",
      "Nyai Gandasari",
      "Eyang Tambakbaya",
      "Nyai Kuning",
      "Kyai Sekarjagat",
      "Nyai Melati",
      "Kyai Tunggulwulung",
      "Nyai Wulan",
      "Ki Juru Taman",
      "Eyang Sabdo Palon",
      "Nyai Srengenge",
      "Kyai Jagad",
      "Nyai Kadipaten", 
	  "Vario Mber",
	  "Beat Mber",
	  "Supra Geter",
	  "Oli Samping",
	  "Knalpot Racing",
	  "Jus Stroberi",
	  "Jus Alpukat",
	  "Alpukat Kocok",
	  "Es Kopyor",
	  "Es Jeruk",
	  "Cappucino Cincau",
	  "Jasjus Melon",
	  "Teajus Apel",
	  "Pop ice Mangga",
	  "Teajus Gulabatu",
	  "Air Selokan",
	  "Air Kobokan",
	  "TV Tabung",
	  "Keran Air",
	  "Tutup Panci",
	  "Kotak Amal",
	  "Tutup Termos",
	  "Tutup Botol",
	  "Kresek Item",
	  "Kepala Casan",
	  "Ban Serep",
	  "Kursi Lipat",
	  "Kursi Goyang",
	  "Kulit Pisang",
	  "Warung Madura",
	  "Gorong-gorong",
	]
let namakodam = anuan[Math.floor(Math.random()*anuan.length)]
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": "    "+namakodam+"    ",
    "voice": id
})
await sleep(10000)
DitzzHosting.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return SkyReply(e.toString())
}
}
break
case "ytplay": case "play": {
if (!text) return SkyReply(example('Dj tiktok'))
SkyReply(msg.wait)
let search = await yts(text)
let vid = search.videos[0]
let { title, thumbnail: thumb, timestamp, author, url } = vid
await ytmp3(url).then(async () => {
await DitzzHosting.sendMessage(m.chat, {audio: await fs.readFileSync(judul), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {thumbnailUrl: thumb, title: title, body: "Duration : "+timestamp+" | "+"Author : "+author.name, sourceUrl: url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await fs.unlinkSync(judul)
}).catch(e => m.reply(e.toString()))
}
break
case "qc": {
if (!text) return SkyReply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
SkyReply(msg.wait)
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./all/tmp/"+makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return SkyReply("Error")
await DitzzHosting.sendStimg(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break
case "tr": case "translate": {
let toks = `
Contoh Penggunaan :
*${cmd}* bahasa teksnya

Contoh : *${cmd}* id welcome

Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return SkyReply(toks)
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return SkyReply(toks)
if (args.length < 1) return SkyReply(toks)
if (!m.quoted.text) return SkyReply(toks)
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang,})
SkyReply(toks)
} finally {
SkyReply(result[0])
}
} else {
return SkyReply(toks)
}}
break
case "remini": case "tohd": case "hd": {
if (/image/g.test(mime)) {
SkyReply(msg.wait)
await DitzzHosting.downloadAndSaveMediaMessage(qmsg).then(async (res) => {
let image = await remini(await fs.readFileSync(res), "enhance")
await DitzzHosting.sendMessage(m.chat, {image: image, caption: "Berhasil ✅"}, {quoted: m})
await fs.unlinkSync(res)
}).catch(err => SkyReply(err.toString()))
} else { 
return SkyReply(example('dengan mengirim foto'))
}
}
break
case "chatgpt": case "gpt": {
if (!text) return SkyReply(example("apa itu nodejs"))
SkyReply(msg.wait)
await fetchJson(`https://widipe.com/gpt4?text=${text}`).then((e) => {
if (!e.status) return SkyReply(JSON.stringify(e, null, 2))
var teks = `*© GPT - Chat Version 0.4*\n\n${e.result}`
SkyReply(teks)
})
}
break
case "ai": case "openai": {
if (!text) return SkyReply(example("kamu siapa"))
SkyReply(msg.wait)
await fetchJson(`https://widipe.com/openai?text=${text}`).then((e) => {
if (!e.status) return SkyReply(JSON.stringify(e, null, 2))
var teks = `*© AI - Asistent v4.0.0*\n\n${e.result}`
SkyReply(teks)
})
}
break
case "toptv": {
if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return SkyReply("Durasi vidio maksimal 30 detik!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
DitzzHosting.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return SkyReply(example("dengan mengirim/balas vidio"))
}
}
break
case "toimage": {
if (!/webp/.test(mime) && !/audio/.test(mime)) return SkyReply(example('dengan reply sticker'))
SkyReply(msg.wait)
let media = await DitzzHosting.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
DitzzHosting.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
case "tovn": case "toptt": {
if (!/video|audio/.test(mime) && !/audio/.test(mime)) return SkyReply(example('dengan mengirim audio/vidio'))
SkyReply(msg.wait)
await DitzzHosting.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
DitzzHosting.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break
case "toaudio": case "tomp3": {
if (!/video/.test(mime) && !/audio/.test(mime)) return SkyReply(example('dengan mengirim vidio'))
if ((qmsg).seconds > 30) return SkyReply("Durasi vidio maksimal 30 detik")
SkyReply(msg.wait)
await DitzzHosting.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
DitzzHosting.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return SkyReply(example("dengan mengirim foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return SkyReply("Durasi vidio maksimal 15 detik!")
}
SkyReply(msg.wait)
var media = await DitzzHosting.downloadAndSaveMediaMessage(qmsg)
await DitzzHosting.sendStimg(m.chat, media, m, {packname: global.packname})
await fs.unlinkSync(media)
}
break
case "tourl": {
if (!/image/.test(mime)) return SkyReply(example("dengan mengirim foto"))
await SkyReply(msg.wait)
var fotonya = await DitzzHosting.downloadAndSaveMediaMessage(qmsg)
var urlimage = await telegraPh(fotonya)
await SkyReply(`${urlimage}`)
await fs.unlinkSync(fotonya)
}
break
case "public": {
if (!isOwner) return SkyReply(msg.owner)
DitzzHosting.public = true
SkyReply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Public*")
}
break
case "self": {
if (!isOwner) return SkyReply(msg.owner)
DitzzHosting.public = false
SkyReply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Self*")
}
break
case "get": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply("linknya")
try {
var check = await fetchJson(text)
SkyReply(JSON.stringify(check, null, 2))
} catch (e) {
return SkyReply(e.toString())
}}
break
case "instagram": case "igdl": case "ig": {
if (!text) return SkyReply(example("linknya"))
if (!text.includes("instagram.com")) return SkyReply("Link tautan tidak valid!")
SkyReply(msg.wait)
await fetchJson(`https://widipe.com/download/igdl?url=${text}`).then((res) => {
for (let a of res.result) {
DitzzHosting.sendMedia(m.chat, a.url, m, {
caption: "*Instagram Downloader ✅*"})
}
}).catch(e => SkyReply(e.toString()))
}
break
case "tiktokaudio": case "tiktokmp3": case "ttaudio": case "ttmp3": {
if (!text) return SkyReply(example("linknya"))
if (!text.includes("tiktok.com")) return SkyReply("Link tautan tidak valid!")
SkyReply(msg.wait)
await api.tiktok(`${text}`).then((res) => {
DitzzHosting.sendMessage(m.chat, {audio: {url: res.result.music}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch(e => SkyReply(e.toString()))
}
break
case "mediafire": {
if (!text) return SkyReply(example("linknya"))
if (!text.includes('mediafire.com')) return SkyReply("Link Tautan Tidak Valid!")
SkyReply(msg.wait)
await mediafire(text).then((res) => {
if (!res.link) return SkyReply(msg.error)
DitzzHosting.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase(), caption: "*Mediafire Downloader ✅*"}, {quoted: m})
}).catch((e) => SkyReply(e.toString()))
}
break
case "ssweb": {
if (!text) return SkyReply(example("linknya"))
if (!text.startsWith("https://")) return SkyReply("Link Tautan Tidak Valid!")
await SkyReply(msg.wait)
try {
let imagenya = await ssweb(`${text}`)
return DitzzHosting.sendMessage(m.chat, {image: imagenya, caption: msg.done}, {quoted: m})
} catch (e) {
return SkyReply(msg.error)
}
}
break
case "ssweb2": {
if (!text) return SkyReply(example("linknya"))
if (!text.startsWith("https://")) return SkyReply("Link Tautan Tidak Valid!")
await SkyReply(msg.wait)
try {
let imagenya = await ssweb(`${text}`, true, "phone")
return DitzzHosting.sendMessage(m.chat, {image: imagenya, caption: msg.done}, {quoted: m})
} catch (e) {
return SkyReply(msg.error)
}
}
break
case "pinterest": case "pin": {
if (!text) return SkyReply(example("makanan"))
SkyReply(global.msg.wait)
let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url)
if (res.length == 0) return SkyReply("Error, Foto Tidak Ditemukan")
if (res.length < 5) {
anuan = res
} else {
anuan = res.slice(0,5)
}
let anu = new Array()
for (let ii of anuan) {
let imgsc = await prepareWAMessageMedia({ image: { url: `${ii}`} }, { upload: DitzzHosting.waUploadToServer })
anu.push({
              header: proto.Message.InteractiveMessage.Header.fromObject({
              title: `Result Foto Ke *${anuan.indexOf(ii) + 1}*`, 
                hasMediaAttachment: true,
                ...imgsc
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {                  
                   name: "cta_url",
                   buttonParamsJson:  `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${ii}\",\"merchant_url\":\"https://www.google.com\"}`
                  }
                ]
              }), 
              footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
            })
}

const msgii = await generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: "🔎 Berikut Adalah Hasil Pencarian Foto Dari *Pinterest*"
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: anu
        })
      })
    }
  }
}, {userJid: m.sender, quoted: m})
 
await DitzzHosting.relayMessage(m.chat, msgii.message, {
  messageId: msgii.key.id
})
}
break
case "getcase": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./DitzzHosting.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
SkyReply(`${getcase(q)}`)
} catch (e) {
return SkyReply(`Case *${text}* Tidak Ditemukan`)
}
}
break
case "tiktok": case "tt": {
if (!text) return SkyReply(example('linknya'))
if (!/tiktok.com/.test(text)) return SkyReply("Link Tautan Tidak Valid!")
SkyReply(msg.wait)
 let anuan = text
await api.tiktok(anuan).then(async (res) => {
var cap = `*Tiktok Downloader ✅*`
if (res.result.duration == 0) {
if (res.result.images.length > 1) {
let araara = new Array()
let urutan = 0
for (let a of res.result.images) {
let imgsc = await prepareWAMessageMedia({ image: await fetch(`${a}`)}, { upload: DitzzHosting.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "Berikut Adalah Foto Hasil Result Dari *Tiktok Slide* ⬇️"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
DitzzHosting.sendMessage(m.chat, {image: {url: result.data.images[0]}, caption: cap}, {quoted: m})
}
} else {
let vidnya = await prepareWAMessageMedia({ video: await fetch(`${res.result.play}`)}, { upload: DitzzHosting.waUploadToServer })
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: cap
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...vidnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
name: "quick_reply",
buttonParamsJson: `{\"display_text\":\"Tiktok Audio\",\"title\":\"Audio Mp3\",\"id\":\".tiktokmp3 ${text}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}).catch(e => SkyReply(`${e}`))
}
break
case "facebook": case "fb": case "fbdl": {
if (!text) return SkyReply(example("linkvidionya"))
if (!/facebook.com/.test(text)) return SkyReply("Link Tautan Tidak Valid!")
SkyReply(msg.wait)
await fetchJson(`https://widipe.com/download/fbdown?url=${text}`).then((res) => {
if (!res.status) return SkyReply(JSON.stringify(res, null, 2))
DitzzHosting.sendMessage(m.chat, {video: {url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}`}, mimetype: 'video/mp4', caption: `*Facebook Downloader ✅*`}, {quoted: m})
}).catch(e => SkyReply(e.toString()))
}
break
case "owner": {
DitzzHosting.sendContact(m.chat, [owner], "Telfon/VC = Blokir", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./media/Reza.jpg"), 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: global.linkyt, 
mediaType: 1
}}})
}
break
case "welcome": {
if (!isGroup) return SkyReply(msg.group)
if (!isOwner && !isAdmin) return SkyReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Antilink Options || Status : ${antilink.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Antilink", description: "Pilih Opsi Ini Untuk Mengaktifkan Antilink", id: ".antilink on" }, 
{ title: "OFF Antilink", description: "Pilih Opsi Ini Untuk Mematikan Antilink", id: ".antilink off" }]
}, 
{
title: "AntilinkV2 Options || Status : ${antilink2.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON AntilinkV2", description: "Pilih Opsi Ini Untuk Mengaktifkan AntilinkV2", id: ".antilinkv2 on" }, 
{ title: "OFF AntilinkV2", description: "Pilih Opsi Ini Untuk Mematikan AntilinkV2", id: ".antilinkv2 off" }]
}, 
{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (welcome.includes(m.chat)) return SkyReply("Welcome Di Grup Ini Sudah Aktif")
await welcome.push(m.chat)
await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
let teksnya = `*Welcome Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!welcome.includes(m.chat)) return SkyReply("Grup Ini Tidak Terdaftar Di Database Welcome")
let posi = welcome.indexOf(m.chat)
await welcome.splice(posi, 1)
await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
let teksnya = `*Welcome Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "antilink": {
if (!isGroup) return SkyReply(msg.group)
if (!isOwner && !isAdmin) return SkyReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Antilink Options || Status : ${antilink.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Antilink", description: "Pilih Opsi Ini Untuk Mengaktifkan Antilink", id: ".antilink on" }, 
{ title: "OFF Antilink", description: "Pilih Opsi Ini Untuk Mematikan Antilink", id: ".antilink off" }]
}, 
{
title: "AntilinkV2 Options || Status : ${antilink2.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON AntilinkV2", description: "Pilih Opsi Ini Untuk Mengaktifkan AntilinkV2", id: ".antilinkv2 on" }, 
{ title: "OFF AntilinkV2", description: "Pilih Opsi Ini Untuk Mematikan AntilinkV2", id: ".antilinkv2 off" }]
}, 
{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (antilink.includes(m.chat)) return SkyReply("Antilink Di Grup Ini Sudah Aktif!")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
await antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
let teksnya = `*Antilink Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!antilink.includes(m.chat)) return SkyReply("Grup Ini Tidak Terdaftar Di Database Antilink")
let posi = antilink.indexOf(m.chat)
await antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
let teksnya = `*Antilink Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "antilinkV2": case "antilinkv2": {
if (!isGroup) return SkyReply(msg.group)
if (!isOwner && !isAdmin) return SkyReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Antilink Options || Status : ${antilink.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Antilink", description: "Pilih Opsi Ini Untuk Mengaktifkan Antilink", id: ".antilink on" }, 
{ title: "OFF Antilink", description: "Pilih Opsi Ini Untuk Mematikan Antilink", id: ".antilink off" }]
}, 
{
title: "AntilinkV2 Options || Status : ${antilink2.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON AntilinkV2", description: "Pilih Opsi Ini Untuk Mengaktifkan AntilinkV2", id: ".antilinkv2 on" }, 
{ title: "OFF AntilinkV2", description: "Pilih Opsi Ini Untuk Mematikan AntilinkV2", id: ".antilinkv2 off" }]
}, 
{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (antilink2.includes(m.chat)) return SkyReply("AntilinkV2 Di Grup Ini Sudah Aktif")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
await antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
let teksnya = `*AntilinkV2 Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!antilink2.includes(m.chat)) return SkyReply("Grup Ini Tidak Terdaftar Di Database AntilinkV2")
let posi = antilink2.indexOf(m.chat)
await antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
let teksnya = `*AntilinkV2 Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "autoread": {
if (!isOwner) return SkyReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Bot Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Autoread Options || Status : ${global.autoread ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoread", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoread", id: ".autoread on" }, 
{ title: "OFF Autoread", description: "Pilih Opsi Ini Untuk Mematikan Autoread", id: ".autoread off" }]
}, 
{
title: "Autoreadsw Options || Status : ${global.autoreadsw ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoreadsw", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoreadsw", id: ".autoreadsw on" }, 
{ title: "OFF Autoreadsw", description: "Pilih Opsi Ini Untuk Mematikan Autoreadsw", id: ".autoreadsw off" }]
}, 
{
title: "Anticall Options || Status : ${global.anticall ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Anticall", description: "Pilih Opsi Ini Untuk Mengaktifkan Anticall", id: ".anticall on" }, 
{ title: "OFF Anticall", description: "Pilih Opsi Ini Untuk Mematikan Anticall", id: ".anticall off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (global.autoread) return SkyReply("Autoread Sudah Aktif")
global.autoread = true
let teksnya = `*Autoread Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!global.autoread) return SkyReply("Autoread Sudah Tidak Aktif")
global.autoread = false
let teksnya = `*Autoread Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "autoreadsw": {
if (!isOwner) return SkyReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Bot Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Autoread Options || Status : ${global.autoread ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoread", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoread", id: ".autoread on" }, 
{ title: "OFF Autoread", description: "Pilih Opsi Ini Untuk Mematikan Autoread", id: ".autoread off" }]
}, 
{
title: "Autoreadsw Options || Status : ${global.autoreadsw ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoreadsw", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoreadsw", id: ".autoreadsw on" }, 
{ title: "OFF Autoreadsw", description: "Pilih Opsi Ini Untuk Mematikan Autoreadsw", id: ".autoreadsw off" }]
}, 
{
title: "Anticall Options || Status : ${global.anticall ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Anticall", description: "Pilih Opsi Ini Untuk Mengaktifkan Anticall", id: ".anticall on" }, 
{ title: "OFF Anticall", description: "Pilih Opsi Ini Untuk Mematikan Anticall", id: ".anticall off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (global.autoreadsw) return SkyReply("Autoreadsw Sudah Aktif")
global.autoreadsw = true
let teksnya = `*Autoreadsw Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!global.autoreadsw) return SkyReply("Autoreadsw Sudah Tidak Aktif")
global.autoreadsw = false
let teksnya = `*Autoreadsw Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "anticall": {
if (!isOwner) return SkyReply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Bot Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Autoread Options || Status : ${global.autoread ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoread", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoread", id: ".autoread on" }, 
{ title: "OFF Autoread", description: "Pilih Opsi Ini Untuk Mematikan Autoread", id: ".autoread off" }]
}, 
{
title: "Autoreadsw Options || Status : ${global.autoreadsw ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoreadsw", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoreadsw", id: ".autoreadsw on" }, 
{ title: "OFF Autoreadsw", description: "Pilih Opsi Ini Untuk Mematikan Autoreadsw", id: ".autoreadsw off" }]
}, 
{
title: "Anticall Options || Status : ${global.anticall ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Anticall", description: "Pilih Opsi Ini Untuk Mengaktifkan Anticall", id: ".anticall on" }, 
{ title: "OFF Anticall", description: "Pilih Opsi Ini Untuk Mematikan Anticall", id: ".anticall off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (global.anticall) return SkyReply("Anticall Sudah Aktif")
global.anticall = true
let teksnya = `*Anticall Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!global.anticall) return SkyReply("Anticall Sudah Tidak Aktif")
global.anticall = false
let teksnya = `*Anticall Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "setgc": case "statusgc": {
if (!isGroup) return SkyReply(msg.group)
if (!isOwner && !isAdmin) return SkyReply(msg.admin)
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Antilink Options || Status : ${antilink.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Antilink", description: "Pilih Opsi Ini Untuk Mengaktifkan Antilink", id: ".antilink on" }, 
{ title: "OFF Antilink", description: "Pilih Opsi Ini Untuk Mematikan Antilink", id: ".antilink off" }]
}, 
{
title: "AntilinkV2 Options || Status : ${antilink2.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON AntilinkV2", description: "Pilih Opsi Ini Untuk Mengaktifkan AntilinkV2", id: ".antilinkv2 on" }, 
{ title: "OFF AntilinkV2", description: "Pilih Opsi Ini Untuk Mematikan AntilinkV2", id: ".antilinkv2 off" }]
}, 
{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "setbot": case "statusbot": {
if (!isOwner) return SkyReply(msg.owner)
let teksnya = `Silahkan Pilih Tombol Options Settingan Bot Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Autoread Options || Status : ${global.autoread ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoread", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoread", id: ".autoread on" }, 
{ title: "OFF Autoread", description: "Pilih Opsi Ini Untuk Mematikan Autoread", id: ".autoread off" }]
}, 
{
title: "Autoreadsw Options || Status : ${global.autoreadsw ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Autoreadsw", description: "Pilih Opsi Ini Untuk Mengaktifkan Autoreadsw", id: ".autoreadsw on" }, 
{ title: "OFF Autoreadsw", description: "Pilih Opsi Ini Untuk Mematikan Autoreadsw", id: ".autoreadsw off" }]
}, 
{
title: "Anticall Options || Status : ${global.anticall ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Anticall", description: "Pilih Opsi Ini Untuk Mengaktifkan Anticall", id: ".anticall on" }, 
{ title: "OFF Anticall", description: "Pilih Opsi Ini Untuk Mematikan Anticall", id: ".anticall off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "setppgc": {
if (!isGroup) return SkyReply(msg.group)
if (!isBotAdmin) return SkyReply(msg.adminbot)
if (!isAdmin && !isOwner) return SkyReply(msg.admin)
if (/image/g.test(mime)) {
let media = await DitzzHosting.downloadAndSaveMediaMessage(qmsg)
await DitzzHosting.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
SkyReply("*Berhasil Mengganti Foto Grup ✅*")
} else return SkyReply(example('dengan mengirim foto'))
}
break
case "setnamegc": case "setnamagc": {
if (!isGroup) return SkyReply(msg.group)
if (!isBotAdmin) return SkyReply(msg.adminbot)
if (!isAdmin && !isOwner) return SkyReply(msg.admin)
if (!text) return SkyReply(example('teksnya'))
const gcname = groupMetadata.subject
await DitzzHosting.groupUpdateSubject(m.chat, text)
SkyReply(`*Berhasil Mengganti Nama Grup ✅*\n*${gcname}* Menjadi *${text}*`)
}
break
case "setdesc": case "setdesk": {
if (!isGroup) return SkyReply(msg.group)
if (!isBotAdmin) return SkyReply(msg.adminbot)
if (!isAdmin && !isOwner) return SkyReply(msg.admin)
if (!text) return SkyReply(example('teksnya'))
await DitzzHosting.groupUpdateDescription(m.chat, text)
SkyReply(`*Berhasil Mengganti Deskripsi Grup ✅*`)
}
break
case "open": {
if (!isGroup) return SkyReply(msg.group)
if (!isBotAdmin) return SkyReply(msg.adminbot)
if (!isAdmin && !isOwner) return SkyReply(msg.admin)
await DitzzHosting.groupSettingUpdate(m.chat, 'not_announcement')
SkyReply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {
if (!isGroup) return SkyReply(msg.group)
if (!isBotAdmin) return SkyReply(msg.adminbot)
if (!isAdmin && !isOwner) return SkyReply(msg.admin)
await DitzzHosting.groupSettingUpdate(m.chat, 'announcement')
SkyReply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {
if (isGroup) {
if (!isOwner && !isAdmin) return SkyReply(msg.admin)
if (!m.quoted) return SkyReply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
DitzzHosting.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return SkyReply(msg.adminbot)
DitzzHosting.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return SkyReply(msg.owner)
if (!m.quoted) return SkyReply(example("dengan reply pesan"))
DitzzHosting.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {
if (!isGroup) return SkyReply(msg.group)
if (!isAdmin && !isOwner) return SkyReply(msg.admin)
if (!isBotAdmin) return SkyReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DitzzHosting.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => SkyReply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => SkyReply(err.toString()))
} else return SkyReply(example('62838XXX'))}
break
case "promote": case "promot": {
if (!isGroup) return SkyReply(msg.group)
if (!isAdmin && !isOwner) return SkyReply(msg.admin)
if (!isBotAdmin) return SkyReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DitzzHosting.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => SkyReply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => SkyReply(err.toString()))
} else return SkyReply(example('6283XXX/@tag'))}
break
case "add": case "addmember": {
if (!isGroup) return SkyReply(msg.group)
if (!args[0]) return SkyReply(example("62838XXX"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await DitzzHosting.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return SkyReply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return SkyReply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await DitzzHosting.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return SkyReply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return SkyReply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return SkyReply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return SkyReply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case "subdomain": case "subdo": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply(example("host|ip"))
if (!text.split("|")) return SkyReply(example("host|ip"))
const host = text.split("|")[0]
if (!host) return SkyReply(example("host|ip"))
const ip = text.split("|")[1]
if (!ip) return SkyReply(example("host|ip"))
const anu = await Object.keys(global.subdomain)
var section = []
for (let res of anu) {
await section.push({ title: `${res}`, id: `.respon_subdomain ${host}|${ip}|${global.subdomain[res].zone}|${global.subdomain[res].apitoken}|${res}` })
}
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: '\nSilahkan Pilih Domain Yang Tersedia'
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Powered by  Putra Dev`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: \"# Subdomain By  Putra Dev\",
rows: ${JSON.stringify(section)}
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
global.tempsubdomain = true
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "respon_subdomain": {
if (!isOwner) return SkyReply(msg.owner)
if (global.tempsubdomain == undefined) return SkyReply("Hostname/IP Tidak Ditemukan!")
if (!text) return SkyRepky("Hostname/IP Tidak Ditemukan!")
if (!text.split("|")) return SkyRepky("Hostname/IP Tidak Ditemukan!")
const [host, ip, zone, apitoken, tldnya] = text.split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then((e) => {
if (e['success']) SkyReply(`*Berhasil Membuat Subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}`)
else SkyReply(`${e['error']}`)
})
global.tempsubdomain = undefined
}
break
case "kik": case "kick": {
if (!isGroup) return SkyReply(msg.group)
if (!isBotAdmin) return SkyReply(msg.adminbot)
if (!isAdmin && !isOwner) return SkyReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DitzzHosting.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => DitzzHosting.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => SkyReply(err.toString()))
} else return SkyReply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {
if (!isGroup) return SkyReply(msg.group)
if (!isAdmin && !isOwner) return SkyReply(msg.admin)
if (!m.quoted && !text) return SkyReply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
DitzzHosting.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {
if (!isGroup) return SkyReply(msg.group)
if (!isAdmin && !isOwner) return SkyReply(msg.admin)
if (!text) return SkyReply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
DitzzHosting.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "savekontak": {
if (!isOwner) return SkyReply(msg.owner)
if (!isGroup) return SkyReply(msg.group)
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
SkyReply(err.toString())
} finally {
if (m.chat !== m.sender) await SkyReply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await DitzzHosting.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Contact Berhasil Di Buat ✅\n*
*Total ${halls.length} Kontak*`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "savekontak2": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply(example("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text
var groupMetadataa
try {
groupMetadataa = await DitzzHosting.groupMetadata(`${idnya}`)
} catch (e) {
return SkyReply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
SkyReply(err.toString())
} finally {
if (m.chat !== m.sender) await SkyReply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await DitzzHosting.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak": case "pushctc": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply(example("pesannya"))
global.temptext = text
const grup = await DitzzHosting.groupFetchAllParticipating()
const obj = await Object.values(grup)
var section = []
for (let res of obj) {
await section.push({ title: `${res.subject}`, description: `Total Member : ${res.participants.length} Member`, id: `.respon_pushkontak ${res.id}` })
}
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: '\nSilahkan Pilih Target Grup'
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Powered by Putra dev.`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: \"Total Grup Chat : ${obj.length} Grup\",
rows: ${JSON.stringify(section)}
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "respon_pushkontak": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply("Text/Target Grup Tidak Ditemukan!")
if (global.temptext == undefined) return SkyReply("Text/Target Grup Tidak Ditemukan!")
const teks = global.temptext
const jidawal = m.chat
const data = await DitzzHosting.groupMetadata(text)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.temptext = undefined
await SkyReply(`*Memproses Pushkontak ⏳*

* *Type :* Infinity Pesan
* *Target :* ${data.subject}
* *Jeda Pesan :* ${delaypushkontak}
* *Jumlah :* ${halls.length} Member`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
let msgii = await generateWAMessageFromContent(mem, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: "\n"+teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Powered by  Putra Dev`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Grup Jual Beli\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})}
}}, {userJid: mem, quoted: qtext2}) 
await DitzzHosting.relayMessage(mem, msgii.message, {participant: {jid: mem}, messageId: msgii.key.id})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
SkyReply(err.toString())
} finally {
if (jidawal !== m.sender) await SkyReply(`*Pushkontak Berhasil ✅*\nFile Kontak Sudah Dikirim Ke Private Chat`, jidawal)
await DitzzHosting.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}
}
break
case "savekontak": case "savectc": {
if (!isOwner) return SkyReply(msg.owner)
const grup = await DitzzHosting.groupFetchAllParticipating()
const obj = await Object.values(grup)
var section = []
global.tempsavekontak = true
for (let res of obj) {
await section.push({ title: `${res.subject}`, description: `Total Member : ${res.participants.length} Member`, id: `.respon_savekontak ${res.id}` })
}
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: '\nSilahkan Pilih Target Grup'
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Powered by  Putra Dev`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: \"Total Grup Chat : ${obj.length} Grup\",
rows: ${JSON.stringify(section)}
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "respon_savekontak": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply("Target Grup Tidak Ditemukan!")
if (global.tempsavekontak == undefined) return SkyReply("Target Grup Tidak Ditemukan!")
const jidawal = m.chat
const data = await DitzzHosting.groupMetadata(text)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tempsavekontak = undefined
await SkyReply(`*Memproses Savekontak ⏳*

* *Target :* ${data.subject}
* *Jumlah :* ${halls.length} Member`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await sleep(500)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
SkyReply(err.toString())
} finally {
if (jidawal !== m.sender) await SkyReply(`*Savekontak Berhasil ✅*\nFile Kontak Sudah Dikirim Ke Private Chat`, jidawal)
await DitzzHosting.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}
}
break
case "idgc": {
if (!isOwner) return SkyReply(msg.owner)
if (!isGroup) return SkyReply(msg.group)
SkyReply(`${m.chat}`)
}
break
case "listgc": case "cekidgc": case"listgrup": {
let gcall = Object.values(await DitzzHosting.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
DitzzHosting.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `${gcall.length} Group Chat`, body: `© ${namabot2}`,  sourceUrl: global.linkgc2, previewType: "PHOTO"}}}, {quoted: qtext2})
}
break
case "joingc": case "join": {
if (!isOwner) return SkyReply(msg.owner)
if (!text && !m.quoted) return SkyReply(example('linknya'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return SkyReply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await DitzzHosting.groupAcceptInvite(result).then(respon => SkyReply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => SkyReply(error.toString()))
}
break
case "leave": case "leavegc": {
if (!isOwner) return SkyReply(msg.owner)
if (!isGroup) return SkyReply(msg.group)
await SkyReply("Okay Bang")
await sleep(3000)
await DitzzHosting.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {
if (!isOwner) return SkyReply(msg.owner)
let gcall = await Object.values(await DitzzHosting.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Command :*\nKetik *${cmd}* nomor grup\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
DitzzHosting.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `${gcall.length} Group Chat`, body: `© ${namabot2}`,  sourceUrl: global.linkgc2, previewType: "PHOTO"}}}, {quoted: qtext2})
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return SkyReply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await SkyReply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await DitzzHosting.groupLeave(`${gcall[leav].id}`)
}}
break
case "delsampah": case "boost": {
if (!isOwner) return SkyReply(msg.owner)
let dir = await fs.readdirSync("./all/tmp")
if (dir.length < 2) return SkyReply("Tidak Ada Sampah")
let res = dir.filter(e => e !== "verif-tmp.js")
await SkyReply(`Terdeteksi *${res.length} Sampah*\nTunggu Sebentar Bot Memproses Penghapusan`)
await sleep(3000)
for (let i of res) {
await fs.unlinkSync(`./all/tmp/${i}`)
}
await sleep(3000)
await SkyReply(`Berhasil Menghapus *${res.length} Sampah*`)

}
break
case "rst": case "restartbot": {
if (!isOwner) return SkyReply(msg.owner)
await SkyReply("Memproses Restart Bot . . .")
execSync("npm restart")
}
break
case "scbot": case "sc": 
case "scriptbot": {
if (isOwner) {
let dir = await fs.readdirSync("./all/tmp")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "verif-tmp.js")
for (let i of res) {
await fs.unlinkSync(`./all/tmp/${i}`)
}
}
await SkyReply("Memproses Pengambilan Scriptbot")
let a = getTime().split("T")[1].split("+")[0]
var name = `PutraHosting V5🍁`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "skysession" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await DitzzHosting.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return SkyReply("Scriptbot Berhasil Dikirim Ke Chat Pribadi")
} else {
let teks = `*# Script PutraHosting  V0.0.5*
Script Ini Di Jual Dengan Harga Rp50.000
Jika Berminat Silahkan Chat Developer Bot Ini

*Contact :* https://wa.me/6288983238633
*_© Credits By DitzzHosting_*`
DitzzHosting.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: 40000000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: teks, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}}
break
case "done": {
if (isGroup) return SkyReply(msg.private)
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply(example("Panel Unlimited"))
let teksnya = `
*📦 ${text}*
*⏰ ${tanggal(Date.now())}*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qpayment}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "jpmtesti": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return SkyReply(example("teksnya dengan kirim foto"))
if (!/image/.test(mime)) return SkyReply(example("teksnya dengan kirim foto"))
const imgtesti = await DitzzHosting.downloadAndSaveMediaMessage(qmsg)
let total = 0
let getGroups = await DitzzHosting.groupFetchAllParticipating()
let groups = await Object.keys(getGroups)
const jidawal = m.chat
await SkyReply(`*Memproses Jpm ⏳*

* Tipe : *Testimoni Teks & Foto*
* Total Grup : *${groups.length} Grup*`)
for (let jid of groups) {
try {
await DitzzHosting.sendMessage(jid, {image: await fs.readFileSync(imgtesti), caption: text, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner }, forwardedNewsletterMessageInfo: { newsletterName: `Testimoni By Skyzo 🍁`, newsletterJid: global.idsaluran }}}, {quoted: qtext2})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await SkyReply(`*Jpm Testi Berhasil ✅*
Total Grup Yang Berhasil Dikirim Pesan *${total} Grup*`, jidawal)
await fs.unlinkSync(imgtesti)
}
break
case "jpmhidetag": case "jpmht": {
if (!isOwner) return SkyReply(msg.owner)
if (!text && !m.quoted) return SkyReply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await DitzzHosting.groupFetchAllParticipating()
let groups = await Object.keys(getGroups)
let jidawal = m.chat
await SkyReply(`*Memproses Jpm ⏳*

* Tipe : *Teks & Hidetag*
* Total Grup : *${groups.length} Grup*`)
var ments = []
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})}
}}, {userJid: m.sender, quoted: qtext2})
for (let jid of groups) {
try {
ments = getGroups[jid].participants.map(e => e.id)
await DitzzHosting.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
await SkyReply(`*Jpm Berhasil ✅*
Total Grup Yang Berhasil Dikirim Pesan *${total} Grup*`, jidawal)
}
break
case "jpmhidetag2": case "jpmht2": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return SkyReply(example("teksnya dengan balas/kirim foto"))
const image = await DitzzHosting.downloadAndSaveMediaMessage(qmsg)
var teks = text
const jidawal = m.chat
let total = 0
let getGroups = await DitzzHosting.groupFetchAllParticipating()
let groups = await Obejct.keys(getGroups)
await SkyReply(`*Memproses Jpm ⏳*

* Tipe : *Hidetag Teks & Foto*
* Total Grup : *${groups.length} Grup*`)
var ments = []
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync(image)}, { upload: DitzzHosting.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: qtext2})
for (let jid of groups) {
try {
ments = getGroups[jid].participants.map(e => e.id)
await DitzzHosting.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
await SkyReply(`*Jpm Berhasil ✅*
Total Grup Yang Berhasil Dikirim Pesan *${total} Grup*`, jidawal)
}
break
case "jpm": {
if (!isOwner) return SkyReply(msg.owner)
if (!text && !m.quoted) return SkyReply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
const jidawal = m.chat
let getGroups = await DitzzHosting.groupFetchAllParticipating()
let groups = await Object.keys(getGroups)
await SkyReply(`*Memproses Jpm ⏳*

* Tipe : *Teks*
* Total Grup : *${groups.length} Grup*`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: qtext2})
for (let jid of groups) {
try {
await DitzzHosting.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await SkyReply(`*Jpm Berhasil ✅*
Total Grup Yang Berhasil Dikirim Pesan *${total} Grup*`, jidawal)
}
break
case "jpm2": {
if (!isOwner) return SkyReply(msg.owner)
if (!text) return SkyReply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return SkyReply(example("teksnya dengan balas/kirim foto"))
let image = await DitzzHosting.downloadAndSaveMediaMessage(qmsg)
let total = 0
const jidawal = m.chat
let getGroups = await DitzzHosting.groupFetchAllParticipating()
let groups = await Object.keys(getGroups)
await SkyReply(`*Memproses Jpm ⏳*

* Tipe : *Teks & Foto*
* Total Grup : *${groups.length} Grup*`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: text
}), header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync(image)}, { upload: DitzzHosting.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: qtext2})
for (let jid of groups) {
try {
await DitzzHosting.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
await SkyReply(`*Jpm Berhasil ✅*
Total Grup Yang Berhasil Dikirim Pesan *${total} Grup*`, jidawal)
}
break
case "jpmslide": case "startjpmslide": case "startslide": {
if (!isOwner) return SkyReply(msg.owner)
let total = 0
let getGroups = await DitzzHosting.groupFetchAllParticipating()
const jidawal = m.chat
let groups = await Object.keys(getGroups)
await SkyReply(`*Memproses Jpm ⏳*

* Tipe : *Slide Teks & Foto*
* Total Grup : *${groups.length} Grup*`)
for (let i of groups) {
try {
await sendslide(i)
total += 1
} catch {}
await sleep(global.delayjpm)
}
await SkyReply(`*Jpm Slide Berhasil ✅*
Total Grup Yang Berhasil Dikirim Pesan *${total} Grup*`, jidawal)
}
break
case "addadmin": {
if (!text) return SkyReply(example("username"))
if (!isOwner) return SkyReply(msg.owner)
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return SkyReply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await SkyReply("*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
`
let msgii = generateWAMessageFromContent(orang, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "addadmin2": {
if (!text) return SkyReply(example("nama,6283XXX"))
if (!isOwner) return SkyReply(msg.owner)
if (!args[0]) return SkyReply(example("nama,6283XXX"))
if (!text.split(",")) return SkyReply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return SkyReply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return SkyReply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await DitzzHosting.onWhatsApp(ceknya)
if (!check[0].exists) return SkyReply("Nomor Buyyer Tidak Valid!")
let username = buyyer.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return SkyReply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
await SkyReply(`*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${ceknya}`)
const more = String.fromCharCode(8206).repeat(1001)
var teks = `*Pesanan Telah Datang 📦*${more}

*Berikut Data Admin Kamu 🌐*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
`
let msgii = generateWAMessageFromContent(client, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: client, quoted: qtext2}) 
await DitzzHosting.relayMessage(client, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "deladmin": {
if (!isOwner) return SkyReply(msg.owner)
if (!args[0]) return SkyReply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return SkyReply("ID Admin Tidak Ditemukan!")
SkyReply(`Berhasil Menghapus Admin Panel *${capital(getid)}*`)
}
break
case "listadmin": {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let totaladmin = 0
if (users.length < 1 ) return SkyReply("Tidak Ada Admin Panel")
var teks = " *LIST ADMIN PANEL BOT⚡*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
totaladmin += 1
teks += `\`📡ID User ${i.attributes.id}\`
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n\n`
})
teks += ` Total Admin : *${totaladmin} Admin*`
DitzzHosting.sendText(m.chat, teks, qtext2)
}
break
case "cpanel": case "addpanel": case "buatpanel": {
if (!isOwner && !isPremium) return SkyReply(msg.owner)
if (global.apikey.length < 1) return SkyReply("Apikey Tidak Ditemukan!")
if (!args[0]) return SkyReply(example("nama"))
global.panel = [text.toLowerCase()]
let teksnya = `Silahkan Pilih Ram Server Panel Yang Tersedia Di List Button Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.imgpanel, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot} v0.0.5`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "# Silahkan Pilih Salah Satu Ram Server Di Bawah Ini",
rows: [
{ title: "Ram Unlimited || Cpu Unlimited", description: "Status Server Ready", id: ".cpunliv4" }, 
{ title: "Ram 1GB || Cpu 40%", description: "Status Server Ready", id: ".cp1gbv4" }, 
{ title: "Ram 2GB || Cpu 60%", description: "Status Server Ready", id: ".cp2gbv4" }, 
{ title: "Ram 3GB || Cpu 80%", description: "Status Server Ready", id: ".cp3gbv4" }, 
{ title: "Ram 4GB || Cpu 100%", description: "Status Server Ready", id: ".cp4gbv4" }, 
{ title: "Ram 5GB || Cpu 120%", description: "Status Server Ready", id: ".cp5gbv4" }, 
{ title: "Ram 6GB || Cpu 140%", description: "Status Server Ready", id: ".cp6gbv4" }, 
{ title: "Ram 7GB || Cpu 160%", description: "Status Server Ready", id: ".cp7gbv4" }, 
{ title: "Ram 8GB || Cpu 180%", description: "Status Server Ready", id: ".cp8gbv4" }, 
{ title: "Ram 9GB || Cpu 200%", description: "Status Server Ready", id: ".cp9gbv4" }, 
{ title: "Ram 10GB || Cpu 220%", description: "Status Server Ready", id: ".cp10gbv4" }
]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cpanel2": case "addpanel2": case "buatpanel2": {
if (!isOwner && !isPremium) return SkyReply(msg.owner)
if (global.apikey.length < 1) return SkyReply("Apikey Tidak Ditemukan!")
if (!args[0]) return SkyReply(example("nama,6283XXX"))
if (!text.split(",")) return SkyReply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return SkyReply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return SkyReply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await DitzzHosting.onWhatsApp(ceknya)
if (check.length < 1) return SkyReply("Nomor Buyyer Tidak Valid!")
global.panel2 = [buyyer, client]
let teksnya = `Silahkan Pilih Ram Server Panel Yang Tersedia Di List Button Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.imgpanel, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot} v0.0.5`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "# Silahkan Pilih Salah Satu Ram Server Di Bawah Ini",
rows: [
{ title: "Ram Unlimited || Cpu Unlimited", description: "Status Server Ready", id: ".cpunliv5" }, 
{ title: "Ram 1GB || Cpu 40%", description: "Status Server Ready", id: ".cp1gbv5" }, 
{ title: "Ram 2GB || Cpu 60%", description: "Status Server Ready", id: ".cp2gbv5" }, 
{ title: "Ram 3GB || Cpu 80%", description: "Status Server Ready", id: ".cp3gbv5" }, 
{ title: "Ram 4GB || Cpu 100%", description: "Status Server Ready", id: ".cp4gbv5" }, 
{ title: "Ram 5GB || Cpu 120%", description: "Status Server Ready", id: ".cp5gbv5" }, 
{ title: "Ram 6GB || Cpu 140%", description: "Status Server Ready", id: ".cp6gbv5" }, 
{ title: "Ram 7GB || Cpu 160%", description: "Status Server Ready", id: ".cp7gbv5" }, 
{ title: "Ram 8GB || Cpu 180%", description: "Status Server Ready", id: ".cp8gbv5" }, 
{ title: "Ram 9GB || Cpu 200%", description: "Status Server Ready", id: ".cp9gbv5" }, 
{ title: "Ram 10GB || Cpu 220%", description: "Status Server Ready", id: ".cp10gbv5" }
]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await DitzzHosting.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})

}
break
case "cp1gbv4": case "cp2gbv4": case "cp3gbv4": case "cp4gbv4": case "cp5gbv4": case "cp6gbv4": case "cp7gbv4": case "cp8gbv4": case "cp9gbv4": case "cp10gbv4": case "cpunliv4": {
if (!isOwner && !isPremium) return SkyReply(msg.owner)
if (global.panel == null) return SkyReply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gbv4") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv4") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv4") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv4") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv4") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv4") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv4") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv4") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv4") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gbv4") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isPremium) return SkyReply(msg.owner)
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return SkyReply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return SkyReply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await SkyReply("*Berhasil Membuat Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
let msgii = await generateWAMessageFromContent(orang, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Powered by Putra dev.`
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.imgpanel, 400, 400), 
"fileLength": 9999999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot} v0.0.5`, 
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
contextInfo: {
isForwarded: true}
})} 
}}, {userJid: m.sender, quoted: null}) 
await DitzzHosting.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break
case "cp1gbv5": case "cp2gbv5": case "cp3gbv5": case "cp4gbv5": case "cp5gbv5": case "cp6gbv5": case "cp7gbv5": case "cp8gbv5": case "cp9gbv5": case "cp10gbv5": case "cpunliv5": {
if (!isOwner && !isPremium) return SkyReply(msg.owner)
if (global.panel2 == null) return SkyReply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gbv5") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv5") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv5") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv5") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv5") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv5") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv5") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv5") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv5") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gbv5") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isPremium) return SkyReply(msg.owner)
let username = global.panel2[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return SkyReply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return SkyReply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = global.panel2[1]
await SkyReply(`*Berhasil Membuat Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${orang.split("@")[0]}`)
const more = String.fromCharCode(8206).repeat(1001)
var teks = `*Pesanan Telah Datang 📦*${more}

*Berikut Data Panel Kamu 🌐*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
let msgii = await generateWAMessageFromContent(orang, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Powered by Putra dev.`
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.imgpanel, 400, 400), 
"fileLength": 9999999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot} v0.0.5`, 
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
contextInfo: {
isForwarded: true}
})} 
}}, {userJid: orang, quoted: null}) 
await DitzzHosting.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel2 = null
}
break
case "listpanel": case "listp": case "listserver": {
if (global.apikey.length < 1) return SkyReply("Apikey Tidak Ditemukan!")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return SkyReply("Tidak Ada Server Bot")
let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: messageText
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.imgpanel, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot} v0.0.5`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Buat Server Panel\",\"title\":\"Buat Panel\",\"id\":\".cpanel\"}" 
}, 
{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Hapus Server Panel\",\"title\":\"Hapus Panel\",\"id\":\".delpanel\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "delpanel": {
let kontol = new Array()
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return SkyReply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status
let namanya = `${s.name}`
let idnya = `${s.id} ⚡`
let ramnya = `${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}`
let cpunya = `${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`
let disknya = `${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}`
await kontol.push({ 
header: `ID Server ${idnya}`, title: `Nama Server : ${namanya}`, description: `Ram ${ramnya} | Cpu ${cpunya} | Disk ${disknya}`, id: `.respon_delpanel ${idnya}`})
}
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: '\nSilahkan Pilih *Server Panel* Yang Ingin Kamu Hapus, Untuk Melihat Lebih Detail Info Server Ketik *.listpanel*'
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.imgpanel, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot} v0.0.5`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Total Server Panel : ${res.meta.pagination.count} Server",
rows: ${JSON.stringify(kontol)}
}]}`
}, 
{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"List Server Panel\",\"title\":\"List Panel\",\"id\":\".listpanel\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await DitzzHosting.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "respon_delpanel": {
if (!isOwner && !isPremium) return SkyReply(msg.owner)
if (global.apikey.length < 1) return SkyReply("Apikey Tidak Ditemukan!")
if (!args[0]) return SkyReply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return SkyReply("*ID Server/User* Tidak Ditemukan")
SkyReply(`*Berhasil Menghapus Panel ✅*
Nama Server : *${capital(sections)}*`)
}
break
case "sendpayment": case "payment": case "pay": case "listpayment": {
if (!isOwner) return SkyReply(msg.owner)
let imgsc = await prepareWAMessageMedia({ image: { url: global.imgslide } }, { upload: DitzzHosting.waUploadToServer })
let imgqr = await prepareWAMessageMedia({ image: { url: global.qris } }, { upload: DitzzHosting.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "Pilih *Payment Pembayaran* Yang Tersedia Di Bawah Ini ⬇️"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Dana Payment*

*Nomor :* ${global.dana}`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Nomor Dana\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
}]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*OVO Payment*

*Nomor :* ${global.ovo}`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Nomor Ovo\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
}]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Gopay Payment*

*Nomor :* ${global.gopay}`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Nomor Gopay\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
}]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*QRIS All Payment*

Scan Foto QRIS All Payment Diatas Ini`, 
hasMediaAttachment: true,
...imgqr
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${global.qris}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
})
}]
})
})}
}}, {userJid: m.sender, quoted: qtext2})
await DitzzHosting.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break
case "ambilq": {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
SkyReply(jsonData)
}
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return DitzzHosting.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return DitzzHosting.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
DitzzHosting.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
DitzzHosting.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return DitzzHosting.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return DitzzHosting.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
DitzzHosting.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}

Command From : ${m.sender.split("@")[0]}`}, {quoted: m})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
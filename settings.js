require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "62815582558343"
global.namaowner = "ZALL."
global.namaowner2 = "ZALL"

//======== Setting Bot & Link ========//
global.namabot = "ZALLHosting" 
global.namabot2 = "ZALL V5"
global.idsaluran = "https://whatsapp.com/channel/0029VahgWqG2975ElQC1Sc0p"
global.linkgc = 'https://chat.whatsapp.com/GhXLH2bpdMx4RhRWOJQzFQ'
global.linkgc2 = "https://chat.whatsapp.com/IOq2B8kPY3LGbLAx2RnyvV"
global.linksaluran = "https://whatsapp.com/channel/0029VahgWqG2975ElQC1Sc0p"
global.linkyt = 'https://whatsapp.com/channel/0029VahgWqG2975ElQC1Sc0p'
global.packname = "Created By ZALL"

//========== Setting Event ==========//
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false
global.autopromosi = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 1000

//========== Setting Foto ===========//
global.imgreply = "https://telegra.ph/file/7287a5dccb7810704ba28.jpg"
global.imgmenu = fs.readFileSync("./media/Menu.jpg")
global.imgmenu2 = fs.readFileSync("./media/Menu2.jpg")
global.imgbug = fs.readFileSync("./media/Bug.jpg")
global.imgslide = "https://telegra.ph/file/7287a5dccb7810704ba28.jpg"
global.imgpanel = fs.readFileSync("./media/Panel.jpg")


//========== Setting Panell ==========//
global.egg = "15"
global.nestid = "6"
global.loc = "1"
global.domain = "https://skyzo.my.id"
global.apikey = "ptla_5iLKDhKvGTMCM262JK0C32xVD7EQ1OZIF17SSpIkvep" //ptla
global.capikey = "ptlc_Y95PPHsduh06e16Y5DjTPj537bpfquJUQUHE8klSg1c" //ptlc

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi "Gak Ada"
global.dana = "081227460142"
global.gopay = "Belum Tersedia"
global.ovo = "Belum Tersedia"
global.qris = "https://telegra.ph/file/23e660baece49167a9ccf.jpg"
                             
//=========== Api Domain ===========//
global.subdomain = {
"digitalserver.biz.id": {
"zone": "c2047082b74a80e5be03959bad59592a", 
"apitoken": "SDG2MrxgoJLZ8GDkpWk2PalEn-Vg8PQkjEsPQ_Wy"
}, 
"skyzo.my.id": {
"zone": "9de948bb1589175a8c9353612759b678", 
"apitoken": "poNl1SWzhD3rCUqFwfXwK7iAm2SobqeyLFJWa9nB"
}, 
"tokopanellku.my.id": {
"zone": "5f4a582dd80c518fb2c7a425256fb491", 
"apitoken": "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby"
}, 
"panellstore.net": {
"zone": "d41a17e101c0f89f0aec609c31137f91", 
"apitoken": "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi"
}
}


//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Owner Bot", 
"developer": "Command Ini Hanya Untuk Developer Bot!"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348020861112" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "Andre";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348020861112";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_23_05_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDY2LFxuICAgICAgICAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQzLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDI3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQyLFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTExLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDYzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICA1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImhJTzRNK01KZVhwVEppMzAveUt5c2cyRzRwTUI5clpLVTIzNFA0cjBkMUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtQQ3lsN0ppU3NxckpFakNTcDYtclFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDViOWVmZjktZDNmOS00OTVlLWFhMGUtZDllNDZkY2E3ZDkwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDg2LFxuICAgICAgMzAsXG4gICAgICA3MixcbiAgICAgIDI0MixcbiAgICAgIDE2OCxcbiAgICAgIDk5LFxuICAgICAgNTQsXG4gICAgICAyMDQsXG4gICAgICAyMjYsXG4gICAgICAyMDUsXG4gICAgICAxMjAsXG4gICAgICA3NyxcbiAgICAgIDE2NCxcbiAgICAgIDEwMixcbiAgICAgIDEzOSxcbiAgICAgIDEzMyxcbiAgICAgIDI0OCxcbiAgICAgIDg0LFxuICAgICAgMTY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAxOTksXG4gICAgICAyNDcsXG4gICAgICAxNDEsXG4gICAgICAxNDcsXG4gICAgICAxMTQsXG4gICAgICAyMzcsXG4gICAgICAxNjgsXG4gICAgICAyNixcbiAgICAgIDEzNSxcbiAgICAgIDIxNixcbiAgICAgIDEwMCxcbiAgICAgIDI2LFxuICAgICAgMTc5LFxuICAgICAgNDgsXG4gICAgICAxOTQsXG4gICAgICAxMDIsXG4gICAgICAxNjAsXG4gICAgICAxMDQsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vVDVyY0RFTWF6MGJRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNUZ1QW9PQjFBZXFTak5JVFNHb2JuU05rZSsvWUpFS1hPYU5SZmZpRGlnST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrc1ZoQWlCUEZOVGpyZ3V1cmN5UHhscmVTb1N5M044RUh6YWFoVWc0cWR2SXZpZ0UrOG5NVFMwSEt6UWRuSUF2eUl5ZmhXaFY0VjJJRTl4c1BrWHdEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLT3J3b20zUlgvbFVrRnNXajZBNGhPZHVYdlNwWnhHVEh2dXpRcEQzVzJXMzdNTFpSaEVnWFBpQ0tYSDZkV0RxbWVCS3ViQk91WGVnZnVrdzg3N05qUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjA4NjExMTI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlb7wnZaV8J2WhvCdlozwnZaN8J2WivCdlpnwnZaZ8J2WjiDwnZW48J2WhvCdlovwnZaO8J2WhlwiLFxuICAgIFwibGlkXCI6IFwiMjQyNTkzMDIzNjY4Mzc3OjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDIwODYxMTEyOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDk5ODM0NlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Spaghetti ",
  packname: process.env.PACK_NAME || "Mafia",
  botname : process.env.BOT_NAME  || "Andre bot",
  ownername:process.env.OWNER_NAME|| "DeAndre",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

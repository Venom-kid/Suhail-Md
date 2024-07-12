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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_18_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDY5LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDYxLFxuICAgICAgICA4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDgyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA4MSxcbiAgICAgICAgNCxcbiAgICAgICAgODksXG4gICAgICAgIDE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU5LFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpNW9Qbjh1Qm1JWW1mN2xUTlpXa1NCNjFqQmNQY1Y2SDJBeFkwdUxhaE00PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqd2xFSUdtV1JNaXhpRi1laHN4ME9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2OTUxYTFlLWY3NDEtNDZiZi1iOTAyLWVkNjlhNDdhZjFkMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAxMDMsXG4gICAgICAxNDcsXG4gICAgICAyNTAsXG4gICAgICAyMzUsXG4gICAgICA0OCxcbiAgICAgIDM5LFxuICAgICAgNzAsXG4gICAgICAyMixcbiAgICAgIDg2LFxuICAgICAgNTQsXG4gICAgICA5NyxcbiAgICAgIDEyOCxcbiAgICAgIDE1NixcbiAgICAgIDI0NyxcbiAgICAgIDE3MyxcbiAgICAgIDY0LFxuICAgICAgMTg3LFxuICAgICAgMjQxLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDIyMSxcbiAgICAgIDE5MixcbiAgICAgIDEyNyxcbiAgICAgIDI1LFxuICAgICAgNzIsXG4gICAgICAxMyxcbiAgICAgIDE2MCxcbiAgICAgIDEyOCxcbiAgICAgIDI0MSxcbiAgICAgIDExOSxcbiAgICAgIDc3LFxuICAgICAgNTEsXG4gICAgICAyNDgsXG4gICAgICAyNDYsXG4gICAgICAzMSxcbiAgICAgIDIyMSxcbiAgICAgIDIyNyxcbiAgICAgIDI0MixcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vVDVyY0RFSW1Zd2JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNUZ1QW9PQjFBZXFTak5JVFNHb2JuU05rZSsvWUpFS1hPYU5SZmZpRGlnST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSZGRHVDQvMkxBTUlvNGdmU2NnbjI1R0JPd01wa2NHM054bzdjYUE1bjkrTzcyNFRrNWI4d2lGK3Nma3EvTEtTYjY2Wmxzc0tpbitaMmMvc013TjREZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKSjBGUGRxMHRnRGlXc3FqWXBMYjR0d2hCSWh2bG1YNU1SaW5lcW1lNzdjUkFQWWMveXoxSXlzTGpzUnZlRVdDUklSNUZaNis2ZDUyaVA2U1lGQ1pEZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjA4NjExMTI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlb7wnZaV8J2WhvCdlozwnZaN8J2WivCdlpnwnZaZ8J2WjiDwnZW48J2WhvCdlovwnZaO8J2WhlwiLFxuICAgIFwibGlkXCI6IFwiMjQyNTkzMDIzNjY4Mzc3OjZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDIwODYxMTEyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDczMjY4OVxufSIKfQ=="  // PUT your SESSION_ID 


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

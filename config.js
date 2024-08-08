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


global.devs = "2347038319680" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "Andre";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347038319680";




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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_22_11_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTE3LFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MixcbiAgICAgICAgMTcyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICA3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICA3LFxuICAgICAgICA0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4LFxuICAgICAgICA2LFxuICAgICAgICA3OCxcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpMTEJ3aUVOTmcvTExCZjIra1l2Tlg0M1BpWG90V01Bb2d2RDMvS2Rxc009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlmTEdJNmFTUVRTVm0tYlM5M2ZxZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2I2ZWM5MDUtMTllZC00MjYxLWJhMTEtMmUxNTBkOGZlNWNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgNTEsXG4gICAgICAxNyxcbiAgICAgIDExLFxuICAgICAgNTAsXG4gICAgICAxOTMsXG4gICAgICA4OCxcbiAgICAgIDY2LFxuICAgICAgMTE2LFxuICAgICAgMjAxLFxuICAgICAgODUsXG4gICAgICAxNTksXG4gICAgICAxMTIsXG4gICAgICAxNDAsXG4gICAgICAxMzEsXG4gICAgICAyOCxcbiAgICAgIDE1NixcbiAgICAgIDIyNixcbiAgICAgIDcwLFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgMjMzLFxuICAgICAgMjMxLFxuICAgICAgMjI5LFxuICAgICAgOTUsXG4gICAgICA5MSxcbiAgICAgIDEyNSxcbiAgICAgIDE5MyxcbiAgICAgIDIwLFxuICAgICAgMTkyLFxuICAgICAgNDIsXG4gICAgICAxODgsXG4gICAgICAxNjYsXG4gICAgICAxNDQsXG4gICAgICAxMzEsXG4gICAgICA1MCxcbiAgICAgIDIzMSxcbiAgICAgIDE3MSxcbiAgICAgIDE0MixcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4MVcyUjhUSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzODMxOTY4MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Qt/CdkZLwnZC08J2Rm/CdkZHwnZGf8J2RklwiLFxuICAgIFwibGlkXCI6IFwiMTE4NTAzODUyMTU2ODU6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRFQ1cmNERVBTRTFiVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVGdUFvT0IxQWVxU2pOSVRTR29iblNOa2UrL1lKRUtYT2FOUmZmaURpZ0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaHR2ckJuRXk2Z3ZBd1g2YnpURVJJa2h4YkdSamhwdml5SHR5SzNTSVp3WTZGTTgrY21KSW5wdWY0VHNyd3Qvd3B3TVcvOWdKS2lsYU1VYmJLc2lmQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXdueE1CdkdIRDJBNmZaMVNsZ2JtS1VrTzkxS2F3TjlHVjFKck1tNHFFdE9YbXJhd1dLWVZHMTlmZ2JkTG9yUWxRY2szSzBYWXR0eDhzK1NEanZkQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzODMxOTY4MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxNTUwODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQZkJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBmQi5qc29uIjogIntcImtleURhdGFcIjpcIkdTa2NRbG5rQ0VJSldYRjQxQzlzVkRsWFZ5Y1kwVm52RnV2N0dBSnFycDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTIyMzMxNjMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIzNTM3NjQ1OTNcIn0iCn0="  // PUT your SESSION_ID 


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

//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NKYlM0cEZpVDhGZG1QeTBrOHFVcFpzL0xZeVZleVNiMnlFQ25VbG1XVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhzOHJRSTM4VzBpUC9ISGRSTWE5ZDNFODFTc3h3eTg1aWxvaGRZZUF5RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtS2x6R2RtVmcveUNTUWdIM0dGNWtYQXVoSUFGNHBKZmxacDRRaWtoREdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6WDhrb3RMK2RBeldRYmFsNmo4U2tvRlpCaEhES1NZQlV1M1lWK3RjZkdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFFMWJqQU1MV2tvVFFyRVpYU0k0QjIwYmpnTEpIWG1va21ORmNHUzZNVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxrNE1hd2wyQWdmZ3RBejJ3eTI1dnc5M0lmVC9FK1BNQUFlemdxQmhnU1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUszM01BY3ltRy9GbGczeWlIKzBaemlaTXkyN1VhNWp5bVUyU0ltNWVFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEpqOW56cmMreDc0V2ZuRTRBMWlzdE5JUW1PclVEdktsa2c5c0xIM2ZrVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGSG5IUGJDNVRtQ1JualkxLytEM1o2NGc2KzRhMllxMCtYaUZTV0xwSVI1MmIzQkRDQ2F2SUFUL0E5em4vTFc2UHQrT1E0bDRhZi96cENCVFBjWEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoieHIzZTBSdURZcVRGUzh0VmI2YkxQSlBYMEZPL1krQ1I5NjZ2TXE0SzZTOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcwMTUyMTU0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwMTYxNThDMjEyMkRFMzA1RjY3ODNBMTBFQjkyRTVGMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzEyMTQwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcwMTUyMTU0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2MkQ0N0RDQTU2QURBRTMwN0IyMzJEQjg2NDI2REFFRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzEyMTQwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcwMTUyMTU0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGRjZCRTI1RjJGOTNCMENGMTQ4MjdERTk2ODZEQjE4MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzEyMTQzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcwMTUyMTU0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMDQxRUE5MTNERERFRkMwRDMwRkVDMkE4RDg5OUNCOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzEyMTQzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtOFRjMUQzMVM0R253b3RkVjZldUJRIiwicGhvbmVJZCI6IjFmMzM2ODhmLTQyZjAtNGVhZi1iODAwLWZkNDBkZDA3NThlYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRGxKNjhHWEZveEJDZSt2YUpmYVM5VUh0TEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDNncHQxRnpEc2FnKzdTd3Bjc1dJTUVYVU5FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE4NUc2VlZLIiwibWUiOnsiaWQiOiI5NDcwMTUyMTU0MjoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCflYrvuI/wn5akIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPSEppLzhERUwyQXVyVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqVTFuM3RMUkc3RGNoVjBBNllQM3dyWlZNbDdpelN0V00zTEZxWHR1QTBRPSIsImFjY291bnRTaWduYXR1cmUiOiJwdVZaOWREZ1pScVdkN3ZsdmdaK09ELzFMcnlVd01SNUlsOEhaQmFzN2tNclVUYmFDRmlIU3IxMzBjb3hDRUZaUXNHNGg5bFFvSU1PL0xkNWUvQ0NBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUGNQK1ZGbWUvSEtOMjNRVVJ5RU1rT1I0cERNd2xhaE5qRTEyeldJa2lUZWttZzFtTDFvQ3JxNWpJeXNKandvaXMrRmtuVkNMTkcvRWhOUTVzcDdLREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMTUyMTU0MjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlkxTlo5N1MwUnV3M0lWZEFPbUQ5OEsyVlRKZTRzMHJWak55eGFsN2JnTkUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI3MTIxMzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXd3In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

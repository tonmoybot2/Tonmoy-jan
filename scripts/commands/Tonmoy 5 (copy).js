const fs = require("fs");
module.exports = {
  config:{
  name: "😔",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "😢",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : 'https://i.imgur.com/TMvd7CB.mp4';
  const body = content.toLowerCase();
  if (body.indexOf("🥰")==0 || body.indexOf("😴")==0 || body.indexOf("😱")==0 || body.indexOf("🙃")==0 || body.indexOf("😐")==0 || body.indexOf("🤒")==0 || body.indexOf("🥳")==0) {
    var msg = {
        body: "মনের কথা বলি কারে, মনের মানুষ পাই না। যাকেই বলবো ভাবি, বলা তো আর হয় না..",
        attachment: fs.createReadStream(__dirname + `/Nayan/toma11.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😙", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
}

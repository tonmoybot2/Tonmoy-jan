const fs = require("fs");
module.exports = {
  config:{
  name: "Sad",
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
  if (body.indexOf("🙂")==0 || body.indexOf("😭")==0 || body.indexOf("🥺")==0 || body.indexOf("😔")==0 || body.indexOf("🥲")==0 || body.indexOf("😞")==0 || body.indexOf("😿")==0) {
    var msg = {
        body: "plz mon kharap koro na suna",
        attachment: fs.createReadStream(__dirname + `/Nayan/toma5.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😙", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
}

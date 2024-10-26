const fs = require("fs");
module.exports = {
  config:{
  name: "jan",
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
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("😌")==0 || body.indexOf("😋")==0 || body.indexOf("❤️")==0 || body.indexOf("👀")==0 || body.indexOf("😘")==0 || body.indexOf("🤭")==0 || body.indexOf("🤧")==0) {
    var msg = {
        body: "  🦋💚︵🦋 . ༎জীবনে এমন কাউকে চাই যার মধ্যে কোনো Ego,,, attitude থাকবে না,,,!!💔༎ ●●❥____শুধু দিন শেষে এসে ❛❛দাবি করবে,,🥰 ❛❛ তুমি শুধু আমার──˙⁠❥🥰.  🦋💚 ︵ 🦋 .",
        attachment: fs.createReadStream(__dirname + `/Nayan/toma6.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫂", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
}

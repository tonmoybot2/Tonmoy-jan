const fs = require("fs");
module.exports = {
  config:{
  name: "baby",
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
  if (body.indexOf("I love you")==0 || body.indexOf("i love you")==0 || body.indexOf("love you")==0 || body.indexOf("Love you")==0 || body.indexOf("আই")==0 || body.indexOf("ভালোবাসি")==0 || body.indexOf("Jan")==0) {
    var msg = {
        body: "  🦋💚︵🦋 প্রিয়🥀 তুমি স্বার্থ ছাড়া আমার খোজ নিও...!!☺️- তোমার জন্য আমার জীবন উৎসর্গ করে দিব...!🌸💚. ༎ .",
        attachment: fs.createReadStream(__dirname + `/Nayan/toma8.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫂", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
}

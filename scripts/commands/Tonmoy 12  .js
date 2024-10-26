const fs = require("fs");
module.exports = {
  config:{
  name: "cp",
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
  if (body.indexOf("😭")==0 || body.indexOf("sura")==0 || body.indexOf("Sura")==0 || body.indexOf("Allah")==0 || body.indexOf("allah")==0 || body.indexOf("শান্তি")==0 || body.indexOf("আল্লাহ")==0) {
    var msg = {
        body: "  🦋💚︵🦋 আল্লাহ আপনি তো জানেন আমার মনের অবস্থা আমার খারাপ সময় দুর করে দিন আর একটু শান্তি দিন এয় উদাসীন মনের খবর আপনি ছাড়া কেও বুজবে না ...!🌸💚. ༎ .",
        attachment: fs.createReadStream(__dirname + `/Nayan/toma12.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫂", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
}

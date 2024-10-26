const fs = require("fs");
module.exports = {
  config:{
  name: "😡",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "😡",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Hi")==0 || body.indexOf("hi")==0 || body.indexOf("hlw")==0 || body.indexOf("Hlw")==0 || body.indexOf("hello")==0 || body.indexOf("হাই")==0 || body.indexOf("Hello")==0) {
    var msg = {
        body: "হাই হ্যালো না দিয়ে সালাম দিতে শিখো প্রিয় ",
        attachment: fs.createReadStream(__dirname + `/Nayan/toma10.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💐", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
}

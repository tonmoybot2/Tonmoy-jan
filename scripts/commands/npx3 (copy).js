const fs = require("fs");
module.exports = {
  config:{
	name: "npx3",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://i.imgur.com/LkolXBv.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("love")==0 || body.indexOf("😇")==0 || body.indexOf("😍")==0 || body.indexOf("i love you")==0 || body.indexOf("I love you")==0 || body.indexOf("🧐")==0 || body.indexOf("Prem")==0 || body.indexOf("prem")==0 || body.indexOf("🐸")==0 || body.indexOf("🌹")==0) {
		var msg = {
				body: " ..._কাউকে ভালবাসলে....🥀 ....গাছের শিকড়ের মতো ভালোবাসা উচিত....🌴🤎🙂.  .----.._ফুলের মতো নয়....🌹.... .---কারণ.......🤷‍♂️🍀.  ....._ফুল তো শুধু সুবাস দিয়েই ঝরে যায়...... ........._আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ...🤗🥰𝙏𝙊𝙉𝙈𝙊𝙔 𝘾𝙃𝙊𝙒𝘿𝙐𝙍𝙔 ।",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}

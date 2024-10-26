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
  const NAYAN = ['https://i.imgur.com/XLLZLxx.mp4','https://i.imgur.com/IL25C3h.mp4','https://i.imgur.com/FRDe1fl.mp4','https://i.imgur.com/Uwyyapj.mp4','https://i.imgur.com/1dBHJu8.mp4','https://i.imgur.com/Geo4GT5.mp4','https://i.imgur.com/6Oxbqre.mp4','https://i.imgur.com/me53htk.mp4','https://i.imgur.com/O3eoAVH.mp4','https://i.imgur.com/6y2nlUI.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("Tonmoy")==0 || body.indexOf("tonmoy")==0 || body.indexOf("😍")==0 || body.indexOf("ojanta")==0 || body.indexOf("Ojanta")==0 || body.indexOf("অজান্তা")==0 || body.indexOf("@Tonmoy Chowdhury")==0 || body.indexOf("@Tonmoy Chowdhury")==0 || body.indexOf("ভাবি")==0 || body.indexOf("🌼")==0) {
		var msg = {
				body: "ভালোবাসা নিও প্রিয় 𝙏𝙊𝙉𝙈𝙊𝙔 𝘾𝙃𝙊𝙒𝘿𝙐𝙍𝙔 ।",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}

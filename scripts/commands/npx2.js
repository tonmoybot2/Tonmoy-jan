const fs = require("fs");
module.exports = {
  config:{
	name: "npx2",
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
const media = (
    await axios.get(
      'https://i.imgur.com/rVw2Ivt.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🔞")==0 || body.indexOf("Tonmoy")==0 || body.indexOf("tonmoy")==0 || body.indexOf("তন্ময়")==0 || body.indexOf("তন্ময়")==0 || body.indexOf("Tonmoy Chowdhury")==0 || body.indexOf("I love you")==0 || body.indexOf("@Tonmoy Chowdhury")==0 || body.indexOf("@tonmoy chowdhury")==0 || body.indexOf("🥀")==0) {
		var msg = {
				body: "ভালোবাসা সুন্দর। কিন্তু আমার বস 𝙏𝙊𝙉𝙈𝙊𝙔 𝘾𝙃𝙊𝙒𝘿𝙐𝙍𝙔  জন্য না 🙂",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}

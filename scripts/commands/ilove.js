const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Tonmoy")==0 || (event.body.indexOf("tonmoy")==0 || (event.body.indexOf("Tor boss ke")==0 || (event.body.indexOf("@Tonmoy Chowdhury")==0)))) {
		var msg = {
				body: "আসসালামু আলাইকুম এই যে বাবু সোনা তুমি যে আমার বসকে ডাকছো আমার বস্তু 𝙏𝙊𝙉𝙈𝙊𝙔 𝘾𝙃𝙊𝙒𝘿𝙐𝙍𝙔 কাজে বিজি অফিসে আছে তোমার যদি কিছু বলার থাকে আমার বস তন্ময়  চৌধুরীর ইনবক্সে নক করে রাখো সোনা https://www.facebook.com/tonmoy221?mibextid=ZbWKwL 😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

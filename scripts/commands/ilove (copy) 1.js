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
	if (event.body.indexOf("Jan")==0 || (event.body.indexOf("jan")==0 || (event.body.indexOf("জান")==0 || (event.body.indexOf("Babu")==0)))) {
		var msg = {
				body: "কিরে বলদা তোর মুখে কি জান প্রাণ বাবু শুনা এসব ছাড়া আর কিছু নাই :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

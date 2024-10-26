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
	if (event.body.indexOf("Kpl")==0 || (event.body.indexOf("Kopal")==0 || (event.body.indexOf("কপাল")==0 || (event.body.indexOf("kopal")==0)))) {
		var msg = {
				body: "এত কপাল কপাল করো কেন জান। আসো কাছে আসো। চুম্মা দিয়ে দিই তোমার কপালে :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

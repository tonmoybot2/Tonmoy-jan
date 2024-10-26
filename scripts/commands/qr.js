module.exports.config = {
	name: "💐",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: " ",
  prefix: false, 
  category: "user", 
  usages: "text",
  cooldowns: 5,
  dependencies: {
		"qrcode": "",
		"fs-extra": ""
  }
};

module.exports.languages = {
	"vi": {
		"missingInput": "Hãy nhập đầu vào để có thể tạo qr code"
	},
	"en": {
		"missingInput": "আসসালামু আলাইকুম আপনাকে অ্যাপ্রুভাল গ্রুপে  স্বাগতম। আমাদের একটা মেইন বক্স আছে। যেখানে অলটাইম কল চলে আড্ডা মজা মাস্তি হয় আপনি যদি ওই বক্সে যেতে আগ্রহী থাকেন অবশ্যই আমাদের যে কোন এডমিন কে ইনবক্স করবেন  👉 অকরণ লিভ নিবেন না কারণ আপনি লিভ নিলে আপনাকে আবার Bot id  এড করে দিবে আপনি যদি মেন বক্স এড হতে চান তাহলে Add  লিখে রাখুন আর যদি এই গ্রুপ থেকে বের হতে চান তাহলে out লিখে রাখুন।👈 admin person ra ase আপনাকে  out kore dibe  গ্রুপে গালাগালি করে পরিবেশ নষ্ট করবেন না আমাদের বক্সে একটা এসেস টাইম আছে সেটা হচ্ছে নয়টা থেকে সাড়ে নয়টা পর্যন্ত আপনাকে অবশ্যই কলে থাকতে হবে যদি আপনি  রুলস টা মানতে পারেন অবশ্যই সাগর রাইসুল ইসলাম রাহাত মুন্না এদেরকে ইনবক্স করেন বন্ধুত্বের ক্যানভাস ফ্যামিলি গ্রুপের পক্ষ  থেকে  আপনাকে জানাই আন্তরিক ভালোবাসা"
	}
}

module.exports.run = async function({ api, event, args, getText }) {
	const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"]
	const text = args.join(" ")
	if(!text) return api.sendMessage(getText("missingInput"),event.threadID);
	var opt = { errorCorrectionLevel: 'H', type: 'image/png', quality: 0.3, scale: 50, margin: 1, color:{ dark: '#000000', light: '#ffffff' } };
	 api.sendTypingIndicator(event.threadID, () => global.nodemodule["qrcode"].toFile(__dirname + '/cache/qr.png', text, opt, (err) => {
		if (err) return err;
		api.sendMessage({
			attachment: createReadStream(__dirname + '/cache/qr.png')
		},event.threadID, () => unlinkSync(__dirname + '/cache/qr.png'), event.messageID);
	}))
}

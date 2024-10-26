module.exports.config = {
	name: "Rules", 
  version: "1.0.0", 
  permission: 0,
  credits: "Nayan",
  description: "Random shairi video",
  prefix: " noprefix",
  category: "Media", 
  usages: "", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "fs":""
  }
};

const videoDATA = "https://5025dd35-d3b6-4e53-8f7e-b40e5488f9dc-00-2xr6zjnwy871b.global.replit.dev/video/shairi";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/nayan')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/nayan');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/nayan').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/nayan/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(videoDATA)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.data), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/nayan/${Date.now()}.mp4`;
          global.nodemodule["fs"].writeFileSync(path, Buffer.from(ress.data, 'utf-8'));
          api.sendMessage({
            body: "☆《SHAIRI》☆",
            attachment: global.nodemodule["fs"].createReadStream(path)
          }, event.threadID, () => global.nodemodule["fs"].unlinkSync(path), event.messageID);
          return;
        })
        .catch(e => {
          api.sendMessage("Something went wrong...", event.threadID, event.messageID);
          return;
        });
    })
  .catch(e => {
    api.sendMessage("আসসালামু আলাইকুম 🌺-																		BONDHOTTER ❤CANVAS🌺FAMILY🌸GROUP⋆⃝🌸࿐																						আমাদের গ্রুপে আসার জন্য আপনাকে অনেক ধন্যবাদ______!!🍒😘   আমাদের বক্সে কিছু নিয়ম আছে যা আপনাকে মেনে চলতে হবে। 																									 এটা আড্ডা বক্স, এখানে কোন বাজে বিহেভ অথবা ১৮+ কথা বলা যাবে না।																															🌸এখানে সবাই বন্ধুর মতো আড্ডা দিবা💯তোমাদের নিয়ে আমাদের এইসব বক্স সো তোমরা মিলে মিশে আড্ডা দিবা																																			🌺 আমাদের বক্সের একটা বক্সে একটা SS টাইম আছে সেটা হচ্ছে 9:00 09:30 টা পর্যন্ত আশা করব SS  টাইমে সবাই এ উপস্থিত থাকবেন 																										 🌼৩ দিনের বেশি এক্টিভ না থাকলে এডমিন  আপনাকে বক্সের রুলস অনুযায়ী রিমুভ করতে বাধ্য হবে																									༆BONDHOTTER CANVAS FAMILY GROUP ࿐																						  গ্ৰুপের পক্ষ থেকে আপনাকে  জানায় ভালবাসা  অভিরাম																																					BOT ADMIN																	🌼⎯͢⎯⃝-𝗖𝘂𝘁𝗲𝗲♡︎𝙏𝙊𝙉𝙈𝙊𝙔⎯͢⎯⃝🌼 																												ALL ADMIN🌼ABDULLAH🌼SIYAM🌼TONMOY🌼SIYAM🌼RAHAT🌼MAHIM🌼SABBIR🌼RIYA🌼 ", event.threadID, event.messageID);
    return;
  });

  return;
}
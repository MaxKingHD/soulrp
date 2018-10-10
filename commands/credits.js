const Discord = module.require("discord.js");

let ccreator = ("ャM4x♔ ﾉ znX#7130.");

let ccommunity = ("Cea mai tare comunitate!");

let chosting = ("Zap-Hosting.");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
	let embed = new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setThumbnail(bicon)
        .addField("Creator-ul bot-ului:", ccreator)
        .addField("Server Hosting", chosting)


        message.channel.send({embed: embed});
}

module.exports.help = {
	name: "credits"
}
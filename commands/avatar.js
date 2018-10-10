const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
          let embed = new Discord.RichEmbed()
        .setImage(message.author.avatarURL)
        .setColor('#275BF0')
        .addField("Numele", `${message.author}`)
          message.channel.send(embed)
}

module.exports.help = {
    name: "avatar"
}

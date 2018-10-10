const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Nu am gasit user-ul!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Acea persoane nu poate primi kick!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("User-ul dat afara", `${kUser} cu ID-ul ${kUser.id}`)
    .addField("A fost dat afara de catre", `<@${message.author.id}> cu ID-ul ${message.author.id}`)
    .addField("Comanda a fost executata in channelul", message.channel)
    .addField("Cand?", message.createdAt)
    .addField("Motiv", kReason);

    let kickChannel = message.guild.channels.find(`name`, "ban-kick");
    if(!kickChannel) return message.channel.send("Nu am putut gasii camera ban-kick.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
    name:"kick"
  }
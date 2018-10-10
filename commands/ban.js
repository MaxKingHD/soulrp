const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Nu am putut gasii user-ul!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Nu ai acces la aceasta comanda");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Acea persoana nu poate primii kick!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("User banat", `${bUser} with ID ${bUser.id}`)
    .addField("Banat de catre", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Comanda  fost executata in camera", message.channel)
    .addField("Cand?", message.createdAt)
    .addField("Motiv", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "ban-kick");
    if(!incidentchannel) return message.channel.send("Nu am putut gasii camera numita ban-kick.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
    name:"ban"
}
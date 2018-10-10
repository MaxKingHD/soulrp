const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Nu am putut gasii membrul.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report-uri")
    .setColor("#15f153")
    .addField("Membru raportat", `${rUser} cu ID: ${rUser.id}`)
    .addField("Raportat de catre", `${message.author} cu ID: ${message.author.id}`)
    .addField("In channelul", message.channel)
    .addField("Timpul", message.createdAt)
    .addField("Motiv", rreason);

    let reportschannel = message.guild.channels.find(`name`, "report-uri");
    if(!reportschannel) return message.channel.send("Nu am putut gasii camera report-uri .");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
    name: "report"
}
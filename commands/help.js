const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let helpembed = new Discord.RichEmbed()
    .setDescription("Meniul de ajutor")
    .setColor("#8300ff")
    .addField("Comenzile de membru", "Help, Serverinfo, Botinfo, Userinfo si Report. :smirk: ");

    message.channel.send(helpembed);
    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .setDescription("Comenzile de Admin")
    .setColor("#8300ff")
    .addField("Comenzile de Admin", "Kick, Warn, Ban, Say si Tempmute :smirk:  ");

    try{
        await message.author.send(modembed);
        message.react(":thumbsup:")
    }catch(e){
        message.reply("DM-ul tau este blocat. Nu iti pot trimite comenzile.");
     }
    }

}

module.exports.help = {
    name: "help"
}
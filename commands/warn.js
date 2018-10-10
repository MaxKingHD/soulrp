const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Nu ai acces bos!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Nu am putut gasii membrul.");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("A");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warn-uri")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("User-ul care a primit un avertisment", `<@${wUser.id}>`)
  .addField("Warn-ul a fost executat in camera", message.channel)
  .addField("Numarul avertismentelor", warns[wUser.id].warns)
  .addField("Motiv", reason);

  let warnchannel = message.guild.channels.find(`name`, "report-uri");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You should create that role dude.");

    let mutetime = "5m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> a primit mute temporar`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> a primit unmute.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 15){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> a primit ban.`)
  }

}

module.exports.help = {
  name: "warn"
}
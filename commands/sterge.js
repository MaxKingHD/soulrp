const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Te rog sa alegi un numar dintre 2 si 100 pentru a sterge mesajele.");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}

module.exports.help = {
    name: "sterge"
  }
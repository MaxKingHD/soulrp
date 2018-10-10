const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "@everyone")) {
		message.channel.send('Perimisii invalide.');
		return;
	}
    
    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: a.poll <question>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#ff0000") 
        .setFooter('Reactioneaza pentru a vota.')
        .setDescription(args.join(' '))
        .setTitle(`Poll-ul a fost creat de catre ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); 
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

module.exports.help = {
    name: "poll"
  }
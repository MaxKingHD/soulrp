const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let role = message.guild.roles.find(role => role.name === 'Unverified');
    if (message.channel.name !== 'verificare') return message.reply('Trebuie sa te verifici pe canalul #verificare');
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Your account has already been verified!')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Ai primit gradul de Civil cu succes.')
        return message.channel.send((verifyEmbed));
    }
}

module.exports.help = {
    name: 'verificare',
    description: 'Trebuie sa ai rolul de Civil!'
}
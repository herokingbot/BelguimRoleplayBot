const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Een titel')
    .setDescription("Zet de beschrijving")
    .setColor("#0099ff")
    .addField("Bot naam", client.user.username)

    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

// Terug sturen van het bericht
return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}
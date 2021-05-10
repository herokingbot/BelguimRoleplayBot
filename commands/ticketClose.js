const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    const categoryID = "835588177091231754"

    if(!message.member.hasPermission("KICK_MEMBER")) return message.reply("Jij kan dit niet doen");
    
    if (message.channel.parentID == categoryID) {
        message.channel.delete();
    } else {
     

     message.channel.send("Gelieve dit command te doen bij een ticket.");
     
    }

    // Create embed
    var embedCreateTicket = new discord.MessageEmbed()
    .setTitle("Ticket, " + message.channel.name)
    .setDescription("Het ticket is gemarkeerd als **compleet**.")
    .setFooter("Ticket gesloten");

    // channel voor logging 
    var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "ticket-logs");
    if (!ticketChannel) return message.reply("Kanaal bestaat niet");

    ticketChannel.send(embedCreateTicket);

}

module.exports.help = {
    name: "close"
}
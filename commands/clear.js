const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

  // !clear aantal
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming");
 
  if (!args[0]) return message.reply("Geef een aantal op dat je weg wilt halen");

  if (Number.isInteger(parseInt(args[0]))) {

      var aantal = parseInt(args[0]) + 1;

      message.channel.bulkDelete(aantal).then(() => { 

          if (args[0] == 0) {

              message.reply(`Ben je loemp ik kan toch niet 0 berichten verwijderen?`).then(msg => msg.delete({timeout: 3000}));
          
          } else if (args[0] == 1) {
          
              message.reply(`Ik heb 1 bericht verwijderd.`).then(msg => msg.delete({timeout: 3000}));
          
          } else {
          
              message.reply(`Ik heb ${args[0]} berichten verwijderd.`).then(msg => msg.delete({timeout: 3000}));
          
          }

      });

  } else {
      return message.reply("Geef een getal op.");
  }

}

module.exports.help = {
    name: "clear"
}
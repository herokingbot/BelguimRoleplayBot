const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

  try {

    var text = "**Belguim Roleplay\n\n**__Commands__\n !hallo - geeft een hallo terug. \n !info - geeft info.\n !new - maak een ticket. ";

    message.author.send(text);

    message.reply("Alle commands kan je vinden in je prive berichten");
      
  } catch (error) {
      message.reply("Er is iets fout gelopen");
  }

}

module.exports.help = {
    name: "help"
}
const Discord = require('discord.js');


exports.run = function(client, message) {

message.channel.send("https://discordapp.com/oauth2/authorize?client_id=481195317287452693&scope=bot&permissions=2146958847")

};

exports.conf = {
  enabled: true,
  GuildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botumuzu sunucunuza eklemeniz için gerekli davet linki.',
  usage: 'davet'
};

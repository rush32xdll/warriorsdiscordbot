const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const yazi = args.slice(0).join(' ');

  if (yazi.length < 1) {return message.reply("Yazmam için bir yazi yaz lütfen")
}else {
   message.channel.send(""+ yazi +"")
}



};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yaz'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Üst yetkililer duyuru yapabilir.',
  usage: 'duyuru'
};

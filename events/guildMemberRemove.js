module.exports = member => {
  let guild = member.guild;
  member.send('Gitmene üzüldük dostum.');
  guild.defaultChannel.sendMessage(`${member.user.username} aramızdan ayrıldı :(.)`);
};

const Discord = require('discord.js');
exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor(3447003)
  .setDescription(`Owner: ${message.guild.owner} (${message.guild.owner.id})`)
  .addField('Member Count', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bots)`, true)
  .addField('Location', message.guild.region, true)
  .addField('Created', message.guild.createdAt.toLocaleString(), true)
  .addField('Roles', message.guild.roles.size, true)
  .setTimestamp()
  .setFooter(client.user.username, client.user.avatarURL);
  if(message.guild.afkChannelID !== null) {
    embed.addField('AFK Timeout', `${message.guild.afkTimeout / 60} minutes`, true)
   .addField('AFK Channel', `${client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID})`, true);
  }
  return message.channel.sendEmbed(embed);
};

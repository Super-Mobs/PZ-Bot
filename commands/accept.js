const Discord = require('discord.js');
exports.run = (client, message) => {
  let accepted = message.guild.roles.find('name', '✓');
  let member = message.member;
  let modlog = client.channels.find('name', 'logs');
  let user = message.author;
  member.addRole(accepted).catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Verified')
  .addField('User:', `${user.username}#${user.discriminator}`)
  client.channels.get(modlog.id).send({embed}).catch(console.error);
};

const Discord = require('discord.js');
exports.run = (client, message) => {
  let user = message.mentions.users.first();
  let avatar = user.avatarURL;
  if (message.mentions.users.size < 1) return message.channel.sendMessage('Error, no yser mentioned..');
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setThumbnail(avatar)
  .addField('Name:', `${user.username}`)
  .addField('ID:', `${user.id}`)
  .addField('Created On:', `${user.createdAt}`)
  return message.channel.sendEmbed(embed);
};

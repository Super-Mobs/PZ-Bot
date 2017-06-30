const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'logs');
  let modRole = message.guild.roles.find("name", "Staff");
  if (!message.member.roles.has(modRole.id)) return message.reply(`You do not have permission to use this command! You must be Moderator+`);
  if (!modlog) return message.reply('I cannot find a logs channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action: ', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason:', reason);
  client.channels.get(modlog.id).sendEmbed(embed);
  return user.sendEmbed(embed);
};

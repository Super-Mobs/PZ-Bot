const Discord = require('discord.js');
exports.run = (client, message) => {
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
  let modRole = message.guild.roles.find("name", "Staff");
  if (!message.member.roles.has(modRole.id)) return message.reply(`You do not have permission to use this command! You must be Moderator+`);
  if (!modlog) return message.reply('I cannot find a logs channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to unmute them.').catch(console.error);
  if(!message.member.roles.has(muteRole)) return message.reply('This user is not muted.')
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'UnMute')
    .addField('User:', `${user.username}#${user.discriminator}`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`);
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);
  message.guild.member(user).removeRole(muteRole)
  client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
};

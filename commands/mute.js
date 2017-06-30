const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
  let modRole = message.guild.roles.find("name", "Staff");
  if (!message.member.roles.has(modRole.id)) return message.reply(`You do not have permission to use this command! You must be Moderator+`);
  if (!modlog) return message.reply('I cannot find a logs channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Mute')
    .addField('User:', `${user.username}#${user.discriminator}`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`);
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);
  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      message.channel.sendMessage('This user has already been muted.')
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }
};

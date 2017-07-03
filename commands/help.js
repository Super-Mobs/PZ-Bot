const Discord = require('discord.js');
exports.run = (client, message) => {
  let user = message.author
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTitle('**Command List**')
  .addField('Help', `Shows this message`)
  .addField('Ping', `Pong`)
  .addField('pinfo', `Shows information. Ussage: !pinfo (mention user)`)
  .addField('Mute', `Ussage: !mute (mention user)(reason)`)
  .addField('Warn', `Warns a user. Ussage: !warn (user)(reason)`)
  .addField('Accept', `Allows you into all the chat channels.`)
  .addField('Project', `Makes a project request. Ussage: !project (name) (dimensions) (pictures)`);
  return user.send({embed});
};

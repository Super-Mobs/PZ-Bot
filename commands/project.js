const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let name = args[0];
  let dimensions = args[1];
  let picture = args[2];
  let author = message.author;
  let projectlist = client.channels.find('name', 'project-request');
  if (name.length < 1) return message.channel.send('!project ussage: !project (project name) (project dimensions) (project pictures)');
  if (dimensions.length < 1) return message.channel.send('!project ussage: !project (project name) (project dimensions) (project pictures)');
  if (picture.length < 1) return message.channel.send('!project ussage: !project (project name) (project dimensions) (project pictures)');
  message.channel.send(`This is what you will be submitting: ${name} with the dimensions of ${dimensions} and pictures ${picture} Thank you for submitting your project for Project Zero :D`)
  const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setTitle('Project Request')
        .addField('Project Name:', `${name}`)
        .addField('Dimensions:', `${dimensions}`)
        .addField('Pictures:', `${picture}`)
        .addField('User:', `${author}`);
  client.channels.get(projectlist.id).send({embed});
};

exports.run = (client, message, memeber) => {
  let guild = message.guild;
  guild.defaultChannel.sendMessage(`Welcome to Project Zero!`);
};

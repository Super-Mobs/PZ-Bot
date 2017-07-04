exports.run = (client, message, memeber) => {
  let guild = message.guild;
  guild.defaultChannel.sendMessage(`Welcome ${memeber.user.username} to Project Zero!`);
};

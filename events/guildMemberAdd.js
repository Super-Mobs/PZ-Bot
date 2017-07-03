exports.run = (client, message, memeber) => {
  let guild = memeber.guild;
  guild.defaultChannel.sendMessage(`Welcome ${memeber.user.username} to Project Zero!`);
};

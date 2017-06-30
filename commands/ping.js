exports.run = (client, message) => {
  message.channel.sendMessage('Ping?')
    .then(msg => {
      msg.edit(`Pong! Took: ${client.ping}ms `);
    });
};

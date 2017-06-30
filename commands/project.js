exports.run = (client, message) => {
message.channel.sendMessage('What tag would you like to see? This will await will be cancelled in 30 seconds. It will finish when you provide a message that goes through the filter the first time.')
.then(() => {
  message.channel.awaitMessages(response => response.content === 'test', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      message.channel.send('There was no collected message that passed the filter within the time limit!');
    });
});
};

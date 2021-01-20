const pingbot = require('./pingbot.js');
const eightBall = require('./8ball.js');

const guildID = '801422578471403551';
const channelID = '801422579235684374';

const commands = {
  pingbot,
  '8ball': eightBall
};

module.exports = async (msg) => {
  console.log(msg);
  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    const args = msg.content.split(' ');
    if (args.length == 0 || args[0].charAt(0) !== '!') return;
    const command = args.shift().substr(1);
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const commandHandler = require('./commands');

client.once('ready', () => {
    console.log('beep boop!');
});
client.on('message', commandHandler);

client.login(process.env.BOT_TOKEN);

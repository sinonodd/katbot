const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.once('ready', () => {
    console.log('whatever you saying');
});
client.login(process.env.BOT_TOKEN);

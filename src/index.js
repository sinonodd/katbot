const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const guildID = '801422578471403551';
const channelID = '801422579235684374';
client.once('ready', () => {
    console.log('beep boop!');
});
client.on('message', async (msg) => {
    if (msg.guild.id === guildID && msg.channel.id === channelID) {
        if (msg.content.toLowerCase() === 'bot') {
            await msg.reply('Yes master!');
            console.log('sent');
        }
    }
});
client.login(process.env.BOT_TOKEN);

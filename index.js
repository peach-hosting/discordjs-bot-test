const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('App online'); // This line is important, it tells the panel your app is online
});

client.on('message', msg => {
  if (msg.content === 'p!test') {
    msg.reply('hello i am alive');
  }
});

client.login(process.env.token); // see .env(.example)
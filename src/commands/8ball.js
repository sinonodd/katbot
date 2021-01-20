const eightBalls = [
    'Maybe, i mean who knows ^^',
    'am not pretty sure about that, but you may wanna give it a try',
    'You are cool, stop saying that about your self',
    'To be honest, me too...',
    'That is not nice buddy',
    'I cannot think stright when am hungry',
    'It is not that obvious for you?',
    'I need a botfiend..'
];  

module.exports = async (msg, args) => {
  if (!args.length) return;
  const i = Math.floor(Math.random() * eightBall.length);
  const reply = eightBall[i];
  await msg.channel.send(`${msg.author} ${reply}`);
};

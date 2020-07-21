const fs = require('fs');
const Discord = require('discord.js');
const connection = require('./db/connection');
const { prefix } = require('./config.json');
const client = new Discord.Client();
const Member = require('./models/Members');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}	
const cooldowns = new Discord.Collection();

client.on('ready', () => {
	console.log(`${client.user.username} is online!`);
	client.user.setActivity(`${prefix}help`, {
	 	 type: 'PLAYING'
	});
})


client.on('message', message =>{
	// Count msgs
	Member.findOne({id: message.member.user.id}).exec()
	.then((result) => {
		if (message.author.bot) {
			return;
		}
		result.msgs++;
		result.save();
	})
	.catch(error => console.log(error));

    if (!message.guild) return;
   
	// checking if command is used
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
	
	// Cooldowns
	if (!cooldowns.has(command.name)) {
	cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return;
		}
	}
	
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    // dynamic command handling
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}

});

// User joining the server
client.on('guildMemberAdd', member => {
	// Sending a greeting msg
	const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome'); // change this to the channel name you want to send the greeting to
	if (!channel) return;
	channel.send(`Welcome to Hyper's Hub, ${member}!`);

	// Add user to the database upon joining the server
	Member.findOne({id: member.user.id}).exec()
	.then((result) => {
		console.log()
		if (result == undefined || result == null) {
			if (member.user.bot) {
				return;
			}
			const newMember = new Member({id: member.user.id, name: member.user.username, msgs: 0});
			newMember.save()
			.then(() => {})
			.catch((error) => console.log(error));
		}
	})
});

client.login(process.env.BOT_TOKEN);

connection.once('open', ()=>{
	console.log('connected to db');
});
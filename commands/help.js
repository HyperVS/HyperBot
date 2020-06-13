const { prefix, colorOne } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	aliases: [],
	cooldown: 10,
	args: false,
	private: false,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
		
			data.push(commands.filter(function(command){
				if (!command.private){
					return command
				}}).map(command => command.name).join('\n'));
			
			const embed = new MessageEmbed();
			embed.setTitle('Here\'s a list of all available commands:');
			embed.setColor(colorOne);
			embed.setDescription(data);
				
			return message.channel.send(embed)
		}
	}
};
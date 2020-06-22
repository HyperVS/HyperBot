const { colorOne } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'schedule',
	aliases: [],
	cooldown: 0,
	args: false,
    private: false,
	execute(message, args){ 
        const embed = new MessageEmbed();
		embed.setTitle('Here\'s a link to the team schedule:');
		embed.setColor(colorOne);
        embed.addField('https://docs.google.com/document/d/1dw_rNoB4zeA0oA7ogxclhxlbbz99kcSmnbbG9m4Bo0w/edit?usp=sharing');
        return message.channel.send(embed);
    }
}
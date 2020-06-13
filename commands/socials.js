const { twitch, youtube, spotify, twitter, reddit, discord, colorOne } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'socials',
	aliases: [],
	cooldown: 0,
	args: false,
    private: false,
	execute(message, args){
        const embed = new MessageEmbed();
		embed.setTitle('Here\'s a list of all of Hyper\'s socials:');
		embed.setColor(colorOne);
        embed.addField("Twitch", twitch);
        embed.addField("Twitter", twitter);
        embed.addField("Youtube", youtube);
        embed.addField("Spotify", spotify);
        embed.addField("Reddit", reddit);
        embed.addField("Discord", discord);
        return message.channel.send(embed);
    }
}
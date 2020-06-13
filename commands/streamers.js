const { bloopy, cowboys, fourzone, gwacieee, rightize, shwn, suave, twisted, lawless, twitch, colorOne, logan } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'streamers',
	aliases: [],
	cooldown: 0,
	args: false,
    private: false,
	execute(message, args){

        const embed = new MessageEmbed();
		embed.setTitle('Here\'s a list of all streamers in the discord:');
        embed.setColor(colorOne);
        embed.addField("BloopLoop", bloopy);
        embed.addField("Cowboys_0988", cowboys);
        embed.addField("FourZone", fourzone);
        embed.addField("Gwacieee", gwacieee);
        embed.addField("HypervTV", twitch);
        embed.addField("Lawlessbeats", lawless);
        embed.addField("LogiOneKenobi", logan);
        embed.addField("Rightize", rightize);
        embed.addField("Shwn", shwn);
        embed.addField("SuaveHabibi", suave);
        embed.addField("Twisted", twisted);
        return message.channel.send(embed);
    }
}
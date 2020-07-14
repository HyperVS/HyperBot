const { bloopy, cowboys, fourzone, gwacieee, rightize, shwn, suave, twisted, lawless, twitch, colorOne, logan } = require('../config.json');
const { MessageEmbed } = require('discord.js');
const streamers = [
    {name: "bloopy", link: "https://www.twitch.tv/blooploop"},
	{name:"fourzone", link: "https://www.twitch.tv/fourzone3"},
	{name:"gwacieee", link: "https://www.twitch.tv/gwacieee"},
	{name:"rightize", link: "https://www.twitch.tv/rightize"},
	{name:"shwn", link: "https://www.twitch.tv/shwn_tv"},
	{name:"suave", link: "https://www.twitch.tv/suavehabibi"},
	{name:"twisted", link: "https://www.twitch.tv/twistedtweak01"},
	{name:"lawless", link: "https://www.twitch.tv/lawlessbeats"},
	{name:"logan", link: "https://www.twitch.tv/logionekenobi"},
	{name:"cowboys", link: "https://www.twitch.tv/cowboys_0988"}
];

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
        streamers.forEach((streamer) => {
            embed.addField(streamer.name, streamer.link)
        });

        return message.channel.send(embed);
    }
}
const { bloopy, cowboys, fourzone, gwacieee, rightize, shwn, suave, twisted, lawless, twitch, colorOne, logan } = require('../config.json');
const { MessageEmbed } = require('discord.js');
const streamers = [
    {name: "Bloopy", link: "https://www.twitch.tv/blooploop"},
	{name:"FourZone", link: "https://www.twitch.tv/fourzone3"},
	{name:"Gwacieee", link: "https://www.twitch.tv/gwacieee"},
	{name: "Maiku", link: "https://www.twitch.tv/maikulol"},
	{name:"Rightize", link: "https://www.twitch.tv/rightize"},
	{name:"Shwn", link: "https://www.twitch.tv/shwn_tv"},
	{name:"Suave", link: "https://www.twitch.tv/suavehabibi"},
	{name:"Twisted", link: "https://www.twitch.tv/twistedtweak01"},
	{name:"Lawless", link: "https://www.twitch.tv/lawlessbeats"},
	{name:"Logan", link: "https://www.twitch.tv/logionekenobi"},
	{name:"Cowboys", link: "https://www.twitch.tv/cowboys_0988"}
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
const Streamer = require('../models/Streamer.js'); 
const {colorOne} = require('../config.json');
const { MessageEmbed } = require('discord.js');

let streamers = []

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

        Streamer.find().exec()
        .then(results =>  {
            streamers = [...results];
            streamers.forEach(streamer => {
                embed.addField(streamer.name, streamer.link);
            })
    
            console.log(streamers);
            return message.channel.send(embed);
        })
        .catch((error) => console.log(error));

    }
}
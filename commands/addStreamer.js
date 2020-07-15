const {colorOne} = require('../config.json');
const discord = require('discord.js');

const Streamer = require('../models/Streamer.js');

module.exports = {
	name: 'addstreamer',
	aliases: [],
	cooldown: 0,
	args: true,
    private: true,
	execute(message, args){

		if (!message.member.hasPermission('KICK_MEMBERS')) {
			return message.channel.send('Plebs can\'t use this command, dumbass')
		}

		if (args.length < 2) {
			return message.channel.send('This command takes two arguments! (!addstreamer "name" "link")');
		}

		const newStreamer = new Streamer({name: args[0], link: args[1]});
		console.log(newStreamer)
		newStreamer.save()
		.then((results) => {
		    console.log(results)
		})
		.catch((error) => console.log(error));
        return message.channel.send(`Streamer ${args[0]} (${args[1]}) added successfully!`);
    }
}
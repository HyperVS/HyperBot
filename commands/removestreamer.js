const Streamer = require('../models/Streamer.js');

module.exports = {
	name: 'removestreamer',
	aliases: [],
	cooldown: 0,
	args: true,
    private: true,
	execute(message, args){

		if (!message.member.hasPermission('KICK_MEMBERS')) {
			return message.channel.send('Plebs can\'t use this command, dumbass');
		}

		if (args.length < 1) {
			return message.channel.send('This command takes one argument! (!removeStreamer "link")');
        }

        Streamer.findOneAndDelete({link: args[0]}).exec()
        .then((results) => {
            return message.channel.send(`Streamer ${results.name} (${results.link}) removed successfully!`);
        })
        .catch((error) => error);
    }
}
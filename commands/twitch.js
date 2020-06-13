const { twitch } = require('../config.json');

module.exports = {
	name: 'twitch',
	aliases: [],
	cooldown: 0,
	args: false,
	private: false,
	execute(message, args){
        return message.channel.send(twitch);
    }
}
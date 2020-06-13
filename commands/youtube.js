const { youtube } = require('../config.json');

module.exports = {
	name: 'youtube',
	aliases: [],
	cooldown: 0,
	args: false,
	private: false,
	execute(message, args){
        return message.channel.send(youtube);
    }
}
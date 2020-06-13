const { twitter } = require('../config.json');

module.exports = {
	name: 'twitter',
	aliases: [],
	cooldown: 0,
	args: false,
	private: false,
	execute(message, args){
        return message.channel.send(twitter);
    }
}
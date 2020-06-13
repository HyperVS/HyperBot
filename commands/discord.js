const { discord } = require('../config.json');

module.exports = {
	name: 'discord',
	aliases: [],
	cooldown: 0,
	args: false,
    private: false,
	execute(message, args){
        return message.channel.send(discord);
    }
}
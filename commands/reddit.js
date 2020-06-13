const { reddit } = require('../config.json');

module.exports = {
	name: 'reddit',
	aliases: [],
	cooldown: 0,
	args: false,
    private: false,
	execute(message, args){
        return message.channel.send(reddit);
    }
}
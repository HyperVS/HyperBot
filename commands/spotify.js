const { spotify } = require('../config.json');

module.exports = {
	name: 'spotify',
	aliases: [],
	cooldown: 0,
	args: false,
    private: false,
	execute(message, args){
        return message.channel.send(spotify);
    }
}
const Member = require('../models/Members')

module.exports = {
	name: 'msgs',
	aliases: [],
	cooldown: 0,
	args: true,
    private: false,
	execute(message, args){
        const msgs = 0;
        Member.findOne({id: message.client.user.id}).exec()
        .then((result) =>  message.channel.send(`You've sent ${result.msgs} msgs in this server`));
    }
}
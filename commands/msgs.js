const Member = require('../models/Members')

module.exports = {
	name: 'msgs',
	aliases: [],
	cooldown: 0,
	args: true,
    private: false,
	execute(message, args){
        let msgs = 0;
        Member.findOne({id: message.member.user.id}).exec()
        .then((result) =>  {msgs = result.msgs})
        .then(() =>  message.channel.send(`You've sent ${msgs} msgs in this server`))
    }
}
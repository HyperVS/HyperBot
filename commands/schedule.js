module.exports = {
	name: 'schedule',
	aliases: [],
	cooldown: 0,
	args: false,
    private: false,
	execute(message, args){ 
        return message.channel.send('https://docs.google.com/document/d/1dw_rNoB4zeA0oA7ogxclhxlbbz99kcSmnbbG9m4Bo0w/edit?usp=sharing');
    }
}
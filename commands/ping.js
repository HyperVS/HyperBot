module.exports = {
	name: 'ping',
	aliases: [],
	cooldown: 0,
	args: false,
    private: false,
	execute(message, args){
        const ping = Date.now() - message.createdTimestamp;
        return message.channel.send("The bot's ping to discord is `" + `${ping}` + " ms`");
    }
}
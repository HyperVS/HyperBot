module.exports = {
	name: 'ping',
	aliases: [],
	cooldown: 0,
	args: true,
    private: true,
	execute(message, args){
        const ping = Date.now() - message.createdTimestamp;
        return message.channel.send("The bot's ping to discord is `" + `${ping}` + " ms`");
    }
}
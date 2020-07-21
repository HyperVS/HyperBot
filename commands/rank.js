const Member = require('../models/Members')
const {colorOne} = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'rank',
	aliases: [],
	cooldown: 0,
	args: false,
    private: false,
	execute(message, args){
        const embed = new MessageEmbed();
		embed.setTitle('Here\'s the rank of messages in the discord:');
        embed.setColor(colorOne);

        Member.find().sort({msgs: 'desc'}).exec()
        .then((results) => {
            let isUserTop = false;
            for (let i = 0; i < 10; ++i) {
                embed.addField(`(${i + 1}) ` + results[i].name, results[i].msgs);
                if (message.member.user.id == results[i].id) {
                    isUserTop = true;
                }
            }

            if (!isUserTop) {
                Member.findOne({id: message.member.user.id}).exec()
                .then((result) => {
                    embed.addField(message.member.user.username, result.msgs)
                    return message.channel.send(embed);
                })
                .catch((error) => console.log(error))
            }

            else {
                return message.channel.send(embed);
            }
        })
    }
}
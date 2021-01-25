const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-akago')
const Colors = require('../../Colors.json')

module.exports = class EvalCommand extends Command {
    constructor() {
        super('eval', {
            description: 'Owner only command.',
            category: '| Owner |',
        }, {
            usage: `..`
        });
    }

    async execute(message, args) {

        const { inspect } = require('util')

        const command = args.join(" ")

        if (!command) return msg(`You need to specify something to evel`)

        try {
            const evaled = eval(command);

            var embed = new MessageEmbed()
                .setColor(Colors.other.darkblue)
                .setTitle(`Evaluated`)
                .addFields({
                    name: `To Eval`,
                    value: `\`\`\`${command}\`\`\``
                }, {
                    name: `Evaled`,
                    value: `\`\`\`js\n${inspect(evaled, { depth: 0 })}\`\`\``
                }, {
                    name: `Type Of`,
                    value: `\`\`\`${typeof (evaled)}\`\`\``
                })

            msg(embed)
        } catch (error) {
            var embed = new MessageEmbed()
                .setColor(Colors.other.red)
                .setTitle(`Error`)
                .addField(`Error: `, `${error}`)

            msg(embed)
        }
        function msg(msg) {
            return message.channel.send(msg)
        }
    }
};
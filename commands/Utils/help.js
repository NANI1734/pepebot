const { Command, commandHandler } = require('discord.js-akago');
const { MessageEmbed } = require('discord.js');
const Colors = require('../../Colors.json')
module.exports = class HelpCommand extends Command {
    constructor() {
        super('help', {
            description: 'Display a list of all commands I have.',
            aliases: ['commands', "h", "c"],
            category: '| Utils |',
            guildOnly: false
        }, {
            usage: `help // *help [command_name]`
        });
    }
    async execute(message, args) {
        const commandName = args[0]
        const { commands, util } = this.client;
        const embed = new MessageEmbed().setColor(Colors.SkyBlue);
        const command = commands.get(commandName);
        if (command) {
            embed.setTitle(`\`${command.name}\``);
            embed.addField('Description', command.description);
            if (command.aliases.length) {
                embed.addField('Aliases', command.aliases.map(a => `\`${a}\``).join(' '));
            }
            if (command.opts.usage) {
                embed.addField('Usage', `*${command.opts.usage}`)
            }

        }
        else {
            const categories = util.removeDuplicates(commands.map(c => c.category));

            embed.setDescription('For additional info on a command, use `*help <command>`');
            embed.setFooter(` There are currently ${commands.size} commands`)
            for (const category of categories) {

                const filteredCommands = commands.filter(c => c.category == category && c.nsfw === false);
                if (category === '| NSFW |') continue;

                embed.addFields([{
                    name: category || 'Misc',
                    value: filteredCommands.map(c => `\`*${c.name}\``).join('  , '),
                }]);
            }
            for (const category of categories) {
                const filteredall = commands.filter(c => c.category === '| NSFW |')
                if (category !== '| NSFW |' || category === '| Owner |') continue;
                else {
                    if (message.guild.id === '796818619027685407') {
                        return;
                    }
                    else {
                        if (message.channel.nsfw) {
                            embed.addField(`| NSFW |`, filteredall.map(c => `\`*${c.name}\``).join(' ,'));
                        }
                    }
                }
            }
        }

        msg(embed);

        function msg(msg) {
            return message.channel.send(msg)
        }
    }
};
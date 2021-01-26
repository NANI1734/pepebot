const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-akago')
const Colors = require('../../Colors.json')

module.exports = class SuggestionCommand extends Command {
    constructor() {
        super('suggestion', {
            description: 'Suggest something for the bot!',
            category: '| Utils |',
        }, {
            usage: `suggestion <suggestion>`
        });
    }

    async execute(message, args) {
        
        
        function msg(msg) {
            return message.channel.send(msg)
        }
    }
};
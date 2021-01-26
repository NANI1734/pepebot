const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-akago')
const Colors = require('../../Colors.json')

module.exports = class NAMECommand extends Command {
    constructor() {
        super('8ball', {
            description: 'this command give you 8ball',
            category: '| Fun |',
        }, {
            usage: `8ball // ;8ball [question]`
        });
    }

    async execute(message, args) {
        const answers = [
            'It is certain.',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes - definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy, try again.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            'Don\'t count on it.',
            'My reply is no.',
            'My sources say no.',
            'Outlook not so good.',
            'Very doubtful.',
            'I don\'t know you',
            'stfu'
        ];



        const question = args.join(' ');
        if (!question) return msg(`Provide a question to ask`)
        const embed = new MessageEmbed()
            .setTitle('🎱  The Magic 8-Ball  🎱')
            .addField('Question', question)
            .addField('Answer', `${answers[Math.floor(Math.random() * answers.length)]}`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(Colors.black)
        message.channel.send(embed);
    }
};

function msg(msg) {
    return message.channel.send(msg)
}

;

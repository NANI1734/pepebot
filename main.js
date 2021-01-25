const config = require('./config.json')
const { AkagoClient, CommandHandler, ListenerHandler, InhibitorHandler } = require('discord.js-akago');
const mongoose = require('mongoose');
const mongo = require('./Utils/mongoose')
class myClient extends AkagoClient {
    constructor() {
        super({
            ownerID: ['319749595217395714', '775970684588523570'],
            token: config.token,
        }, {
            disableMentions: 'everyone',
        });
        this.commandHandler = new CommandHandler(this, {
            commandDirectory: './commands',
            prefix: 'pepe',
            defaultCooldown: 4,
            allowMentionPrefix: true,
            blockBots: true,
            blockClient: true,
            ignorePermissions: ['319749595217395714', '775970684588523570'],
            ignoreCooldown: ['319749595217395714', '775970684588523570']
        });
        this.listenerHandler = new ListenerHandler(this, {
            listenerDirectory: './events'
        });
        this.inhibitorHandler = new InhibitorHandler(this, {
            inhibitorDirectory: './inhibitors',
        });
    }
    start() {
        this.build();
    }

}

mongo(mongoose)

const client = new myClient();
client.start();

//          ______
//          Format
/*          ------
const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-akago')
const Colors = require('../../Colors.json')

module.exports = class NAMECommand extends Command {
    constructor() {
        super('NAME', {
            description: 'DESCRIPTION',
            category: 'CATEGORY',
        }, {
            usage: `USAGE`
        });
    }

    async execute(message, args) {
        //Code
        
        function msg(msg) {
            return message.channel.send(msg)
        }
    }
};
*/
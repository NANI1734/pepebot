const config = require('./config.json')
const { AkagoClient, CommandHandler, ListenerHandler, InhibitorHandler } = require('discord.js-akago');
const mongoose = require('mongoose');
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

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    poolSize: 5,
    connectTimeoutMS: 10000,
    family: 4
};

mongoose.connect('mongodb+srv://Taken:9idBIifeEfCPTQ5S@bot.gmuqc.mongodb.net/Taken?retryWrites=true&w=majority', dbOptions);
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
    console.log('Mongoose has successfully connected!');
});

mongoose.connection.on('err', err => {
    console.error(`Mongoose connection error: \n${err.stack}`);
});

mongoose.connection.on('disconnected', () => {
    console.warn('Mongoose connection lost');
});

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
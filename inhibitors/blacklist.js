const { Inhibitor } = require('discord.js-akago');

module.exports = class BlackListInhibitor extends Inhibitor {
    constructor() {
        super('blacklist');
    }

    execute(message) {
        const blacklists = ['']; 
        if (blacklists.includes(message.author.id)){
            return message.channel.send(`You are blacklisted From using \`Alphabot's\` commands`)
        } 
        return blacklists.includes(message.author.id)
    }
};
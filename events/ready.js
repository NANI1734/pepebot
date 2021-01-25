
const { Listener } = require('discord.js-akago');
const mongoose = require('mongoose')

module.exports = class ReadyListener extends Listener {
    constructor() {
        super('ready', {
        });
    }

    async execute(message) {
        console.log('Let\'s get this bread!');
        
        this.client.user.setPresence({
            status: 'active',
            activity: {
                name: '*help',
                type: 1,
            }
        });
        }
    }


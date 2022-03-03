const BaseCommand = require("../../BaseClasses/BaseCommand");
const Discord = require('discord.js');

module.exports = class ping extends BaseCommand {
    constructor() {
        super({
            aliases: ["purge", "clear"],
            description: "Purges the chats",
            name: "purge",
            permissions: ["MANAGE_MESSAGES"],
            usage: "purge"
        });
    }

    async run(client, message, args) {


        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Sorry, You can't do that!")
        }
        if(!args[0]) {
            return message.channel.send("You need to state how many messages you want to get rid of!")
        } else {
            message.channel.bulkDelete(args[0]);
            message.channel.send(`Cleared ${args[0]} Messages`).then(msg => msg.delete(5000));
        }        
    }
}
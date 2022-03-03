const Discord = require('discord.js');
const config = require("../../config.json");
const BaseCommand = require("../../BaseClasses/BaseCommand");

module.exports = class ping extends BaseCommand {
    constructor() {
        super({
            aliases: ["help"],
            description: "Shows all The Commands The Bot Has.",
            name: "help",
            permissions: ["SEND_MESSAGES"],
            usage: "help"
        });
    }

    async run(client, message, args) {
        var embed = new Discord.RichEmbed()
        .setTitle('Help Window')
        .addField('.guyble', 'Sends a quote from the Desta Guyble')
        .addField('.userinfo', 'Displays information about your account')
        .addField('.purge', 'Deletes a set number of messages.')
        .setColor(0xB3F3F0)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`DestaBot ${version}`, client.user.avatarURL);
        message.channel.send(embed);
    }
}
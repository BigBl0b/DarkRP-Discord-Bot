const Discord = require('discord.js');
const config = require("../../config.json");
const BaseCommand = require("../../BaseClasses/BaseCommand");

module.exports = class ping extends BaseCommand {
    constructor() {
        super({
            aliases: ["userInfo"],
            description: "States the User Information",
            name: "userinfo",
            permissions: ["SEND_MESSAGES"],
            usage: "userinfo"
        });
    }

    async run(client, message, args) {
        const { guild, channel } = message;

        const version = config.version;
        const user = message.mentions.users.first() || message.member.user;

        var embed = new Discord.RichEmbed()
        .setTitle('User Info')
        .addField('Username', message.author.tag)
        .addField('Account Created At', new Date(user.createdTimestamp).toLocaleDateString())
        .addField('Server', message.guild.name)
        .setColor(0xB3F3F0)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`DestaBot ${version}`, client.user.avatarURL);
        message.channel.send(embed);
    }
}
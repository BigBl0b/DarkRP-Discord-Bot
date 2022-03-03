const BaseCommand = require("../../BaseClasses/BaseCommand");
const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = class ping extends BaseCommand {
    constructor() {
        super({
            aliases: ["report"],
            description: "Reports a user in the chat",
            name: "report",
            permissions: ["SEND_MESSAGES"],
            usage: "report"
        });
    }

    async run(client, message, args) {
        const version = config.version;
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reason = args.join(" ").slice(22);
        let reportsChannel = message.guild.channels.find(`name`, "reports");

        if(!rUser) {
            return message.channel.send("I'm Sorry, I couldn't find that person. Please Try again");
        }
        if(!reason) {
            return message.channel.send("You need to include a reason for your report!");
        }

        let reportedEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor(0xB3F3F0)
        .addField("Reported User:", `<@${rUser}>`, true)
        .addField("Reported By:", `<@${message.author}>`, true)
        .addField("Channel:", message.channel, true)
        .addField("Time", message.createdAt, true)
        .addField("Reason", reason)
        .setFooter(`DestaBot ${version}`, client.user.avatarURL);

        if(!reportsChannel) {
            return message.channel.send("Couldn't find the channel");
        }

        message.delete().catch(O_o => {});
        reportsChannel.send(reportedEmbed)


    }
}
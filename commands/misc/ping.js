const BaseCommand = require("../../BaseClasses/BaseCommand");

module.exports = class ping extends BaseCommand {
    constructor() {
        super({
            aliases: ["pong"],
            description: "Test Command for the Bot",
            name: "ping",
            permissions: ["SEND_MESSAGES"],
            usage: "ping"
        });
    }

    async run(client, message, args) {
        message.channel.send("Pong!");
    }
}
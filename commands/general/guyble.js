const Discord = require("discord.js");
const config = require("../../config.json");
const BaseCommand = require("../../BaseClasses/BaseCommand");

module.exports = class ping extends BaseCommand {
    constructor() {
        super({
            aliases: ["guyble"],
            description: "Reads the Guyble",
            name: "guyble",
            permissions: ["SEND_MESSAGES"],
            usage: "guyble"
        });
    }

    async run(client, message, args) {

        const Guyble = [
            'If he has messaged you more than once, its okay to reply with nudes.',
            'Thou shall take Desta into thy heart and love thyself in the name of the Son, Desta and the Holy Spirit.',
            'In the beginning Desta created the assignment 1. And it was without form; and void; and darkness was upon the face of the deep. And Desta saw the light, and it was good.',
            'If lesbians can make it work, I can make it work to.',
            'Desta carries his cross to the place of crucifixion, helped by Simon of Cryene. Desta is stripped and nailed to the cross.',
            'All Girls are the same',
            'The word No, does special things to my body.',
            'If your bro is acting like a hoe, its okay to go on a fun run with Desta.',
        ];
        const output = Guyble[Math.floor(Math.random() * Guyble.length)];
        var Title1 = 'placeholder';

        if(output === 'If he has messaged you more than once, its okay to reply with nudes.') {
            Title1 = "Desta 5:13";
        } else if(output === 'Thou shall take Desta into thy heart and love thyself in the name of the Son, Desta and the Holy Spirit.') {
            Title1 = 'Desta 7:23';
        } else if(output === 'All Girls are the same') {
            Title1 = 'Juice Desta 8:12'
        } else if(output === 'In the beginning Desta created the assignment 1. And it was without form; and void; and darkness was upon the face of the deep. And Desta saw the light, and it was good.') {
            Title1 = 'Desta 3:18';
        } else if(output === 'If lesbians can make it work, I can make it work to.'){
            Title1 = 'Desta 4:20';
        } else if(output === 'Desta carries his cross to the place of crucifixion, helped by Simon of Cryene. Desta is stripped and nailed to the cross.'){
            Title1 = 'Destano 6:19';
        } else if(output === 'The word No, does special things to my Body.') {
            Title1 = 'Desta 2:21';
        } else if(output === 'If your bro is acting like a hoe, its okay to go on a fun run with Desta.') {
            Title1 = 'Desta 5:18';
        }

        const version = config.version;

        var embed = new Discord.RichEmbed()
        .setTitle('The Holy Guyble')
        .addField(`${Title1}`, `${output}`, false)
        .setColor(0xB3F3F0)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`DestaBot ${version}`, client.user.avatarURL);
        message.channel.send(embed);
    }
}
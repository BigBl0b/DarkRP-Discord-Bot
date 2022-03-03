const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const RegisterCommands = require('./registery/registerCommands');
const registerCmds = new RegisterCommands('./commands', ['general', 'misc', 'moderation'], client);
const Gamedig = require('gamedig');
registerCmds.init();

client.on("ready", () => {
  console.log("General Commands Ready");
  console.log("Miscellaneous Commands Ready");
  console.log("Moderation Commands Ready");
  console.log("Bot is online!");

  setInterval(async () => {
    try {
      state = await Gamedig.query({
        type: 'garrysmod',
        host: '54.37.244.52',
        port: '27015',
      })


      const {
        maxplayers : MaxPlayers,
        players: { length: Players}
      } = state;

      client.user.setActivity(Players+ ' / '+MaxPlayers +' Players');
    } catch (e) {
      console.log(e);
    }
  }, 6000);
});


client.on("message", message => {
  const args = message.content.slice(config.prefix.length).split(" ");
  const command = args.shift();
  const commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  if(commandFile) commandFile.run(client, message, args);
});

client.login(config.token);
const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const RegisterCommands = require('./registery/registerCommands');
const registerCmds = new RegisterCommands('./commands', ['general', 'misc', 'moderation'], client);
registerCmds.init();

client.on("ready", () => {
  console.log("General Commands Ready");
  console.log("Miscellaneous Commands Ready");
  console.log("Moderation Commands Ready");
  console.log("Bot is online!");

  const Gamedig = require('gamedig');
  Gamedig.query({
      type: 'garrysmod',
      host: '54.37.244.52', // This needs to be a string
      port: '27015' // This needs to be a number & is optional, unless you're not using the default port for that gameserver type
  }).then((state) => {
      console.log(state); // You can use this output to get the player count.
      let players = state.players.length;
      let maxPlayers = state.maxplayers;

      client.user.setActivity(players + " / " + maxPlayers);
  }).catch((error) => {
      console.log("Server is offline");
  });
});
// client.user.setActivity(Players+ ' / '+MaxPlayers +' Players');


client.on("message", message => {
  const args = message.content.slice(config.prefix.length).split(" ");
  const command = args.shift();
  const commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  if(commandFile) commandFile.run(client, message, args);
});

client.login(config.token);
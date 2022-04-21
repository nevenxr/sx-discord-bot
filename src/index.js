const Discord = require("discord.js");

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});

client.commands = new Discord.Collection();

// Event Handler
require("./utils/handlers").setEvents(client);
// Command Handler
require("./utils/handlers").setCommands(client);
// Start Pinger
require("./utils/pinger").startPinger();

client.login(require("./secrets.json").bot_token);
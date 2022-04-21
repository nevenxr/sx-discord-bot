const Discord = require("discord.js");

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});

// Event Handler
require("./utils/handlers").setEvents(client);
// Command Handler
require("./utils/handlers").setCommands(client);

client.login(require("./secrets.json").bot_token);
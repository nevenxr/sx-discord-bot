const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});

(() => {
    let files = fs.readdirSync(require.main?.path + "/events")
        .filter(ext => ext.endsWith(".js"));

    for (let i = 0; i < files.length; i++) {
        let event = require(`./events/${files[i]}`);
        
        if (typeof event === "object" && event.name) {
            client.on(event.name, (...args) => event.exec(client, ...args));
        };
    };
})();

client.login(require("./secrets.json").bot_token);
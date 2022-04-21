const { log_channel_id } = require("../config.json");

module.exports = {
    name: "guildCreate",
    exec: (client, guild) => {
        client.channels.cache.get(log_channel_id).send(`Bot left guild: ${guild.name}`);
    },
};
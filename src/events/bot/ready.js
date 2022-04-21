const {
    status_text,
    status_type,
    log_channel_id
} = require("../../config.json");

module.exports = {
    name: "ready",
    exec: (client) => {
        console.log(`Logged in as ${client.user.tag}!`);
        client.user.setActivity(status_text, { type: status_type });
        const logChannel = client.channels.cache.get(log_channel_id);
        if (logChannel) logChannel.send('Bot is online!');
    },
};
const { Message } = require("discord.js");
const { bot_prefix } = require("../../config.json");

module.exports = {
    name: "messageCreate",
    /**
     * @param {*} client 
     * @param {Message} msg
     */
    exec: (client, msg) => {
        if (msg.author.bot) return;
        if (!msg.guild.me.permissions.has(['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'])) {
            msg.channel.send(`Error: I don't have the required permissions to run properly!\nMore info: ${bot_prefix}perms`).catch(() => {});
        };

        if (msg.content.startsWith(bot_prefix)) {
            const args = msg.content.slice(bot_prefix.length).trim().split(/ +/g);
            const cmd = client.commands.get(args.shift()?.toLowerCase());

            if (cmd) cmd.run(client, msg, args);
        };
    },
};
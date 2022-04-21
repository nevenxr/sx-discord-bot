module.exports = {
    name: "vote",
    run: (client, message, args) => {
        return message.channel.send(`https://top.gg/bot/${client.user.id}/vote`);
    },
};
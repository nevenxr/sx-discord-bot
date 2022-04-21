const { embed_color } = require("../../config.json");

module.exports = {
    name: "avatar",
    run: (client, message, args) => {
        return message.channel.send({
            embeds: [
                {
                    color: embed_color,
                    title: `${message.author.username}'s Avatar`,
                    description: "Here's your avatar!",
                    image: {
                      url: message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 })
                    },
                    timestamp: new Date(),
                    footer: {
                      text: "sx9.is-a.dev",
                    }
                }
            ]
        })
    },
};
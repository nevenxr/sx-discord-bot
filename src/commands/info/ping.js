const { embed_color } = require("../../config.json");
const os = require("os");

module.exports = {
    name: "ping",
    description: "See how long it takes to ping the bot.",
    run: (client, message, args) => {
        message.channel.send({
            embeds: [
                {
                    color: embed_color,
                    title: 'Pong! :ping_pong:',
                    description: `${client.ws.ping}ms Response time`,
                    fields: [
                      {
                        name: 'Operating System',
                        value: `${os.platform()}`,
                        inline: true
                      },
                      {
                        name: 'CPU Usage',
                        value: `${os.cpus()[0].model}`,
                        inline: true
                      },
                      {
                        name: 'RAM Usage',
                        value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
                        inline: true
                      },
              
                    ]
                  }
            ]
        });
    },
};
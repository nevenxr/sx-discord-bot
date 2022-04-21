module.exports = {
    name: "hug",
    run: (client, message, args) => {
        let user = message.mentions.users.first();
        if (!user) return message.channel.send("Mention someone to hug!");

        message.channel.send(`${message.author.tag} hugged ${user.tag}, aww! (Stare at the gif below)`);
        message.channel.send('https://tenor.com/view/hugs-rickroll-gif-24588121');
    },
};
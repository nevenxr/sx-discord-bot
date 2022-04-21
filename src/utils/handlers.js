const { sync } = require("glob");
const { resolve } = require("path");

module.exports.setEvents = (client) => {
    let files = sync("./src/events/**/*.js");
    
    for (let i = 0; i < files.length; i++) {
        let event = require(resolve(files[i]));
        
        if (typeof event === "object" && event.name) {
            client.on(event.name, (...args) => event.exec(client, ...args));
        };
    };
};

module.exports.setCommands = (client) => {
    
};
const { server_port } = require("../config.json");
const express = require("express");
const pinger = express();

module.exports.startPinger = () => {
    pinger.get('/', (req, res) => {
        res.send(`
        Coded by SX-Spy-Agent#1377<br>
        Website: <a href="https://sx9.is-a.dev">sx9.is-a.dev</a><br>
        Page Views: ${db.page_views}<br>
        `);
    });

    pinger.listen(server_port, () => {
        console.log(`Listening on port ${server_port}!`);
    });
};
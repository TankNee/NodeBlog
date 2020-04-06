const api = require("./api");
const express = require("express");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const cors = require("cors");
const app = express();
const customConfig = require("../config");
// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";
app.use(
    cors({
        methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
        allowHeaders: [
            "Content-Type",
            "application/json;charset=utf-8;application/x-www-form-urlencoded",
        ],
    })
);
app.use("/v1/api", api);

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    const { host, port } = customConfig.server;

    await nuxt.ready();
    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    // Give nuxt middleware to express
    app.use(nuxt.render);

    // Listen the server
    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true,
    });
}
start();

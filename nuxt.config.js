const config = require("./config");
module.exports = {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || "",
            },
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico",
            },
            {
                rel: "stylesheet",
                href:
                    "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css",
            },
        ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [
        "element-ui/lib/theme-chalk/index.css",
        "assets/style.css",
        "assets/theme/default.css",
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: "@/plugins/element-ui", ssr: false },
        { src: "~/plugins/axios", ssr: true },
        { src: "~/plugins/MarkdownItVue", ssr: false },
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxtjs/axios", "@nuxtjs/markdownit"],
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
    env: {
        baseUrl: `http${config.server.ssl ? "s" : ""}://${config.server.host}:${
            config.server.port
        }/${config.server.info.apiVersion}/api`,
    },
};

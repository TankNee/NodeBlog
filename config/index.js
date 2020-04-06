module.exports = {
    database: {
        host: "127.0.0.1",
        port: "3306",
        user: "root",
        password: "451000",
        name: "blog",
        dialect: "mysql",
        pool: {
            max: 10,
            min: 0,
            idel: 1000,
        },
    },
    server: {
        info: {
            appVersion: "0.0.1",
            apiVersion: "v1",
        },
        host: "127.0.0.1",
        port: "3000",
        ssl: false,
    },
};

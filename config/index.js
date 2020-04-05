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
        version: "0.0.1",
        url: "127.0.0.1:3000",
        apiVersion: "v1",
        ssl: false,
    },
};

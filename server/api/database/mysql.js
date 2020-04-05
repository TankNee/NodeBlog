/**
 * @Description: 数据库连接文件
 * @Author: TankNee
 * @Date: 2/2/2020 11:20 AM
 **/
const config = require("../../../config");
const Sequelize = require("sequelize");

const dbConfig = {
  ...config.database,
};

const sequelize = new Sequelize(
  dbConfig.name,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;

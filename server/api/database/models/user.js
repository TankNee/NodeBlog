/**
 * @Description: 用户模型
 * @Author: TankNee
 * @Date: 3/6/2020 7:23 PM
 **/

var Sequelize = require('sequelize');
var mysql = require('../mysql');

var user = mysql.define('user', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    userName: Sequelize.STRING(100),
    password: Sequelize.STRING(100),
    mail: Sequelize.STRING(2000),
    avatar:Sequelize.STRING(2000),
    created: Sequelize.BIGINT(20),
    activated: Sequelize.BIGINT(20),
    logged: Sequelize.BIGINT(20),
    role: Sequelize.STRING(100),
});

module.exports = user;

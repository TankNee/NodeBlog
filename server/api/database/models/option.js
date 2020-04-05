/**
 * @Description: 博客配置
 * @Author: TankNee
 * @Date: 3/6/2020 7:14 PM
 **/
var Sequelize = require('sequelize');
var mysql = require('../mysql');

var option = mysql.define('option', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    name: Sequelize.STRING(100),
    user: Sequelize.STRING(100),
    value: Sequelize.STRING(100)
});

module.exports = option;

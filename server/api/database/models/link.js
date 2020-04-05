/**
 * @Description: 友情链接
 * @Author: TankNee
 * @Date: 3/6/2020 7:17 PM
 **/
var Sequelize = require('sequelize');
var mysql = require('../mysql');

var link = mysql.define('link', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    name: Sequelize.STRING(100),
    url: Sequelize.STRING(1000),
    image: Sequelize.STRING(1000),
    description: Sequelize.STRING(1000),
    order: Sequelize.STRING(1000),
});

module.exports = link;

/**
 * @Description: 文章标签
 * @Author: TankNee
 * @Date: 3/6/2020 7:14 PM
 **/
var Sequelize = require('sequelize');
var mysql = require('../mysql');

var meta = mysql.define('meta', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    name: Sequelize.STRING(100),
    slug: Sequelize.STRING(100),
    type: Sequelize.STRING(100),
    count: Sequelize.STRING(100)
});

module.exports = meta;

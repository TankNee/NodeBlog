/**
 * @Description: 文章模型
 * @Author: TankNee
 * @Date: 3/6/2020 7:23 PM
 **/
var Sequelize = require('sequelize');
var mysql = require('../mysql');

var article = mysql.define('article', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    title: Sequelize.STRING(100),
    slug: Sequelize.STRING(100),
    summary: Sequelize.STRING(1000),
    uid: Sequelize.BIGINT(11),
    created: Sequelize.BIGINT(20),
    modified: Sequelize.BIGINT(20),
    content: Sequelize.TEXT,
    commentsNum: Sequelize.INTEGER(20),
    allowComment: Sequelize.STRING(100),
    password: Sequelize.STRING(100),
    thumbnail:Sequelize.STRING(1000),
    views: Sequelize.INTEGER(20),
    stars: Sequelize.INTEGER(20),
    status: Sequelize.STRING(20)
});

module.exports = article;

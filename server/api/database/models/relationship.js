/**
 * @Description: 关联表
 * @Author: TankNee
 * @Date: 3/8/2020 9:18 AM
 **/
var Sequelize = require('sequelize');
var mysql = require('../mysql');

var relationship = mysql.define('relationship', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    aid: Sequelize.BIGINT(11),
    meid: Sequelize.BIGINT(11)
});

module.exports = relationship;

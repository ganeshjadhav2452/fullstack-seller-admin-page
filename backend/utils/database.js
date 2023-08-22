const SequelizePackage = require('sequelize')


const sequelize = new SequelizePackage('adminProducts','root','24521365',{dialect:'mysql',host:'localhost'});

module.exports =  sequelize;
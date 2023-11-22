const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expence = sequelize.define('expense',{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey:true
    },
    expense:{
      type:Sequelize.INTEGER,
      allowNull:false
    },
    description:{
      type:Sequelize.STRING,
      allowNull:false
    },
    category:{
      type:Sequelize.STRING,
      allowNull:false
    }
  });

  module.exports = Expence;
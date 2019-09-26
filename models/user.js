'use strict';
const hashPassword = require('../Helpers/hashPassword')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model{
    
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    }
  }, {sequelize, modelName: 'User' })

  User.associate = function(models) {
    // User.belongsToMany(Project, { through: UserProject });
    User.belongsToMany(models.Book, {through: models.UserBook})
  };
  return User;
};
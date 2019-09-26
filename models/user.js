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
      validate:{
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    }
  }, {sequelize, modelName: 'User', hooks:{
      beforeCreate: (instance, options)=>{
        const random = String(Math.random() * 10000)
        const newPassword = hashPassword(instance.password, random)
        instance.setDataValue('password', newPassword)
        instance.setDataValue('salt', random)
      }
    }
  })

  User.associate = function(models) {
    // User.belongsToMany(Project, { through: UserProject });
    User.belongsToMany(models.Book, {through: models.UserBook})
  };
  return User;
};
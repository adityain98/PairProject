'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Book extends Model{

  }

  Book.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {sequelize, modelName: "Book"})
  
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};
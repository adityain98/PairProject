'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Categoty extends Model{

  }

  Category.init({
    category: DataTypes.STRING
  }, {sequelize, modelName: 'Category'})

  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
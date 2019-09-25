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
    // User.belongsToMany(Project, { through: UserProject });
    Book.belongsToMany(models.Category, {through: models.BookCategory})
    Book.belongsToMany(models.User, {through: models.UserBook})
  };
  return Book;
};
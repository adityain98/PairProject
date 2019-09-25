'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
        category: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Fiction',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Young Adult',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Adult',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

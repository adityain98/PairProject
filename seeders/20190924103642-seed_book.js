'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books',[{
      name: "The Outside",
      stock: 10,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: "Here There Are Monsters",
        stock: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "House of Salt and Sorrows",
        stock: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Dragon Republic",
        stock: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "A Better Man",
        stock: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Swallow",
        stock: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Turn of the Key",
        stock: 19,
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

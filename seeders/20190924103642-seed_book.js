'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books',[{
      name: "The Outside",
      stock: 10,
      gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544647268l/40947778._SY475_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: "Here There Are Monsters",
        stock: 14,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543858837l/36445966._SY475_.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "House of Salt and Sorrows",
        stock: 17,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544071699l/39679076.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Dragon Republic",
        stock: 11,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539963703l/41118857._SY475_.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "A Better Man",
        stock: 18,
        gambae: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1426872513l/23507698.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Swallows",
        stock: 13,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553520339l/43744294.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Turn of the Key",
        stock: 19,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548169391l/40489648._SY475_.jpg",
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

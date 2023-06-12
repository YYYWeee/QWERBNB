'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'ReviewImages';
    return queryInterface.bulkInsert(options, [
      {
        reviewId: 1,
        url: 'https://test1.com'
      },
      {
        reviewId: 2,
        url: 'https://test2.com'
      },
      {
        reviewId: 3,
        url: 'https://test3.com'
      },
      {
        reviewId: 4,
        url: 'https://test4.com'
      },
      {
        reviewId: 5,
        url: 'https://test5.com'
      },
      {
        reviewId: 6,
        url: 'https://test6.com'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      url: {
        [Op.in]: [
          'https://test1.com',
          'https://test2.com',
          'https://test3.com',
          'https://test4.com',
          'https://test5.com',
          'https://test6.com'
        ]
      }
    }, {});
  }
};

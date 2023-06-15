'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://reviewimage1.com',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://reviewimage2.com',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://reviewimage3.com',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://reviewimage4.com',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://reviewimage5.com',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://reviewimage6.com',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://reviewimage7.com',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://reviewimage8.com',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://reviewimage9.com',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://reviewimage10.com',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://reviewimage11.com',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://reviewimage12.com',
        preview: true
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      url: {
        [Op.in]: [
          'https://reviewimage1.com',
          'https://reviewimage2.com',
          'https://reviewimage3.com',
          'https://reviewimage4.com',
          'https://reviewimage5.com',
          'https://reviewimage6.com',
          'https://reviewimage7.com',
          'https://reviewimage8.com',
          'https://reviewimage9.com',
          'https://reviewimage10.com',
          'https://reviewimage11.com',
          'https://reviewimage12.com'
        ]
      }
    }, {});
  }
};

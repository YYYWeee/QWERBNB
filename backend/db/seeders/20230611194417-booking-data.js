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
    options.tableName = 'Bookings';
    return queryInterface.bulkInsert(options, [
      {
        //10 spots
        spotId: 1,
        userId: 3,
        startDate: '2023-06-27',
        endDate: '2023-07-01',

      },
      {
        spotId: 1,
        userId: 2,
        startDate: '2023-10-01',
        endDate: '2023-10-10',

      },
      {
        spotId: 2,
        userId: 2,
        startDate: '2023-11-01',
        endDate: '2023-11-02',

      },
      {
        spotId: 2,
        userId: 3,
        startDate: '2024-01-01',
        endDate: '2024-01-05',

      },
      {
        spotId: 3,
        userId: 1,
        startDate: '2023-08-19',
        endDate: '2023-08-25',

      },
      {
        spotId: 3,
        userId: 2,
        startDate: '2023-10-06',
        endDate: '2023-10-09',

      },
      {
        spotId: 5,
        userId: 3,
        startDate: '2023-12-03',
        endDate: '2023-12-15',

      },
      {
        spotId: 6,
        userId: 1,
        startDate: '2023-07-03',
        endDate: '2023-07-13',

      },
      {
        spotId: 6,
        userId: 2,
        startDate: '2025-01-06',
        endDate: '2025-01-09',

      },
      {
        spotId: 4,
        userId: 1,
        startDate: '2023-06-06',
        endDate: '2023-06-25',

      }


    ], {});
  },
  //pending
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      startDate: {
        [Op.in]: [
          '2023-06-27',
          '2023-10-01',
          '2023-11-01',
          '2024-01-01',
          '2023-08-19',
          '2023-10-06',
          '2023-12-03',
          '2023-07-03',
          '2025-01-06',
          '2023-06-06']
      }
    }, {});
  }
};

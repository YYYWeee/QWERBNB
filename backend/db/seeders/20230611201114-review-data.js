'use strict';
const bcrypt = require("bcryptjs");

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
    options.tableName = 'Reviews';
    return queryInterface.bulkInsert(options, [
      {
        //6 review
        spotId: 1,
        userId: 3,
        review: 'We had an amazing time at Josh place. It is gorgeous, very comfortable',
        stars: 5,

      },
      {
        spotId: 1,
        userId: 2,
        review: 'Wow, what an incredible place.',
        stars: 4,

      },
      {
        spotId: 2,
        userId: 3,
        review: 'Very nice home, we enjoyed our stay.',
        stars: 4,

      },
      {
        spotId: 3,
        userId: 1,
        review: 'The most peaceful and tranquil location with a very welcoming family home atmosphere.',
        stars: 5,

      },
      {
        spotId: 8,
        userId: 1,
        review: 'Such a beautiful space and beautiful view of downtown.',
        stars: 5,

      },
      {
        spotId: 6,
        userId: 2,
        review: 'Apartment is very spacious and well maintained.',
        stars: 3,

      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      review: {
        [Op.in]: [
          'We had an amazing time at Josh place. It is gorgeous, very comfortable',
          'Wow, what an incredible place.',
          'Very nice home, we enjoyed our stay.',
          'The most peaceful and tranquil location with a very welcoming family home atmosphere.',
          'Such a beautiful space and beautiful view of downtown.',
          'Apartment is very spacious and well maintained.'
        ]
      }
    }, {});
  }
};

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
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '123 Disney Lane',
        city: 'San Francisco',
        state: 'California',
        country: 'United States of America',
        lat: 37.7645358,
        lng: -122.4730327,
        name: 'Beautiful Newly Remodeled 2 Bedroom',
        description: 'Long or short term rental. This cutie of a farm house was built in 1841 and is one of the oldest homes in Collin County. Wrap around covered porch with a swing to watch the sunset or overlook the 40 plus acres of rolling meadows and trees surrounding the home. You could possibly spot some deer, wild turkey, or hear the coyotes howl at the full moon.',
        price: 250
      },
      {
        ownerId: 1,
        address: '449 Brown Street',
        city: 'Danville',
        state: 'California',
        country: 'United States of America',
        lat: 37.830399,
        lng: -121.918396,
        name: 'Sandy Beach Estate: Estate with Pool and Hot Tub!',
        description: 'Vacation Like Royalty! Over 12,000 Square Feet',
        price: 200
      },
      {
        ownerId: 2,
        address: '2979 Young Road',
        city: 'Phoenix',
        state: 'Arizona',
        country: 'United States of America',
        lat: 42.419518,
        lng: -111.774010,
        name: 'Quaint Cottage Six Blocks to the Ocean',
        description: 'Escape and explore all that Phoenix has to offer while nestling in your upscale desert oasis. ',
        price: 40
      },
      {
        ownerId: 2,
        address: '4646 Bottom Lane',
        city: 'Buffalo',
        state: 'New York',
        country: 'United States of America',
        lat: 43.022636,
        lng: -78.905739,
        name: 'Urban Greenhouse',
        description: 'Enjoy the comfort of this spacious open floor plan. Just a quick stroll to the bluff to fish or bask in the sunset views.',
        price: 95
      }, {
        ownerId: 2,
        address: '3295 Roosevelt Wilson Lane',
        city: 'Arlington',
        state: 'Virginia',
        country: 'United States of America',
        lat: 38.759605,
        lng: -77.100052,
        name: 'Bright, Modern & Spacious Stunner in Silverlake',
        description: 'Explore a mid-century architectural gem featuring a spacious great room, ',
        price: 690
      },
      {
        ownerId: 3,
        address: '1133 Leroy Lane',
        city: 'Watertown',
        state: 'South Dakota',
        country: 'United States of America',
        lat: 44.864590,
        lng: -97.137184,
        name: 'Greywolf Lodge',
        description: 'Relax in your peaceful family oasis. Our fully remodeled 2 bedroom condo is perfect for families looking to spend time at the lake.',
        price: 134
      },
      {
        ownerId: 3,
        address: '29 Thorn Street',
        city: 'Cody',
        state: 'Wyoming',
        country: 'United States of America',
        lat: 44.476345,
        lng: -109.606728,
        name: 'Serene San Diego Canyon Getaway',
        description: 'Our cozy studio-style guest house perched above a tree-filled canyon is a serene getaway in the center of San Diego',
        price: 95
      },
      {
        ownerId: 3,
        address: '3688 Horner Street',
        city: 'Johnston',
        state: 'Ohio',
        country: 'United States of America',
        lat: 41.452400,
        lng: -80.598328,
        name: 'Good Vibes Hidden Oasis',
        description: 'Merely a one-block walk to Mission Bay and two blocks from the Pacific Ocean, this space is the perfect hidden oasis! ',
        price: 134
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    //pending
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      address: {
        [Op.in]:
        [
          '123 Disney Lane',
          '449 Brown Street',
          '2979 Young Road',
          '4646 Bottom Lane',
          '3295 Roosevelt Wilson Lane',
          '1133 Leroy Lane',
          '29 Thorn Street',
          '3688 Horner Street,']
      }
    }, {});
  }
};

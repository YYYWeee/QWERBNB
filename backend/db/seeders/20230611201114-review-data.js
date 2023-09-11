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
      { //6
        spotId: 6,
        userId: 2,
        review: 'Apartment is very spacious and well maintained.',
        stars: 3,
      },
      { //7
        spotId: 7,
        userId: 1,
        review: 'Absolutely beautiful home! The views were breathtaking! We really enjoyed this home and would stay again.',
        stars: 4,
      },
      { //8
        spotId: 7,
        userId: 2,
        review: 'My family and I had such a wonderful time during our stay. The views were so beautiful! The home was very clean and cozy. The host was very friendly and quick to respond with any questions. This place is perfect for any occasion and we would recommend it to anyone. We’re already looking at the calendar to plan a trip to come back!',
        stars: 4,
      },
      { //9
        spotId: 8,
        userId: 2,
        review: 'After initially booking and receiving the messages it seemed bery strict. Also, I thought the additional charge for early or late check out was ridiculous. Most Airbnb\'s accomodate you with no additional charge as long as its not something obsurd. I asked for a call after checking out the place in person and he was very kind. The veiws were amazing. I requested additional towels which we never received. I also was not fond of the front bedroom did not have something covering the windows. More lounge chairs outside would be amazing as well. Besides that, our stay was amazing and we definitely enjoyed ourselves. I would definitely book this property again or recommend it for a friend.',
        stars: 5,
      },
      { //10
        spotId: 9,
        userId: 2,
        review: 'The views are amazing. Two steps from the beach. Comfortable and clean space. Great host. Could not love this place more. Highly recommend.',
        stars: 3,
      },
      {
        spotId: 10,
        userId: 3,
        review: 'The house is just perfect and the location to the beach is just great. My family very much enjoyed being able to go to and from the beach easily and I LOVE the view from the porch. ❤️❤️❤️ Melissa was also an AMAZING host!!!',
        stars: 5,
      },
      {
        spotId: 11,
        userId: 3,
        review: 'This house was perfect! So close to the water, plenty of space, and very clean! We had a great time.',
        stars: 5,
      },
      {
        spotId: 12,
        userId: 3,
        review: 'Bottom line, it was a 5 star beach house, with a 5 star experience.',
        stars: 5,
      },
      {
        spotId: 13,
        userId: 2,
        review: 'Wonderful ocean-front stay with great views of sunrises and ocean. The decks/balconies were great, but we also brought our own zero-reclining lawn chairs and enjoyed sitting in them under the carport with a wonderful breeze and still in view of the ocean. Perfect for large families and girls outings. Great host!',
        stars: 4,
      },
      {
        spotId: 14,
        userId: 2,
        review: 'This house is awesome! It is very spacious and great for the whole family. It is a minute walk from the beach and the views from the balconies are outstanding. Michelle is a wonderful host, very attentive and replied to any question or concern right away. We will definitely be coming back!',
        stars: 4,
      },
      {
        spotId: 15,
        userId: 2,
        review: 'Absolutely wonderful experience!!! After years and years of using the two local real estate companies Swedes and Cobb I finally convinced my family to let me go the Airbnb route. This house is absolutely spotless when you walk in, the furniture both inside and out is well above average for a beach rental. Wonderful master/private bath downstairs with great kitchen and common area and a half bath. Upstairs you have two great rooms with access to an upstairs patio and another room with two additional beds. There is also two full bathrooms upstairs so nobody feels cramped and they are filled with hotel style amenities.',
        stars: 4,
      },
      {
        spotId: 16,
        userId: 2,
        review: 'Great location! This place is just a minute away from the beach—if that! We loved being able to walk to and from the house during our stay.',
        stars: 4,
      },
      {
        spotId: 17,
        userId: 2,
        review: 'So glad to have booked this amazing location for our production team! Mason was extremely easy to work with and is very responsive! Great location, great space! The team loved their stay and hope to stay here again soon! Thank you Mason!',
        stars: 4,
      },
      {
        spotId: 18,
        userId: 2,
        review: 'Cute and comfortable space and in a great location! Loved it',
        stars: 4,
      },
      {
        spotId: 19,
        userId: 2,
        review: 'When it comes to airbnbs, Mason is doing it right. This home was in pristine shape. Everything was new and clean. This place has plenty of room for families. It is in a great location next to a lot of restaurants and stores. 10 minutes from the beach. Mason was very responsive and took care of any arising issues right away. I would definitely stay here again. Thank you, Mason, for being a great host.',
        stars: 4,
      },
      {
        spotId: 20,
        userId: 2,
        review: 'I felt at home. The place looks even better in person that in the pictures. I strongly recommend it.',
        stars: 5,
      },
      {
        spotId: 21,
        userId: 2,
        review: 'This is a beautifully and practical house in a great location, close to everything and in a great neighborhood. The house is very well appointed and has great space. Great experience! Our host was very kind and helpful throughout our stay and after.',
        stars: 4,
      },
      {
        spotId: 22,
        userId: 2,
        review: 'My kids and I were pleasantly surprised how nice Masons house was. It was clean and comfortable and totally new! They loved the fact that we had rooms upstairs and a huge yard.',
        stars: 4,
      },
      {
        spotId: 23,
        userId: 2,
        review: 'This house is brand new with modern design and amenities. We are here for our son’s 1 year old bday and the house is very baby and dog friendly. Very nice place and sparkling clean! Santa Monica, Venice beach and Culver City all within 10 minutes drive. Mason is a great host, very responsive and friendly! Highly recommend!',
        stars: 4,
      },
      {
        spotId: 24,
        userId: 2,
        review: 'We really enjoyed staying at Curtis\’s place. It was clean, easy to find and access, and Curtis was responsive to any communications. We appreciated their thorough instructions and would definitely stay at Curtis’s place again.',
        stars: 4,
      },
      {
        spotId: 25,
        userId: 2,
        review: 'Spacious and clean. We loved our stay here!',
        stars: 4,
      },
      {
        spotId: 26,
        userId: 2,
        review: 'Curtis and his associates were awesome throughout the booking process and during our stay. The place was clean, quiet, stylish, and in a good location. My girlfriend, friends and I enjoyed the apartment and felt safe and comfortable during our time there. We did notice a small issue with the gas range after we first walked in, but someone quickly came in and fixed the issue. Overall, I recommend this listing!',
        stars: 4,
      },
      {
        spotId: 27,
        userId: 2,
        review: 'Cozy little apartment!',
        stars: 4,
      },
      {
        spotId: 28,
        userId: 1,
        review: 'Such a great place!! we had a great time! super clean and comfy house!! very fast responses!',
        stars: 5,
      },
      {
        spotId: 29,
        userId: 1,
        review: 'Curtis was super responsive to all of my questions and an excellent host. The place was easy to find, incredibly cute and everything was perfectly clean. We appreciated the ability to park off-street. The location was perfect for us, a quick 10 minute drive to our conference at Mount St. Mary\’s University. Thanks Curtis!!',
        stars: 5,
      },
      {
        spotId: 30,
        userId: 1,
        review: 'The house was pristine and everything was just as pictured. Great place for artists such as ourselves to go and film content.',
        stars: 3,
      },
      {
        spotId: 31,
        userId: 1,
        review: 'Very fun place to stay at, for an affordable price. Curtis was very responsive and helpful when we had questions or needed some help with staying in the AirBnb. Would be willing to stay at his place again.',
        stars: 5,
      },
      {
        spotId: 32,
        userId: 3,
        review: 'Excellent apartment, and ideal treatment',
        stars: 3,
      },
      {
        spotId: 33,
        userId: 1,
        review: 'Great place to stay at Crystal Beach. Easy to find and private but still close enough to the ferry to do the touristy activities.',
        stars: 5,
      },
      {
        spotId: 34,
        userId: 1,
        review: 'Great spot. Family really enjoyed the place. Lots of room for our large group. Very helpful we had multiple wash / shower stations to clean off sand before entering the house. For family who wanted to skip the beach but still enjoy the shores, they were able to sit on the porch and see our group on the beach very easily. The beautiful sunrises were gorgeous and golden. Host was responsive when we reached out with questions.',
        stars: 5,
      },
      {
        spotId: 35,
        userId: 1,
        review: 'Wonderful view of the ocean and the house was perfect!!',
        stars: 5,
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
          'Apartment is very spacious and well maintained.',
          'Absolutely beautiful home! The views were breathtaking! We really enjoyed this home and would stay again.',
          'My family and I had such a wonderful time during our stay. The views were so beautiful! The home was very clean and cozy. The host was very friendly and quick to respond with any questions. This place is perfect for any occasion and we would recommend it to anyone. We’re already looking at the calendar to plan a trip to come back!',
          'After initially booking and receiving the messages it seemed bery strict. Also, I thought the additional charge for early or late check out was ridiculous. Most Airbnb\'s accomodate you with no additional charge as long as its not something obsurd. I asked for a call after checking out the place in person and he was very kind. The veiws were amazing. I requested additional towels which we never received. I also was not fond of the front bedroom did not have something covering the windows. More lounge chairs outside would be amazing as well. Besides that, our stay was amazing and we definitely enjoyed ourselves. I would definitely book this property again or recommend it for a friend.',
          'The views are amazing. Two steps from the beach. Comfortable and clean space. Great host. Could not love this place more. Highly recommend.',
          'The house is just perfect and the location to the beach is just great. My family very much enjoyed being able to go to and from the beach easily and I LOVE the view from the porch. ❤️❤️❤️ Melissa was also an AMAZING host!!!',
          'This house was perfect! So close to the water, plenty of space, and very clean! We had a great time.',
          'Bottom line, it was a 5 star beach house, with a 5 star experience.',
          'Wonderful ocean-front stay with great views of sunrises and ocean. The decks/balconies were great, but we also brought our own zero-reclining lawn chairs and enjoyed sitting in them under the carport with a wonderful breeze and still in view of the ocean. Perfect for large families and girls outings. Great host!',
          'This house is awesome! It is very spacious and great for the whole family. It is a minute walk from the beach and the views from the balconies are outstanding. Michelle is a wonderful host, very attentive and replied to any question or concern right away. We will definitely be coming back!',
          'Absolutely wonderful experience!!! After years and years of using the two local real estate companies Swedes and Cobb I finally convinced my family to let me go the Airbnb route. This house is absolutely spotless when you walk in, the furniture both inside and out is well above average for a beach rental. Wonderful master/private bath downstairs with great kitchen and common area and a half bath. Upstairs you have two great rooms with access to an upstairs patio and another room with two additional beds. There is also two full bathrooms upstairs so nobody feels cramped and they are filled with hotel style amenities.',
          'Great location! This place is just a minute away from the beach—if that! We loved being able to walk to and from the house during our stay.',
          'So glad to have booked this amazing location for our production team! Mason was extremely easy to work with and is very responsive! Great location, great space! The team loved their stay and hope to stay here again soon! Thank you Mason!',
          'Cute and comfortable space and in a great location! Loved it',
          'When it comes to airbnbs, Mason is doing it right. This home was in pristine shape. Everything was new and clean. This place has plenty of room for families. It is in a great location next to a lot of restaurants and stores. 10 minutes from the beach. Mason was very responsive and took care of any arising issues right away. I would definitely stay here again. Thank you, Mason, for being a great host.',
          'I felt at home. The place looks even better in person that in the pictures. I strongly recommend it.',
          'This is a beautifully and practical house in a great location, close to everything and in a great neighborhood. The house is very well appointed and has great space. Great experience! Our host was very kind and helpful throughout our stay and after.',
          'My kids and I were pleasantly surprised how nice Masons house was. It was clean and comfortable and totally new! They loved the fact that we had rooms upstairs and a huge yard.',
          'This house is brand new with modern design and amenities. We are here for our son’s 1 year old bday and the house is very baby and dog friendly. Very nice place and sparkling clean! Santa Monica, Venice beach and Culver City all within 10 minutes drive. Mason is a great host, very responsive and friendly! Highly recommend!',
          'We really enjoyed staying at Curtis\’s place. It was clean, easy to find and access, and Curtis was responsive to any communications. We appreciated their thorough instructions and would definitely stay at Curtis’s place again.',
          'Spacious and clean. We loved our stay here!',
          'Curtis and his associates were awesome throughout the booking process and during our stay. The place was clean, quiet, stylish, and in a good location. My girlfriend, friends and I enjoyed the apartment and felt safe and comfortable during our time there. We did notice a small issue with the gas range after we first walked in, but someone quickly came in and fixed the issue. Overall, I recommend this listing!',
          'Cozy little apartment!',
          'Such a great place!! we had a great time! super clean and comfy house!! very fast responses!',
          'Curtis was super responsive to all of my questions and an excellent host. The place was easy to find, incredibly cute and everything was perfectly clean. We appreciated the ability to park off-street. The location was perfect for us, a quick 10 minute drive to our conference at Mount St. Mary\’s University. Thanks Curtis!!',
          'The house was pristine and everything was just as pictured. Great place for artists such as ourselves to go and film content.',
          'Very fun place to stay at, for an affordable price. Curtis was very responsive and helpful when we had questions or needed some help with staying in the AirBnb. Would be willing to stay at his place again.',
          'Excellent apartment, and ideal treatment',
          'Great place to stay at Crystal Beach. Easy to find and private but still close enough to the ferry to do the touristy activities.',
          'Great spot. Family really enjoyed the place. Lots of room for our large group. Very helpful we had multiple wash / shower stations to clean off sand before entering the house. For family who wanted to skip the beach but still enjoy the shores, they were able to sit on the porch and see our group on the beach very easily. The beautiful sunrises were gorgeous and golden. Host was responsive when we reached out with questions.',
          'Wonderful view of the ocean and the house was perfect!!'



        ]
      }
    }, {});
  }
};

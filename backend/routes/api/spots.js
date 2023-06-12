const express = require('express');
const router = express.Router();
const { Spot, SpotImage, Review } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


// router.get('/', async (req, res) => {
//   const allSpots = await Spot.findAll({
//     attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'description', 'price', 'createdAt', 'updatedAt'],
//     include: [
//       {
//         model: SpotImage,
//         as: 'previewImage',
//         attributes: ['url']
//       }, {
//         model: Review,
//         attributes: []
//       }
//     ]

//   });

//   res.json({
//     Spots: allSpots
//   });
// })

router.get('/', async (req, res) => {
  const allSpots = await Spot.findAll({
    include: [{
      model: SpotImage,
      // as: 'previewImage',
      attributes: ['url'],
      limit: 1
    }],
  });
  for (let i = 0; i < allSpots.length; i++) {
    const reviews = await allSpots[i].getReviews();  //reviews is an array

    let totalStar = 0;
    for (let j = 0; j < reviews.length; j++) {
      totalStar += reviews[j].dataValues.stars
    }
    let avgStar = totalStar / reviews.length;
    allSpots[i].dataValues.avgRating = avgStar;


  }


  let spotList = [];
  allSpots.forEach(spot => {
    spotList.push(spot.toJSON());
  });

  spotList.forEach(spot => {
    spot.SpotImages.forEach(image => {
      spot.SpotImages = image.url;
    })
  })

  res.json({ Spots: spotList })
})

module.exports = router;




// [
//   Review
//   {
//     dataValues:
//     {
//       id: 6,
//       spotId: 6,
//       userId: 2,
//       review: 'Apartment is very spacious and well maintained.',
//       stars: 3,
//       createdAt: 2023-06-12T15:09:23.000Z,
//       updatedAt: 2023-06-12T15:09:23.000Z
//     },
//     _previousDataValues:
//     {
//       id: 6,
//       spotId: 6,
//       userId: 2,
//       review: 'Apartment is very spacious and well maintained.',
//       stars: 3,
//       createdAt: 2023-06-12T15:09:23.000Z,
//       updatedAt: 2023-06-12T15:09:23.000Z
//     },
//     uniqno: 1,
//     _changed: Set(0) {},
//     _options:
//     {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       raw: true,
//       attributes: [Array]
//     },
//     isNewRecord: false
//   }
// ]

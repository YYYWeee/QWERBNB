const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { Spot, SpotImage, Review, User, ReviewImage, Booking } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const queryValidator = [
  check('page').optional().isInt({ min: 1, max: 10 }).withMessage('Page must be greater than or equal to 1 & less than 10'),
  check('size').optional().isInt({ min: 1, max: 20 }).withMessage('Size must be greater than or equal to 1 & less than 20'),
  check('minLat').optional().isNumeric().withMessage('Minimum latitude is invalid'),
  check('maxLat').optional().isNumeric().withMessage('Maximum latitude is invalid'),
  check('minLng').optional().isNumeric().withMessage('Minimum longitude is invalid'),
  check('maxLng').optional().isNumeric().withMessage('Maximum longitude is invalid'),
  check('minPrice').optional().isNumeric().withMessage('Minimum price must be greater than or equal to 0').custom((value) => {
    if (value < 0) {
      throw new Error('Minimum price must be greater than or equal to 0')
    }
  }),
  check('maxPrice').optional().isNumeric().withMessage('Maximum price must be greater than or equal to 0').custom((value) => {
    if (value < 0) {
      throw new Error('Maximum price must be greater than or equal to 0')
    }
  }),
  handleValidationErrors
]


//Get all Spots
router.get('/', queryValidator, async (req, res, next) => {
  let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;
  if (!page) page = 1;
  if (!size) size = 20;
  page = parseInt(page);
  size = parseInt(size);
  const pagination = {};
  const where = {};
  pagination.limit = size;
  pagination.offset = size * (page - 1);

  if (minLat) {
    where.lat = {
      [Op.gte]: minLat
    }
  }
  if (minLng) {
    where.lng = {
      [Op.gte]: minLng
    }
  }
  if (maxLat) {
    where.lat = {
      [Op.lte]: maxLat
    }
  }
  if (maxLng) {
    where.lng = {
      [Op.lte]: maxLng
    }
  }
  if (maxPrice) {
    where.price = {
      [Op.lte]: maxPrice
    }
  }

  if (minPrice) {
    where.price = {
      [Op.gte]: minPrice
    }
  }


  const allSpots = await Spot.findAll({
    where,
    ...pagination,
    include: [{
      model: SpotImage,
      attributes: ['url', 'preview'],
      // limit: 1
    }]
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
      if (image.preview === true) {
        spot.previewImage = image.url;
      }
    })
    if (!spot.previewImage) {
      spot.previewImage = null;
    }

    delete spot.SpotImages;
  })

  res.json({
    Spots: spotList,
    page: page,
    size: size
  })
})












//Get all Spots owned by the Current User
router.get('/current', requireAuth, async (req, res) => {
  const { user } = req;

  const allSpots = await Spot.findAll({
    include: [{
      model: SpotImage,
      attributes: ['url', 'preview'],
      // limit: 1
    }],
    where: {
      ownerId: user.id
    }
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
      if (image.preview === true) {
        spot.previewImage = image.url;
      }

    })
    if (!spot.previewImage) {
      spot.previewImage = null;
    }

    delete spot.SpotImages;
  })



  // res.json(spotList)
  res.json({
    Spots: spotList
  })
})

//Get details of a Spot from an id
router.get('/:id', async (req, res) => {
  let oneSpot = await Spot.findByPk(req.params.id, {
    include: [
      {
        model: SpotImage,
        attributes: ['id', 'url', 'preview'],
      },
      {
        model: User,
        attributes: ['id', 'firstName', 'lastName']
      }
    ],
  })
  if (!oneSpot) {
    res.statusCode = 404
    res.json({ 'message': "Spot couldn't be found" })
  }


  const reviews = await oneSpot.getReviews();
  let totalStar = 0;
  for (let i = 0; i < reviews.length; i++) {
    totalStar += reviews[i].dataValues.stars
  }
  let reviewLength = reviews.length
  let avgStar = totalStar / reviews.length;
  oneSpot = oneSpot.toJSON();
  oneSpot.avgStarRating = avgStar;
  oneSpot.numReviews = reviewLength;
  oneSpot['Owner'] = oneSpot['User']
  delete oneSpot['User'];
  res.json(oneSpot)
})




const validateCreateSpot = [
  check('address')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Street address is required'),
  check('city')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('City is required'),
  check('state')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('State is required'),
  check('country')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Country is required'),
  check('name')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isLength({ min: 1, max: 50 })
    .withMessage('Name must be less than 50 characters'),
  check('description')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('description is required'),
  check('price')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Price per day is required'),
  check('lat')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isFloat({ min: -90, max: 90 })
    .withMessage('Latitude is not valid'),
  check('lng')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isFloat({ min: -180, max: 180 })
    .withMessage('Longitude is not valid'),
  handleValidationErrors
];



// Create a Spot
router.post('/', requireAuth, validateCreateSpot, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } = req.body;
  const { user } = req;
  const newSpot = await Spot.create({
    ownerId: user.id,
    address: address,
    city: city,
    state: state,
    country: country,
    lat: lat,
    lng: lng,
    name: name,
    description: description,
    price: price
  })
  res.statusCode = 201;
  res.json(newSpot)
})

// Add an Image to a Spot based on the Spot's id
// post spots/:id/images
router.post('/:id/images', requireAuth, async (req, res) => {
  const { url, preview } = req.body;
  const { user } = req;
  const { id } = req.params;

  let oneSpot = await Spot.findByPk(id)
  if (!oneSpot) {
    res.statusCode = 404
    res.json({ 'message': "Spot couldn't be found" })
  }
  if (oneSpot.ownerId !== user.id) {
    res.statusCode = 403;
    res.json({ 'message': "Forbidden" })
  }

  let newImage = await SpotImage.create({
    spotId: id,
    url: url,
    preview: preview
  })
  newImage = newImage.toJSON();
  delete newImage.spotId;
  delete newImage.updatedAt;
  delete newImage.createdAt;

  res.json(newImage)
})

const validateEditSpot = [
  check('address')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Street address is required'),
  check('city')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('City is required'),
  check('state')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('State is required'),
  check('country')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Country is required'),
  check('name')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isLength({ min: 1, max: 50 })
    .withMessage('Name must be less than 50 characters'),
  check('description')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('description is required'),
  check('price')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Price per day is required'),
  check('lat')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isFloat({ min: -90, max: 90 })
    .withMessage('Latitude is not valid'),
  check('lng')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isFloat({ min: -180, max: 180 })
    .withMessage('Longitude is not valid'),
  handleValidationErrors
];

//Edit a Spot
//PUT /spots/:id
// Spot must belong to the current user

router.put('/:id', requireAuth, validateEditSpot, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } = req.body;
  const { user } = req;

  let oneSpot = await Spot.findByPk(req.params.id)
  if (!oneSpot) {
    res.statusCode = 404
    res.json({ 'message': "Spot couldn't be found" })
  }

  if (oneSpot.ownerId !== user.id) {
    res.statusCode = 403;
    res.json({ 'message': "Forbidden" })
  }
  let setObj = {}
  if (address) {
    setObj.address = address;
  }
  if (city) {
    setObj.city = city;
  }
  if (state) {
    setObj.state = state;
  }
  if (country) {
    setObj.country = country;
  }
  if (lat) {
    setObj.lat = lat;
  }
  if (lng) {
    setObj.lng = lng;
  }
  if (name) {
    setObj.name = name;
  }
  if (description) {
    setObj.description = description;
  }
  if (price) {
    setObj.price = price;
  }
  oneSpot.set(setObj);
  await oneSpot.save();
  res.json(oneSpot);
})


//Delete a Spot

router.delete('/:id', requireAuth, async (req, res, next) => {
  const { user } = req;
  const oneSpot = await Spot.findByPk(req.params.id);

  if (!oneSpot) {
    res.statusCode = 404
    res.json({ 'message': "Spot couldn't be found" })
  }

  if (oneSpot.ownerId !== user.id) {
    // res.statusCode = 403;
    // res.json({ 'message': "Forbidden" })

    //important!!!!!!

    res.statusCode = 403;
    res.json({ 'message': "Forbidden" })
  }

  await oneSpot.destroy();
  res.json({ "message": "Successfully deleted" })
})

// Get all Reviews by a Spot's id
//spots/:id/reviews
router.get('/:id/reviews', async (req, res) => {
  let oneSpot = await Spot.findByPk(req.params.id)
  if (!oneSpot) {
    res.statusCode = 404
    res.json({ 'message': "Spot couldn't be found" })
  }



  const reviews = await Review.findAll({
    where: {
      spotId: req.params.id
    },
    include: [
      {
        model: User,
        attributes: ['id', 'firstName', 'lastName']
      },
      {
        model: ReviewImage,
        attributes: ['id', 'url']
      }
    ]
  })

  let reviewList = [];
  reviews.forEach(review => {
    reviewList.push(review.toJSON());
  })
  if (reviewList.length < 1) {
    reviewList.push(null);
  }
  res.json({ Reviews: reviewList })
})


const createReviewChecker = (req, res, next) => {
  const { review, stars } = req.body;
  const errors = [];
  if (stars & (stars > 5 || stars < 1)) {
    errors.push('Stars must be an integer from 1 to 5');
  }
  if (errors.length > 0) {
    const err = new Error(errors)
    err.statusCode = 400
    return next(err)
  }
  next()
}


//create a Review for a Spot based on the Spot's id
//post /spots/:id/reviews
router.post('/:id/reviews', requireAuth, createReviewChecker, async (req, res, next) => {
  const { review, stars } = req.body;
  const { user } = req;
  let oneSpot = await Spot.findByPk(req.params.id);
  if (!oneSpot) {
    res.statusCode = 404
    res.json({ 'message': "Spot couldn't be found" })
  }

  const targetReview = await Review.findAll({
    where: {
      spotId: req.params.id
    }
  })

  let reviewList = [];
  targetReview.forEach(review => {
    reviewList.push(review.toJSON());
  })

  if (reviewList.length >= 1) {
    const err = new Error('User already has a review for this spot');
    err.statusCode = 403
    return next(err)

  }

  const newReview = await Review.create({
    spotId: req.params.id,
    userId: user.id,
    review: review,
    stars: stars
  })
  res.statusCode = 201;
  res.json(newReview)
})

//Get all Bookings for a Spot based on the Spot's id
// GET /spots/:id/bookings
router.get('/:id/bookings', requireAuth, async (req, res) => {
  const { user } = req;

  let oneSpot = await Spot.findByPk(req.params.id)
  if (!oneSpot) {
    res.statusCode = 404
    res.json({ 'message': "Spot couldn't be found" })
  }

  let bookings = await Booking.findAll({
    where: {
      spotId: req.params.id
    },
    attributes: ['id', 'spotId', 'userId', 'startDate', 'endDate', 'createdAt', 'updatedAt'],
    include: [
      {
        model: User,
        attributes: ['id', 'firstName', 'lastName']
      },
      {
        model: Spot,
        attributes: ['ownerId']
      }
    ]
  })

  let bookingList = [];
  bookings.forEach(booking => {
    bookingList.push(booking.toJSON());
  })

  bookingList.forEach(booking => {
    if (user.id != booking.Spot.ownerId) {
      delete booking.id;
      delete booking.userId;
      delete booking.createdAt;
      delete booking.updatedAt;
      delete booking.User;
      delete booking.Spot;
    } else {
      delete booking.Spot;
    }
  })
  res.json({ Bookings: bookingList })
})




//Create a Booking from a Spot based on the Spot's id
//post /spots/:id/bookings
router.post('/:id/bookings', requireAuth, async (req, res) => {
  const { startDate, endDate } = req.body;
  const { user } = req;
  let oneSpot = await Spot.findByPk(req.params.id);

  if (!oneSpot) {
    res.statusCode = 404
    res.json({ 'message': "Spot couldn't be found" })
  }

  const oneSpotPOJO = oneSpot.toJSON();
  if (oneSpotPOJO.ownerId == user.id) {
    res.statusCode = 403;
    res.json({ 'message': "Forbidden" })
  }

  const conflictBooking = await Booking.findOne({
    where: {
      [Op.or]: [
        { startDate: { [Op.between]: [startDate, endDate] } },
        { endDate: { [Op.between]: [startDate, endDate] } }
      ]
    }
  })
  if (conflictBooking) {
    res.statusCode = 403;
    return res.json({
      message: "Sorry, this spot is already booked for the specified dates",
      errors: {
        startDate: "Start date conflicts with an existing booking",
        endDate: "End date conflicts with an existing booking"
      }
    })
  }

  const newBooking = await Booking.create({
    spotId: req.params.id,
    userId: user.id,
    startDate: startDate,
    endDate: endDate
  })
  res.statusCode = 201;
  res.json(newBooking)
})


module.exports = router;

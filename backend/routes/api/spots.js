const express = require('express');
const router = express.Router();
const { Spot, SpotImage, Review, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

//Get all Spots
router.get('/', async (req, res) => {
  const allSpots = await Spot.findAll({
    include: [{
      model: SpotImage,
      attributes: ['url', 'preview'],
      // limit: 1
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
      if (image.preview === true) {
        spot.previewImage = image.url;
      }

    })
    if (!spot.previewImage) {
      spot.previewImage = null;
    }

    delete spot.SpotImages;
  })

  res.json({ Spots: spotList })
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

  res.json({ Spots: spotList })
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


const createSpotChecker = (req, res, next) => {
  const { address, city, state, country, lat, lng, name, description, price } = req.body;
  const errors = [];
  // if (!address) errors.push('Street address is required');
  // if (!city) errors.push('City is required');
  // if (!state) errors.push('State is required');
  // if (!country) errors.push('country is required');
  // if (!description) errors.push('description is required');
  // if (!price) errors.push('price is required');
  if (lat & (lat < -90 || lat > 90)) {
    errors.push('Latitude is not valid');
  }
  if (lng < -180 || lng > 180) {
    errors.push('Longitude is not valid');
  }
  if (errors.length > 0) {
    const err = new Error(errors)
    err.statusCode = 400
    return next(err)
  }
  next()
}


// Create a Spot
router.post('/', requireAuth, createSpotChecker, async (req, res) => {
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
  const { id } = req.params;
  const { user } = req;
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
//Edit a Spot
//PUT /spots/:id
// Spot must belong to the current user

router.put('/:id', requireAuth, createSpotChecker, async (req, res) => {
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

router.delete('/:id', async (req, res, next) => {
  const { user } = req;
  const oneSpot = await Spot.findByPk(req.params.id);

  if (!oneSpot) {
    res.statusCode = 404
    res.json({ 'message': "Spot couldn't be found" })
  }

  if (oneSpot.ownerId !== user.id) {
    res.statusCode = 403;
    res.json({ 'message': "Forbidden" })
  }

  await oneSpot.destroy();
  res.json({ "message": "Successfully deleted" })



})



module.exports = router;

const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { Booking, Review, Spot, ReviewImage, SpotImage, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// Get all of the Current User's Bookings
// bookings/current
router.get('/current', requireAuth, async (req, res, next) => {
  const { user } = req;
  const bookings = await Booking.findAll({
    attributes: ['id', 'spotId', 'userId', 'startDate', 'endDate', 'createdAt', 'updatedAt'],
    where: {
      userId: user.id,
    },

    include: [
      {
        model: Spot,
        attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price'],
        // include: [
        //   {
        //     model: SpotImage,
        //     attributes: ['url', 'preview']
        //   }
        // ]
      }
    ]
  });
  // console.log(bookings);
  let bookingList = [];
  let spotImageList = []   //del
  bookings.forEach(booking => {
    bookingList.push(booking.toJSON());
    spotImageList.push(booking.spotId)  //del
  });

  // bookingList.forEach(booking => {
  //   booking.Spot.SpotImages.forEach(image => {
  //     if (image.preview === true) {
  //       booking.Spot.previewImage = image.url;
  //     }
  //   })
  //   if (!booking.Spot.previewImage) {
  //     booking.Spot.previewImage = null;
  //   }
  //   delete booking.Spot.SpotImages;
  // })
  // res.json({ Bookings: bookingList })


  const spotImages = await SpotImage.findAll({
    where: {
      spotId: { [Op.in]: spotImageList }
    },
    attributes: ['url', 'preview', 'spotId']
  })

  let imagesList = [];
  spotImages.forEach(image => {
    imagesList.push(image.toJSON());
  });
  // console.log(imagesList)

  bookingList.forEach(booking => {
    if (imagesList.length < 1) {
      booking.Spot.previewImage = null;
    } else if (imagesList) {
      imagesList.forEach(image => {
        if (image.preview == true && image.spotId == booking.spotId) {
          booking.Spot.previewImage = image.url;
        } else if (image.preview == false && image.spotId == booking.spotId) {
          booking.Spot.previewImage = null;
        }
      })
    }
  })
  res.json({ Bookings: bookingList })
})


//Edit a Booking
//PUT /bookings/:id
//Body validation errors come from db level(model file)
router.put('/:id', requireAuth, async (req, res, next) => {
  const { startDate, endDate } = req.body;
  const { user } = req;

  let oneBooking = await Booking.findOne({
    where: {
      id: req.params.id
    }
  })

  if (!oneBooking) {
    res.statusCode = 404
    return res.json({ 'message': "Booking couldn't be found" })
  }
  const oneBookingPOJO = oneBooking.toJSON();
  // console.log(oneBookingPOJO);
  //Redundant work, already define in model file
  //Body validation errors come from db level(model file)
  if (oneBookingPOJO.endDate < oneBookingPOJO.startDate) {
    res.statusCode = 400;
    return res.json("endDate cannot come before startDate")
  }

  let currentDate = new Date();

  let newStartDate = new Date(oneBookingPOJO.startDate);

  if (newStartDate < currentDate) {
    res.statusCode = 403;
    return res.json({ 'message': "Past bookings can't be modified" })
  }

  if (oneBooking.userId != user.id) {
    res.statusCode = 403;
    return res.json({ 'message': "Forbidden" })
  }
  //test conflictBooking
  const conflictBooking = await Booking.findOne({
    where: {
      [Op.or]: [
        { startDate: { [Op.between]: [startDate, endDate] } },
        { endDate: { [Op.between]: [startDate, endDate] } }
      ],
      spotId: oneBooking.spotId
    }
  })
  // console.log(conflictBooking)
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




  let setObj = {}
  if (startDate) {
    setObj.startDate = startDate;
  }
  if (endDate) {
    setObj.endDate = endDate;
  }
  oneBooking.set(setObj);
  await oneBooking.save();
  res.json(oneBooking);

})

///delete bookings/:id
//Delete a Booking
router.delete('/:id', requireAuth, async (req, res, next) => {
  const { user } = req;
  const oneBooking = await Booking.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Spot,
        attributes: ['ownerId']
      }
    ]
  });
  if (!oneBooking) {
    res.statusCode = 404
    return res.json({ 'message': "Booking couldn't be found" })
  }
  let newoneBookingPOJO = oneBooking.toJSON();
  console.log(newoneBookingPOJO)

  if (newoneBookingPOJO.Spot.ownerId !== user.id && newoneBookingPOJO.userId !== user.id) {
    console.log(newoneBookingPOJO.Spot.ownerId, newoneBookingPOJO.userId)

    res.statusCode = 403;
    return res.json({ 'message': "Forbidden" })
  }
  let currentDate = new Date();
  let startDate = new Date(newoneBookingPOJO.startDate);
  let endDate = new Date(newoneBookingPOJO.endDate);
  if (startDate < currentDate && endDate > currentDate) {
    res.statusCode = 403;
    return res.json({
      message: "Bookings that have been started can't be deleted."
    })
  }

  await oneBooking.destroy();
  res.json({ "message": "Successfully deleted" })


})

module.exports = router;

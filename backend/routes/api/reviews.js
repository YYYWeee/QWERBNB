const express = require('express');
const router = express.Router();
const { Review, Spot, ReviewImage, SpotImage, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


//Get all Reviews of the Current User
router.get('/current', requireAuth, async (req, res, next) => {
  const { user } = req;
  const reviews = await Review.findAll({
    include: [
      {
        model: Spot,
        attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price'],
        include: [
          {
            model: SpotImage,
            attributes: ['url', 'preview']
          }
        ]
      },
      {
        model: ReviewImage,
        attributes: ['id', 'url']
      },
      {
        model: User,
        attributes: ['id', 'firstName', 'lastName']
      }
    ],
    where: {
      userId: user.id
    }
  });
  let reviewList = [];
  reviews.forEach(review => {
    reviewList.push(review.toJSON());
  });

  reviewList.forEach(review => {
    review.Spot.SpotImages.forEach(image => {
      if (image.preview === true) {
        review.Spot.previewImage = image.url;
      }
    })
    if (!review.Spot.previewImage) {
      review.Spot.previewImage = null;
    }
    delete review.Spot.SpotImages;
  })
  res.json({ Reviews: reviewList })
})

//Delete a Review
//delete reviews/:id

router.delete('/:id', requireAuth, async (req, res, next) => {
  const { user } = req;
  const oneReview = await Review.findByPk(req.params.id);
  if (!oneReview) {
    res.statusCode = 404
    res.json({ 'message': "Review couldn't be found" })
  }
  //important!!!!!!
  if (oneReview.userId !== user.id) {
    res.statusCode = 403;
    res.json({ 'message': "Forbidden" })
  }
  await oneReview.destroy();
  res.json({ "message": "Successfully deleted" })
})


//Add an Image to a Review based on the Review's id
//POST reviews/:id/images
router.post('/:id/images', requireAuth, async (req, res, next) => {
  const { url } = req.body;
  const { user } = req;
  const oneReview = await Review.findByPk(req.params.id, {
    include:
      [
        {
          model: ReviewImage
        }
      ]
  });

  if (!oneReview) {
    res.statusCode = 404
    res.json({ "message": "Review couldn't be found" })
  }
  // if (oneReview.userId !== user.id) {
  //   const err = new Error('Forbidden')
  //   err.statusCode = 403
  //   return next(err)
  // }

  const reviewPOJO = oneReview.toJSON();
  if (reviewPOJO.userId !== user.id) {
    const err = new Error('Forbidden')
    err.statusCode = 403
    return next(err)
  }
  let count = 0;
  reviewPOJO.ReviewImages.forEach(image => {
    count += 1;
  })
  if (count >= 10) {
    const err = new Error("Maximum number of images for this resource was reached")
    err.statusCode = 403
    return next(err)
  }

  let newReviewImage = await ReviewImage.create({
    reviewId: req.params.id,
    url: url,
  })
  newReviewImage = newReviewImage.toJSON();
  delete newReviewImage.reviewId;
  delete newReviewImage.updatedAt;
  delete newReviewImage.createdAt;

  res.json(newReviewImage)

})

const validateEditReview = [
  check('review')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Review text is required'),
  check('stars')
    .exists({ checkFalsy: true })
    .isInt({ min: 1, max: 5 })
    .withMessage('Stars must be an integer from 1 to 5'),
  handleValidationErrors
];
///put reviews/1
// Edit a Review
router.put('/:id', requireAuth, validateEditReview, async (req, res, next) => {
  const { review, stars } = req.body;
  const { user } = req;
  let oneReview = await Review.findByPk(req.params.id);
  if (!oneReview) {
    res.statusCode = 404
    res.json({ 'message': "Review couldn't be found" })
  }

  if (oneReview.userId !== user.id) {
    const err = new Error('Forbidden')
    err.statusCode = 403
    return next(err)
  }


  let setObj = {}
  if (review) {
    setObj.review = review;
  }
  if (stars) {
    setObj.stars = stars;
  }
  oneReview.set(setObj);
  await oneReview.save();
  res.json(oneReview);

})



module.exports = router;

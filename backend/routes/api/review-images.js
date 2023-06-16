const express = require('express');
const router = express.Router();
const { Review, Spot, ReviewImage, SpotImage, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');




//Delete a Review Image
//DELETE review-images/:id
router.delete('/:id', requireAuth, async (req, res, next) => {
  const { user } = req;
  const oneReviewImage = await ReviewImage.findByPk(req.params.id, {
    include: [
      {
        model: Review,
        attributes: ['userId']
      }
    ]
  });

  if (!oneReviewImage) {
    res.statusCode = 404
    return res.json({ 'message': "Review image couldn't be found" })
  }
  let oneReviewImagePOJO = oneReviewImage.toJSON();
  if (oneReviewImagePOJO.Review.userId != user.id) {
    res.statusCode = 403;
    return res.json({ 'message': "Forbidden" })
  }


  await oneReviewImage.destroy();
  res.json({ "message": "Successfully deleted" })

})


module.exports = router;

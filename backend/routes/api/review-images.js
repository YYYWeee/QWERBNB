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
  const oneReviewImage = await ReviewImage.findByPk(req.params.id);

  if(!oneReviewImage){
    const err = new Error("Review couldn't be found")
      err.statusCode = 404
      return next(err)
  }

  await oneReviewImage.destroy();
  res.json({ "message": "Successfully deleted" })

})


module.exports = router;

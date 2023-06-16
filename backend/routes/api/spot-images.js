const express = require('express');
const router = express.Router();
const { Review, Spot, ReviewImage, SpotImage, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


//Delete a Spot Image

router.delete('/:id', requireAuth, async (req, res, next) => {
  const { user } = req;
  const oneSpotImage = await SpotImage.findByPk(req.params.id, {
    include: [
      {
        model: Spot,
        attributes: ['ownerId']
      }
    ]
  });

  if (!oneSpotImage) {
    res.statusCode = 404
    return res.json({ 'message': "Spot Image couldn't be found" })
  }
  let oneSpotImagePOJO = oneSpotImage.toJSON();
  if (oneSpotImagePOJO.Spot.ownerId != user.id) {
    res.statusCode = 403;
    return res.json({ 'message': "Forbidden" })
  }
  await oneSpotImage.destroy();
  return res.json({ "message": "Successfully deleted" })


})


module.exports = router;

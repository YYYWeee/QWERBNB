import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import StarRating from "./StarRating";
import {createAReviewThunk} from '../../store/reviews'
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import './index.css';

function PostReviewModal(spotId) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);
  const { closeModal } = useModal();


  const userId = user.id;
  useEffect(() => {
    console.log('PostReviewModal review', review)
    console.log('PostReviewModal stars', stars)
    console.log('PostReviewModal spotId', spotId["id"])
    console.log('PostReviewModal userId',userId)
  }, [review, stars]);



  const handleSubmit = async (e) => {

    let createdReview;
    try {
    // console.log('in the try ',user, spotId, review, stars)
      createdReview = await dispatch(createAReviewThunk(user, spotId, review, stars)) .then(closeModal)

      history.push(`/spots/${spotId.id}`);
    } catch (error) {
      console.log(error);
    }

  };


  return (
    <>
      <div className="review-box">
        <h3 className="title">How was your stay?</h3>
        <textarea
          className="review-input"
          placeholder="Leave your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <StarRating stars={stars} setStars={setStars} />

        <button
          className="button"
          onClick={handleSubmit}
          disabled={review.length < 10 || stars === 0}
        >
          <p className="submit-button">Submit your review</p>
        </button>

      </div>
    </>
  )
}

export default PostReviewModal;


//Create a Review for a Spot based on the Spot's id

// {
//   "review": "This was an awesome spot!",
//   "stars": 5,
// }

// const newReview = await Review.create({
//   spotId: req.params.id,
//   userId: user.id,
//   review: review,
//   stars: stars
// })

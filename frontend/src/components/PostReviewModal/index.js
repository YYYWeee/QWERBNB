import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import StarRating from "./StarRating";
import {createAReviewThunk} from '../../store/reviews'
import { useHistory } from "react-router-dom";


function PostReviewModal(spotId) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);
  // const { closeModal } = useModalContext();
  const spotIdF = spotId['id']
  const userId = user.id;
  useEffect(() => {
    console.log('review', review)
    console.log('stars', stars)
    console.log('spotId', spotId['id'])
    console.log('userId',userId)
  }, [review, stars]);



  const handleSubmit = async (e) => {

    e.preventDefault();
    // const payload = {
    //   spotIdF,
    //   userId,
    //   review,
    //   stars
    // }



    let createdReview;

    try {
    console.log('in the try ',userId, spotIdF, review, stars)
      createdReview = await dispatch(createAReviewThunk(userId, spotIdF, review, stars))
      // createdReview = await dispatch(createAReviewThunk(userId, spotIdF, {review, stars}))
      console.log(spotIdF, userId, review, stars)
      // createdReview = await dispatch(createAReviewThunk(payload))
      history.push(`/spots/${spotIdF}`);
    } catch (error) {
      console.log(error);
    }


  };


  return (
    <>
      <div id="review-box">
        <h3>How was your stay?</h3>
        <textarea
          id="review-input"
          placeholder="leave your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <StarRating stars={stars} setStars={setStars} />

        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={review.length < 10 || stars === 0}
        >
          <p>Submit your review</p>
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

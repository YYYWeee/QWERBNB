import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import StarRating from "./StarRating";
import createAReviewThunk from '../../store/reviews'

function PostReviewModal({ id, spotId }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);
  // const { closeModal } = useModalContext();

  useEffect(() => {
    console.log('review', review)
    console.log('stars', stars)
  }, [review, stars]);



  const handleSubmit = (e) => {
    e.preventDefault();
    // const payload = {
    //   spotId,
    //   user,
    //   review,
    //   stars
    // }




    dispatch(createAReviewThunk(id, spotId ?? id, { review, stars }, user));
    // closeModal();
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

import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import StarRating from "./StarRating";
import createAReviewThunk from '../../store/reviews'

function PostReviewModal({spotId}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);
  // const { closeModal } = useModalContext();



  const handleSubmit = () => {
    dispatch(createAReviewThunk(spotId , { review, stars }, user));
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
          // disabled={review.length < 10 || stars === 0}
        >
          <p>Submit your review</p>
        </button>

      </div>
    </>
  )
}

export default PostReviewModal;

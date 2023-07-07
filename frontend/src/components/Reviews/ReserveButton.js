// import useSpot from "../../../../hooks/useSpot";
// import Rating from "./Rating";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import './ReserveButton.css'
import { getSpotDetailThunk } from "../../store/spots";

function ReserveButton() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let spot = useSelector((state) => state.spots.spot);
  const text = spot.numReviews > 1 ? "reviews" : "review";
  const rating = spot.numReviews > 0 ? '★' + spot.avgStarRating : '★ New';

  //pending
  // useEffect(() => {
  //   dispatch(getSpotDetailThunk(id));
  //   console.log('here@@@@@@@@@@@@@@@@@@@',)
  // }, [spot]);

  return (
    <div className="reserve-container">
      <div className="header">
        <div className="price">
          ${spot.price} night
        </div>
        <div className="rating">
          {rating}
        </div>
        <div className="review-quantity">
          {spot.numReviews ? (<div>{spot.numReviews} {text}</div>) : <div></div>}
        </div>
      </div>
      <button
        className="spot-button"
        onClick={() => alert("Feature coming soon")}
      >
        Reserve
      </button>

    </div>
  );
}

export default ReserveButton;

// import useSpot from "../../../../hooks/useSpot";
// import Rating from "./Rating";
import { useSelector } from "react-redux";

function ReserveBox() {
  const spot = useSelector((state) => state.spots.spot);
  const text = spot.numReviews > 1 ? "reviews" : "review";
  const rating = spot.numReviews > 0 ? spot.avgStarRating : '★';

  return (
    <div id="reserve-container">
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p>
          <span style={{ fontWeight: 600, fontSize: "23px" }}>
            ${spot.price}
          </span>{" "}
          night
        </p>
        <p>
          {rating}
        </p>
      </div>
      <button
        className="spot-button"
        style={{ width: "100%" }}
        onClick={() => alert("Feature coming soon")}
      >
        Reserve
      </button>
    </div>
  );
}

export default ReserveBox;

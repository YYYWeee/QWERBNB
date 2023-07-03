//get all spots

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllSpotsThunk } from "../../store/spots"
import './Spots.css'
// import { useHistory } from "react-router-dom";

function Spots() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.allSpots);

  useEffect(() => {
    dispatch(getAllSpotsThunk());
  }, [dispatch]);

  if (!spots) return null;

  // const handleClick = (id) => {
  //   history.push(`/spots/${id}`);
  // };

  return (
    <>
      <div id="spots-container">
        {spots.map((spot) => {
          return (
            <>
            <></>
              <div className="single-spot-container" key={spot.id}>
                <img
                  className="preview-image"
                  src={spot.previewImage}
                  alt={spot.previewImage}
                  // onClick={handleClick(spot.id)}
                />
                <div className="location_rating">
                  <p className="location">{spot.city}, {spot.state}</p>

                  {spot.avgRating?(<p className="rating"> <i className="fa-solid fa-star"></i>{spot.avgRating}</p>):(<p>New</p>)}
                </div>
                <div className="price">
                  <p>${spot.price} night</p>
                </div>

              </div>
            </>
          );
        }
        )}
      </div>
    </>
  )
}

export default Spots;
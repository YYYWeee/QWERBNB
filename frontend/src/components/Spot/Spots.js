//get all spots

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpotsThunk } from "../../store/spots"
import './Spots.css'
import { useHistory } from "react-router-dom";

function Spots() {
  const history = useHistory();
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.allSpots);

  const handleClicker=(id)=>{
    let path = `/spots/${id}`;
    history.push(path)
  }

  useEffect(() => {
    dispatch(getAllSpotsThunk());
  }, [dispatch]);

  if (!spots) return null;

  return (
    <>
      <div id="spots-container">
        {spots.map((spot) => {
          return (
            <>
              <div className="single-spot-container" key={spot.id}>
                <Link to={`spots/${spot.id}`}>
                  <img
                    className="preview-image"
                    src={spot.previewImage}
                    alt={spot.previewImage}

                  />
                </Link>
                <div className="location_rating" onClick={() => handleClicker(spot.id)}>

                  <p className="location">{spot.city}, {spot.state}</p>

                  {spot.avgRating ? (<p className="rating"> <i className="fa-solid fa-star"></i>{spot.avgRating}</p>) : (<p>New</p>)}
                </div>
                <div className="price" onClick={() => handleClicker(spot.id)}>
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

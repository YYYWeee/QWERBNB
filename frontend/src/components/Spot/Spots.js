//get all spots

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpotsThunk } from "../../store/spots"
import './Spots.css'
import { useHistory } from "react-router-dom";
import Tooltip from "./Tooltip";


function randomPick(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}



function Spots() {
  const history = useHistory();
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.allSpots);

  const handleClicker = (id) => {
    let path = `/spots/${id}`;
    history.push(path)

  }

  useEffect(() => {
    dispatch(getAllSpotsThunk());
  }, [dispatch]);

  if (!spots) return null;

  spots.sort(() => Math.random() - 0.5);
  const shuffledItems = randomPick(spots);



  return (
    <>
      <div id="spots-container">
        {spots.map((spot) => {
          return (
            <>
              <div className="single-spot-container" key={spot.id}>
                <Tooltip content={spot.name} direction='top'>
                  <Link to={`spots/${spot.id}`}>
                    <img
                      className="preview-image"
                      src={spot.previewImage}
                      alt={spot.previewImage}

                    />
                  </Link>
                </Tooltip>
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

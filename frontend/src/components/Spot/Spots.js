//get all spots

import { useEffect } from "react";
// import Tile from "./Tile";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpotsThunk } from "../../store/spots"
import './Spots.css'

function Spots() {
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.allSpots);


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
              <div className="single-spot-container">
                <img
                  className="preview-image"
                  src={spot.previewImage}
                  alt={spot.previewImage}
                />
                <h4>{spot.id}</h4>
                <p>{spot.city}{spot.state}</p>
                <p>{spot.avgRating}</p>
                <p>{spot.previewImage}</p>
                <p>{spot.name}</p>
                <p>{spot.price}</p>

              </div>
            </>

            // <Tile
            //   key={id}
            //   id={id}
            //   price={price}
            //   location={`${city}, ${state}`}
            //   rating={avgRating}
            //   images={previewImage}
            //   name={name}
            // />

          );
        }
        )}
      </div>
    </>
  )
}

export default Spots;

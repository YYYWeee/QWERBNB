import { getCurrentUserSpotsThunk } from "../../store/spots";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './CurrentUserSpots.css'

function CurrentUserSpots() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hello')
    dispatch(getCurrentUserSpotsThunk());
  }, [dispatch]);

  let spots = useSelector((state) => state.spots.allSpots);

  if (!spots) return null;

  return (
    <>
      <div className="header">
        <h2>Manage your spots</h2>
        <div className="create-new-spot-Link">
          {/* <NavLink exact tp='/spots/new'>Create New Spot</NavLink> */}
        </div>
      </div>
      {spots.length === 0 ?
        (
          <h2>You don't have any spots</h2>
        )
        :
        (
          <div className="spots-container">
            {spots.length > 0 && spots.map((spot) => {
              return (
                <>
                  <div className="single-spot-container" key={spot.id}>
                    <img
                      className="preview-image"
                      src={spot.previewImage}
                      alt={spot.previewImage}
                    />
                    <div className="location_rating">
                      <p className="location">{spot.city}, {spot.state}</p>

                      {spot.avgRating ? (<p className="rating"> <i class="fa-solid fa-star"></i>{spot.avgRating}</p>) : (<p>New</p>)}
                    </div>
                    <div className="price">
                      <p>${spot.price} night</p>
                    </div>

                  </div>
                </>
              )

            })}
          </div>
        )
      }
    </>
  )
}
export default CurrentUserSpots;

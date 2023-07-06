import { getCurrentUserSpotsThunk } from "../../store/spots";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import './CurrentUserSpots.css'
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import React from "react";
import EditSpotForm from './EditSpotForm';
import DeleteReviewModal from '../DeleteReviewModal';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';

function CurrentUserSpots() {
  const history = useHistory();
  const dispatch = useDispatch();
  let spots = useSelector((state) => state.spots.allSpots);
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);





  useEffect(() => {
    // console.log('hello')
    dispatch(getCurrentUserSpotsThunk());
  }, [dispatch]);


  if (!spots) return null;


  const handleUpdate = (id) => {
    console.log('spotId', id)
    let path = `/spots/${id}/edit`;
    history.push(path);   //pending: why always redirect the edit page of  newest created spot  page
  };

  return (
    <>
      <div className="header">
        <h2>Manage your spots</h2>
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

                      {!spot.avgRating == null ? (<p className="rating"> <i className="fa-solid fa-star"></i>{spot.avgRating}</p>) : (<p>★New</p>)}
                    </div>
                    <div className="price">
                      <p>${spot.price} night</p>
                    </div>
                    <div className="operation">
                      <button onClick={() => handleUpdate(spot.id)}>

                        update
                      </button>
                      {/* NOW  */}
                      <div className="delete-button">
                        <p>
                          <OpenModalMenuItem
                            itemText="Delete"
                            onItemClick={closeMenu}
                            modalComponent={<DeleteReviewModal id={spot.id} />}
                          />
                        </p>


                      </div>
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

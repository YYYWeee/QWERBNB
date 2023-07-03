import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotDetailThunk } from "../../store/spots";




function SpotDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spots.spot);
  // const user = useSelector((state) => state.session.user);


  useEffect(() => {
    dispatch(getSpotDetailThunk(id));
  }, [dispatch, id]);
  if (!spot) return null;


  return (
    <>

      {/* <div class="header">
        <h1>{spot.name}</h1>
        <h4>{spot.city}, {spot.state},{spot.country}</h4>
      </div>
      <div className="spot-container">
        <div className="img-container">
          <img
            src={spot.SpotImages[0].url}
            alt={spot.SpotImages[0].url}
            className="main-pic"
          />
          {spot.SpotImages[1] && (
            <img
              src={spot.SpotImages[1].url}
              alt={spot.SpotImages[1].url}
              className="sub-pic"
            />
          )}
          {spot.SpotImages[2] && (
            <img
              src={spot.SpotImages[2].url}
              alt={spot.SpotImages[2].url}
              className="sub-pic"
            />
          )}
          {spot.SpotImages[3] && (
            <img
              src={spot.SpotImages[3].url}
              alt={spot.SpotImages[3].url}
              className="sub-pic"
            />
          )}
          {spot.SpotImages[4] && (
            <img
              src={spot.SpotImages[4].url}
              alt={spot.SpotImages[4].url}
              className="sub-pic"
            />
          )}
        </div>
      </div>
 */}


    </>
  )
}
export default SpotDetail;

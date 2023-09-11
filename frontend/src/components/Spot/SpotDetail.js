import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotDetailThunk } from "../../store/spots";
import Review from '../Reviews/Review'
import './SpotDetail.css'
import ReviewButton from '../Reviews/ReviewButton'
import ReserveButton from '../Reviews/ReserveButton'


import ListingMapWrapper from "../ListingMap"
import Home from "../ListingMap"
import { getKey } from '../../store/maps';

function SpotDetail() {

  const { id } = useParams();

  // const ID = parseInt(id)
  const dispatch = useDispatch();
  const key = useSelector((state) => state.maps.key);
  const spot = useSelector((state) => state.spots.spot);
  const user = useSelector((state) => state.session.user);
  const spotLat = useSelector((state) => state.spots.spot.lat);
  const spotLng = useSelector((state) => state.spots.spot.lng);

  useEffect(() => {
    dispatch(getSpotDetailThunk(id)).then(()=>{
      window.scrollTo(0, 0);
    })
  }, [dispatch, id]);


  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

  if (!key) {
    return null;
  }
  //***
  if (!spot.SpotImages) {
    return null;
  }
  // if (!spot) return null;
  // if (!spot.Owner) return null;
  if (!spot || !spot.Owner) return null;


  return (
    <>
      {user ?
        (<div className="parent-container">
          <div className="spot-detail-header">
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
              <div className="right">
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
            <div className="description">
              <div className="name-and-description">
                <h2>Hosted By {spot.Owner?.firstName} {spot.Owner?.lastName}</h2>
                <h4>{spot.description}</h4>
              </div>
              <div className="reserve-button">
                <ReserveButton />

              </div>
            </div>

            <div className="review-container">
              {spot.Owner.id !== user.id && <ReviewButton id={id} />}
              <Review />
            </div>
            <div>

              <div className='location-component'>
                {/* <h1>Where you'll be</h1>
                <h2>{spot.city}, {spot.state}, {spot.country} </h2>
                <p>Lat: {spotLat} Lng: {spotLng}</p> */}

                {/* <ListingMap ownedListing={spot}/> */}
                <div className="listing-page-map">

                  {/* <ListingMapWrapper listings={[spot]} mapOptions={{ center: { lat: spotLat, lng: spotLng }, zoom: 16 }}></ListingMapWrapper> */}
                  <Home spot={spot} apiKey={key} />
                </div>
              </div>

            </div>
          </div>

        </div>) :
        (<div className="parent-container">
          <div className="spot-detail-header">
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
              <div className="right">
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
            <div className="description">
              <div className="name-and-description">

                <h2>Hosted By {spot.Owner?.firstName} {spot.Owner?.lastName}</h2>
                <h4>{spot.description}</h4>

              </div>
            </div>
            <div className="review-container">

              <Review />

            </div>
          </div>
          <div className='location-component'>
            {/* <h1>Where you'll be</h1>
            <h2>{spot.city}, {spot.state}, {spot.country} </h2>
            <p>Lat: {spotLat} Lng: {spotLng}</p> */}

            {/* <ListingMap ownedListing={spot}/> */}
            <div className="listing-page-map">

              {/* <ListingMapWrapper listings={[spot]} mapOptions={{ center: { lat: spotLat, lng: spotLng }, zoom: 16 }}></ListingMapWrapper> */}
              <Home spot={spot} apiKey={key} />

            </div>
          </div>
        </div>

        )}
    </>
  )
}
export default SpotDetail;

import Geocode from "react-geocode"
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSpotDetailThunk } from "../../store/spots";

import './ListingMap.css'



export default function Home({ spot, apiKey }) {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpotDetailThunk(id));
  }, [dispatch, id]);


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map targetSpot={spot} myApiKey={apiKey} />;
}




function Map({ targetSpot, myApiKey }) {
  // const [lat, setLat] = useState(targetSpot.lat);
  // const [lng, setLng] = useState(targetSpot.lng);

  // console.log('lat&lng', lat, lng)

  // if (!targetSpot.lat || !targetSpot.lng) {
  //   let address = targetSpot.address
  //   let city = targetSpot.city
  //   let state = targetSpot.state
  //   let country = targetSpot.country
  //   let fullAddress = targetSpot.address + ' ' + targetSpot.city + ' ' + targetSpot.state + ' ' + country


  //   Geocode.setApiKey(myApiKey)
  //   // console.log('fullAddress!!!!!', fullAddress)
  //   Geocode.fromAddress(fullAddress).then(
  //     (response) => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       setLat(lat.toFixed(3));
  //       setLng(lng.toFixed(3));

  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }


  const center = useMemo(() => ({ lat: targetSpot.lat, lng: targetSpot.lng }), []);
  // const center = useMemo(() => ({ lat: parseFloat(lat), lng: parseFloat(lng)}), []);
  // const center = useMemo(() => ({ lat: lat, lng: lng }), []);

  return (
    <>
      <div className="parent">
        <div className="location-info">
          <div className="location-info-header">
            <h1 className="location-info-title">Where you'll be</h1>
            <h2>{targetSpot.city}, {targetSpot.state}, {targetSpot.country}</h2>
          </div>
        </div>

        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
          <Marker position={center} />
        </GoogleMap>
      </div>


    </>
  );
}

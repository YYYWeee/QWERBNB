import React, { useState, useEffect } from 'react';

import Geocode from "react-geocode"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from "@react-google-maps/api";
import './ListingMap.css'


const containerStyle = {
  width: '90%',
  height: '70vh',
  margin: 'auto',
};


const Home = ({ spot, apiKey }) => {
  // let center;
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: apiKey,
  // });

  // if (!spot.lat || !spot.lng) {
  //   let address = spot.address
  //   let city = spot.city
  //   let state = spot.state
  //   let country = spot.country
  //   let fullAddress = spot.address + ' ' + spot.city + ' ' + spot.state + ' ' + country

  //   Geocode.setApiKey(apiKey)
  //   Geocode.fromAddress(fullAddress).then(
  //     (response) => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       center = {
  //         lat: lat,
  //         lng: lng,
  //       };
  //       console.log('I dont have lng lat', center)

  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );

  // } else {
  //   center = {
  //     lat: spot.lat,
  //     lng: spot.lng,
  //   };
  //   console.log('I  have lng lat', center)

  // }

  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  useEffect(() => {
    if (!spot.lat || !spot.lng) {
      let fullAddress = `${spot.address} ${spot.city} ${spot.state} ${spot.country}`;

      Geocode.setApiKey(apiKey)
      Geocode.fromAddress(fullAddress).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setCenter({ lat, lng });
        },
        (error) => {
          console.error(error);
        }
      );
      console.log('I dont have lng lat', center)
    } else {
      setCenter({ lat: spot.lat, lng: spot.lng });
      console.log('I  have lng lat', center)
      console.log('the type of coordinates',typeof center.lat)
      console.log('the type of coordinates',typeof center.lng)
    }
  }, [spot, apiKey]);

  // position={{lat:list.latitute, lng:list.longitude}}
  return (
    <>
      {isLoaded && (

        < div className='location-info'>
          <div className="location-info-header">
            <h1 className="location-info-title">Where you'll be</h1>
            <h2 className='sub-title'>{spot.city}, {spot.state}, {spot.country}</h2>
            {spot.lat} {spot.lng}
          </div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            // center={center}
            center={{ lat: -34.397, lng: 150.644 }}
            zoom={10}
          >
            {/* <Marker position={center} /> */}
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
          </GoogleMap>
        </div >
      )}
    </>
  );
};

export default React.memo(Home);

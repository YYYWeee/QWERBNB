import { csrfFetch } from "./csrf";

const GET_ALL_SPOTS = "spot/getAllSpots";
const GET_SINGLE_SPOT = "spot/getSingleSpotDetail"


//action creator
const getSpots = (spots) => ({
  type: GET_ALL_SPOTS,
  payload: spots
});

const getSpot = (spot) => ({
  type: GET_SINGLE_SPOT,
  payload: spot
});


// Thunk
export const getAllSpotsThunk = () => async (dispatch) => {
  const res = await csrfFetch("/api/spots");
  const data = await res.json();
  console.log('data', data)
  if (data.Spots) {
    dispatch(getSpots(data.Spots))
  };
};

export const getCurrentUserSpotsThunk = () => async (dispatch) => {
  const res = await csrfFetch("/api/spots/current");
  const data = await res.json();
  // console.log('data',data)
  if (data.Spots) {
    dispatch(getSpots(data.Spots))
  };
}


//pending
export const createNewSpotThunk = (spotData, imageData) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spotData),
  });
  const newSpot = await response.json();
  if (newSpot) {
    return dispatch(addSpotImage(newSpot, imageData));
  }
}
//pending
export const addSpotImage = (spot, image) => async (dispatch) => {

  if (image) {
    spot.SpotImages = [];
    for (let i = 0; i < image.length; i++) {
      if (image.url) {

        const response = await csrfFetch(`/api/spots/${spot.id}/images`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: image[i].url,
            preview: "true",
          }),
        })
        const newImage = await response.json();
        spot.SpotImages.push(newImage);
      }
    }
  }
  dispatch(getSpots(spot));
}

export const getSpotDetailThunk = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${id}`);
  const data = await res.json();
  if (data) {
    dispatch(getSpot(data))
  };

}


//Reducer
const initialState = { allSpots: [], spot: {} };

const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SPOTS:
      console.log('allspots', action.payload)
      return {
        allSpots: action.payload,
        spot: state.spot
      };
    case GET_SINGLE_SPOT:
      return {
        allSpots: state.allSpots,
        spot: action.payload
      }

    default:
      return state;
  }
};

export default spotReducer;

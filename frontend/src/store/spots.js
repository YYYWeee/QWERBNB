import { csrfFetch } from "./csrf";

const GET_ALL_SPOTS = "spot/getAllSpots";



//action creator
const setSpots = (spots) => ({
  type: GET_ALL_SPOTS,
  payload: spots
});

// Thunk
export const getAllSpotsThunk = () => async (dispatch) => {
  const res = await csrfFetch("/api/spots");
  const data = await res.json();

  if (data.Spots) dispatch(setSpots(data.Spots));
};



//Reducer
const initialState = { allSpots: [], spot: {} };

const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SPOTS:
      return { allSpots: action.payload, spot: state.spot };
    default:
      return state;
  }
};

export default spotReducer;

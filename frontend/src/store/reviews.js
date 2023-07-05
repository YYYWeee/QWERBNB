import { csrfFetch } from "./csrf";


const GET_REVIEW = "spot/getAllReviews"
const CREATE_REVIEW = "spot/newReview"
//action creator
const getReviews = (reviews) => ({
  type: GET_REVIEW,
  payload: reviews
});

const createReview = (review) => ({
  type: CREATE_REVIEW,
  payload: review
});

// Thunk
//Get all Reviews by Spot Id
export const getReviewsThunk = (id) => async (dispatch) => {
  const data = await (await csrfFetch(`/api/spots/${id}/reviews`)).json();
  if (data.Reviews) dispatch(getReviews(data.Reviews));
};


export const createAReviewThunk = (id, spotId,review, user) => async (dispatch) => {
  const response = await (
    await csrfFetch(`/api/spots/${id}/reviews`, {
      method: "POST",
      body: JSON.stringify(review),
    })
  ).json();

  if (response) {
    response.User = user;
    dispatch(createReview(response));
  }
};


//review: {}  is reviews made by current user
//reviews:[]  is for Geting all Reviews by Spot Id
const initialState = { review: {}, reviews: [] };

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW:
      return {
        review: state.review,
        reviews: action.payload
      };
    case CREATE_REVIEW:
      return {
        review: state.review,
        reviews: [...state.reviews, action.payload]
      }
    default:
      return state;
  }
};

export default reviewReducer;

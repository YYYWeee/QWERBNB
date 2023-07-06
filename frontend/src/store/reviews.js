import { csrfFetch } from "./csrf";


const GET_REVIEW = "spot/getAllReviews"
const CREATE_REVIEW = "spot/newReview"
//action creator
const getReviews = (reviews) => ({
  type: GET_REVIEW,
  payload: reviews
});

const createReview = (review) => {
  console.log('review', review)
  return {
    type: CREATE_REVIEW,
    payload: review
  }
};

// Thunk
//Get all Reviews by Spot Id
export const getReviewsThunk = (id) => async (dispatch) => {
  console.log('~~~~~~~~~~~id~~~~~~~~',id)
  const data = await (await csrfFetch(`/api/spots/${id}/reviews`)).json();
  if (data.Reviews) dispatch(getReviews(data.Reviews));
};


// export const createAReviewThunk = (userId,spotId,review) => async (dispatch) => {
export const createAReviewThunk = (user, spotId, review, star) => async (dispatch) => {
  console.log('in the thunk',{ user, spotId, review, star})
  // console.log('spotId', spotId['id'])
  // let id = parseInt(spotId['id'])
  // // console.log(typeof(id))  //number
  // console.log('spotId.id', spotId.id)
  // const response = await csrfFetch(`/api/spots/${id}/reviews`, {
  const response = await csrfFetch(`/api/spots/${spotId.id}/reviews`, {


    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ review: review, stars: star }),
  })

  if (response.ok) {
    const newReview = await response.json();
    console.log('newReview', newReview)

    //add user key
    newReview.User = user;
    dispatch(createReview(newReview));
    return newReview;
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
      console.log('action', action)
      return {
        review: state.review,
        reviews: [...state.reviews, action.payload]
      }
    default:
      return state;
  }
};

export default reviewReducer;

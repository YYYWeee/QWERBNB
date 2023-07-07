import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReviewsThunk } from "../../store/reviews";
import {deleteReviewThunk} from "../../store/reviews";

function dateConvert(date) {
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const newDate = new Date(date);
  let y = newDate.getFullYear();
  let m = newDate.getMonth();
  let finalM = month[m];
  return `${finalM},${y}`
}

function Review() {
  const user = useSelector((state) => state.session.user);
  const { id } = useParams();   //spotId
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews); //extract User
  const spot = useSelector((state) => state.spots.spot); //extract avgStarRating
  let unit;

  if (reviews.length === 1) {
    unit = 'review'
  } else if (reviews.length > 1) {
    unit = 'reviews'
  }
  // console.log('reviews.length', reviews.length)
  // console.log('reviews[0]', reviews[0])

  // function isAuthorized(id) {
  //   if (id === user.id) {
  //     return true
  //   }
  // }

  useEffect(() => {
    dispatch(getReviewsThunk(id));
  }, [dispatch, id]);



  if (!reviews) {
    return null;
  }
  // if (!reviews[0]) {
  //   console.log('no reviews')
  //   return null;
  // // }
  // if (!reviews[0].userId) {
  //   return null;
  // }
  // const handleClicker=(id)=>{
  //   let path = `/spots/${id}`;
  //   history.push(path)
  // }

  const handleDelete=(reviewId) => {
    dispatch(deleteReviewThunk(reviewId, id));  //pass reviewid and spot id as arguments
    // closeModal();
  }

  return (
    <>
      {reviews[0] ?
        (<div className="review-container">

          {reviews.length > 0 ?
            (<h2> <i className="fa-solid fa-star"></i> {spot.avgStarRating}  . {reviews.length} {unit} </h2>) : (<h2>new</h2>)
          }

          {reviews.sort((a, b) => {
            const dateA = new Date(a.updatedAt);
            const dateB = new Date(b.updatedAt);
            return dateB - dateA;
          }).map((review) => {
            return (
              <div className="single-review" key={review.id}>
                <div className="name">
                  {review.User.firstName}-{review.User.lastName}
                </div>
                <div className="date">
                  {dateConvert(review.updatedAt)}
                </div>


                <div className="text">
                  <p>{review.review}</p>
                </div>
                <div className="delete-review-button">
                  {review.userId === user.id && <button onClick={()=>handleDelete(review.id,id)} className="delete-review-button">delete</button>}

                </div>

              </div>
            )
          }
          )}

        </div>) : (
          <h2> <i className="fa-solid fa-star"></i>New</h2>
        )
      }
    </>
  )
}
export default Review;

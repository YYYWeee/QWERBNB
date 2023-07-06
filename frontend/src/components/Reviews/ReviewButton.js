import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostReviewModal from '../PostReviewModal';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';

function ReviewButton({ id }) {
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews.reviews);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  console.log('userId', user.id)


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
  const divClassName = "review-post-box" + (showMenu ? "active" : " hidden");



  // if (!reviews) {
  //   return null;
  // }
  // if (!reviews[0]) {
  //   return null;
  // }

  if (reviews[0] !== null) {
    console.log('here')
    // const reviewByCurrentUser = reviews.find((review) => review.User.id === user.id)
    const reviewByCurrentUser = reviews.find((review) => review.userId === user.id)
    if (reviewByCurrentUser) {
      console.log("I have review already")
      return null
    }
  }


  // const reviewByCurrentUser = reviews.find((review) => review.User.id === user.id)
  // if (reviewByCurrentUser) return null




  let action;
  if (reviews[0] == null) {
    action = 'Be the first to post a review!'
  } else {
    action = 'Post a review'
  }



  return (
    <>
      {/* {!reviews ? */}
      {reviews[0] == null ?
        (<div className="post-review-button">
          <p>
            <OpenModalMenuItem
              itemText="Post your review"
              onItemClick={closeMenu}
              modalComponent={<PostReviewModal id={id} />}
            />
          </p>
          <p>{action}</p>

        </div>) :
        (<div className="post-review-button">
          <p>
            <OpenModalMenuItem
              itemText="Post your review"
              onItemClick={closeMenu}
              modalComponent={<PostReviewModal id={id} />}
            />
          </p>
          <p>{action}</p>

        </div>)
      }
    </>
  )
}

export default ReviewButton;

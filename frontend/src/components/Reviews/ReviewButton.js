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



  if (!reviews) {
    return null;
  }
  if (!reviews[0]) {
    return null;
  }

  const reviewByCurrentUser = reviews.find((review) => review.User.id === user.id)
  if (reviewByCurrentUser) return null


  let action;
  if (reviews.length > 0) {
    action = 'Post a review'
  } else {
    action = 'Be the first to post a review!'
  }



  return (
    <>
      {/* <h1>{action}</h1> */}
      <div className="post-review-button">
                <p>
                  <OpenModalMenuItem
                    itemText="How was your stay?"
                    onItemClick={closeMenu}
                    modalComponent={<PostReviewModal id={id} />}
                  />
                </p>

              </div>
    </>
  )
}

export default ReviewButton;

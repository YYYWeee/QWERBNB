import { useState } from "react";
import './StarRating.css';
const StarRating = ({ stars, setStars }) => {
  // const [hovereStar, setHovereStar] = useState(0);
  // const [hover,setHover] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  // function handleRate(star) {
  //   setStars(star);
  // }

  // const handleStarHover = (hovereStar) => {
  //   if (hover) {
  //     setStars(hovereStar);
  //   } else {
  //     setHovereStar(hovereStar);
  //   }
  // };

  return (
    // <div
    //   className="star-rating"
    //   onMouseLeave={() => setHovereStar(0)}
    //   onMouseUp={() => setHover(false)}
    // >
    //   {[1, 2, 3, 4, 5].map((star) => (
    //     <span
    //       key={star}
    //       className={`star ${star <= stars ? "filled" : ""}`}
    //       onClick={() => handleRate(star)}
    //       onMouseEnter={() => handleStarHover(star)}
    //       onMouseDown={() => setHover(true)}
    //     >

    //       {star <= (hover ? stars : hovereStar) ? "★" : "☆"}
    //     </span>
    //   ))}
    // </div>
    <>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={ index <= ((rating && hover) || hover) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;

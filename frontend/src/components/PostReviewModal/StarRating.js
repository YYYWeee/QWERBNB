import { useState } from "react";
import { useEffect } from "react";
import './StarRating.css';
import { FaStar } from "react-icons/fa";

const StarRating = ({ stars, setStars }) => {
  // const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(false);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const controlRate = (rating) => {
    setStars(rating);
  };

  const fixStar = (rating) => {
    if (hover) {
      setStars(rating);
    } else {
      setRating(rating);
    }
  };


  return (
    <>

      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          const currentValue = index + 1;
          return (
            <label>
              <input type='radio'
                name='rating'
                value={currentValue}
                onClick={() => {
                  setRating(currentValue)
                  controlRate(currentValue)
                }} />

              <FaStar className='star' size={20} color={currentValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => {
                  setHover(currentValue)

                }}
                onMouseLeave={() => setHover(null)} />
            </label>
          );
        })}
        <p>rating is {rating}</p>
      </div>
    </>
  );
};

export default StarRating;

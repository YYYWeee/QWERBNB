import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./NewSpotForm.css"
import { createNewSpotThunk } from "../../store/spots";



function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

function NewSpotForm() {
  const history = useHistory();

  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [previewUrl, setPreviewUrl] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    const errorsArray = [];
    if (!country) {
      errorsArray.push("Country is required")
    }
    if (!state) {
      errorsArray.push("State is required")
    }
    if (!city) {
      errorsArray.push("City is required")
    }
    if (!address) {
      errorsArray.push("Street address is required")
    }
    if (description.length < 30) {
      errorsArray.push("Description needs a minimum of 30 characters")
    }
    if (!name) {
      errorsArray.push("Name is required");
    }
    if (!price) {
      errorsArray.push("Price is required");
    }
    if (!previewUrl) {
      errorsArray.push("Preview image is required");
    }

    if (previewUrl && (!isImage(previewUrl))) {
      errorsArray.push("Preview Image URL must end in .png, .jpg, or .jpeg");
    }
    if (image1 && (!isImage(image1))) {
      errorsArray.push("Image1 URL must end in .png, .jpg, or .jpeg");
    }
    if (image2 && (!isImage(image2))) {
      errorsArray.push("Image2 URL must end in .png, .jpg, or .jpeg");
    }
    if (image3 && (!isImage(image3))) {
      errorsArray.push("Image3 URL must end in .png, .jpg, or .jpeg");
    }
    if (image4 && (!isImage(image4))) {
      errorsArray.push("Image4 URL must end in .png, .jpg, or .jpeg");
    }

    setErrors(errorsArray);
  }, [country, address, city, state, description, name, price, previewUrl, image1, image2, image3, image4])


  function handleSubmit(e) {
    e.preventDefault();
    history.push('/');
    const newSpot = {
      country,
      address,
      city,
      state,
      description,
      name,
      price
    };
    const imageData = [
      { url: previewUrl },
      { url: image1 },
      { url: image2 },
      { url: image3 },
      { url: image4 },
    ];

    dispatch(createNewSpotThunk(newSpot, imageData)).then((id) =>
      history.push(`/spots/${id}`)
    );


  }


  return (
    <>
      <div className="form-container">
        <form className='new-spot' onSubmit={handleSubmit}>
          <h2>Create a new Spot</h2>
          <h3>Where's your place located?</h3>
          <h4>Guests will only get your exact address once they booked a reservation.page</h4>
          <label>
            Country
            <input type='text'
              name='country'
              value={country}
              onChange={(e) => setCountry(e.target.value)} />
          </label>
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("Country"))}</p>
          <label>
            Street address
            <input type='text'
              name='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("address"))}</p>
          <label>
            City
            <input type='text'
              name='city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("City"))}</p>
          <label>
            State
            <input type='text'
              name='state'
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("State"))}</p>
          <h3>Describe your place to guests</h3>
          <h4>Mention the best features of your space, any special amentities like fast wifi or parking, and what you love about the neighborhood.</h4>
          <textarea
            id='desscription'
            name='desscription'
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("Description"))}</p>
          <h3>Create a title for your spot</h3>
          <h4>Catch guests' attention with a spot title that highlights what makes your place special.</h4>
          <label>
            <input type='text'
              name='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("Name"))}</p>


          <h3>Set a base price for your spot</h3>
          <h4>Competitive pricing can help your listing stand out and rank higher in search results.</h4>
          <label>
            $
            <input type='text'
              name='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("Price"))}</p>
          <h3>Liven up your spot with photos</h3>
          <label>
            <h4>Submit a link to at least one photo to publish your spot.</h4>
            <input type='text'
              name='previewUrl'
              value={previewUrl}
              onChange={(e) => setPreviewUrl(e.target.value)}
            />
          </label>
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("Preview"))}</p>
          <label>
            <input type='text'
              name='image1'
              value={image1}
              onChange={(e) => setImage1(e.target.value)}
            />
          </label>
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("Image1"))}</p>
          <label>
            <input type='text'
              name='image2'
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
            />
          </label>
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("Image2"))}</p>
          <label>
            <input type='text'
              name='image3'
              value={image3}
              onChange={(e) => setImage3(e.target.value)}
            />
          </label>
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("Image3"))}</p>
          <label>
            <input type='text'
              name='image4'
              value={image4}
              onChange={(e) => setImage4(e.target.value)}
            />
          </label>
          <p className='errors'>{errors.filter((validation) =>
            validation.includes("Image4"))}</p>

          <button
            type="submit"
            // if it is true, button  will be disabled
            disabled={errors.length > 0}
          >
            Submit
          </button>
        </form>

      </div>
    </>
  )
}

export default NewSpotForm;



// {
//   "address": "123 Disney Lane",
//   "city": "San Francisco",
//   "state": "California",
//   "country": "United States of America",
//   "lat": 37.7645358,
//   "lng": -122.4730327,
//   "name": "App Academy",
//   "description": "Place where web developers are created",
//   "price": 123
// }

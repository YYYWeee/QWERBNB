import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import {deleteSpotThunk } from '../../store/spots'

function DeleteReviewModal(spotId) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  console.log('now',spotId.id)


  const confirmDelete = () => {
    dispatch(deleteSpotThunk(spotId.id));
    closeModal();
  }
  return (
    <>
      <div id="delete-box">
        <h3>Confirm Delete</h3>
        <h4>Are you sure you want to remove this spot from the listings?</h4>
        <button
          className="Yes-delete-button"
        onClick={confirmDelete}
        >Yes (Delete Spot)</button>

        <button
          className="No-delete-button"
          onClick={closeModal}
        >No (Keep Spot)</button>

      </div>



    </>
  )
}

export default DeleteReviewModal;

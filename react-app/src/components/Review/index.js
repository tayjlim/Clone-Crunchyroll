import React, { useState, useEffect } from "react";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import EditReview from '../EditReview'
import { useSelector, useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";

const Review = ({review,user})=> {

    const dispatch = useDispatch()
    const {closeModal} = useModal();

    console.log('what is a single review do ---------', review)
    // if user.id == review.userId render the button if not do null if no user, do null
    if(!review) return null

    else 
    return (
        <div> 
            <h2>{review.user.username}</h2>
            <p>{review.review}</p>
            {(!user) ? null :
            (user.id == review.userId) ? 
            (<OpenModalMenuItem
              className = 'editReview'
              itemText = 'Edit Review!'
              modalComponent={<EditReview review = {review} user = {user} key = {review.id}/>}
              />) : null}
        </div>
    )
}

export default Review;
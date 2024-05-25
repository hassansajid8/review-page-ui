"use client"

import React from 'react'
import Rating from 'react-star-rating-component';
import { useState } from 'react';

function StarRating(){
    const [rating, setRating] = useState(0);
    const handleStarClick = (nextValue, prevValue, name) => {
       setRating(nextValue);
    }
    return (
       <div>
          <Rating
             value={rating}
             onStarClick={(nextValue, prevValue, name) => handleStarClick(nextValue, prevValue, name)}
             starCount={5}
             starColor={'#ffb400'}
             emptyStarColor={'#ccc'}
             renderStarIcon={() => <i className='iconoir-star-solid'></i>}
          />
       </div>
    )
 }
 export default StarRating;
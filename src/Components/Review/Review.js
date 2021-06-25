import React from 'react';

import img11 from '../../image/sincerely-media-Agr1YTrzYPI-unsplash.jpg';
import img12 from '../../image/cdc-cdfv65CldQQ-unsplash.jpg';
import img13 from '../../image/fernando-cferdo-kyjUvRNAgoE-unsplash.jpg';
import { Carousel } from 'react-bootstrap';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviews=[
    {
        name: 'Tanbir Pathan',
        review: 'Social proof can push customers who are on the fence about buying a product to make a purchase (or consider other alternatives). While there are many different​ ...',
        image: img11
    },

    {
        name: 'Najmul Pathan',
        review: 'Social proof can push customers who are on the fence about buying a product to make a purchase (or consider other alternatives). While there are many different​ ...',
        image: img12
    },

    {
        name: 'Irfan Pathan',
        review: 'Social proof can push customers who are on the fence about buying a product to make a purchase (or consider other alternatives). While there are many different​ ...',
        image: img13
    }
]

const Review = () => {
    return (
        <div className='text-center  '>
            <h1>Customer Review</h1>
            <p>make your experience with us</p>
            <div className='d-flex justify-content-center  '>

            {
               Reviews.map(review=><ReviewItem review={review} ></ReviewItem>)
            }
            </div>
           
        </div>
    );
};

export default Review;
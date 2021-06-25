import React from 'react';
import { Card } from 'react-bootstrap';


const ReviewItem = ({review}) => {
    return (
        
             <div className='col-md-4 position-relative text-center text-sm-start text-md-start text-lg-start text-xl-start '>
<div  >
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={review.image} />
 

   <p>
   Name: {review.name}       
       </p>
  <p> {review.review}  </p>  
  
  
    </Card>

        </div>

        </div>
        
       
    );
};

export default ReviewItem;
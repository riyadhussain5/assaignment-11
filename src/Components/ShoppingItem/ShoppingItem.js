import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ShoppingItem = ({item}) => {
    return (
        <div>
<div  className='col-md-4 position-relative text-center text-sm-start text-md-start text-lg-start text-xl-start '>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.image} />
 

   <p>
   Name: {item.name}       
       </p>
  <p> Price:${item.price}  </p>  
    <button>Buy Now</button>
  
    </Card>

        </div>

        </div>
        
    );
};

export default ShoppingItem;
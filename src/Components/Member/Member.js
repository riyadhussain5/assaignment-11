import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


const Member = ({member}) => {
    return (
        <div className='col-md-3 text-center text-sm-start text-md-start text-lg-start text-xl-start '>
            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={member.image}/>
  <Card.Body>
    <Card.Title>{member.Name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> ++{member.Number}</ListGroupItem>
   
  </ListGroup>
  
</Card>
            </div>
        </div>
    );
};

export default Member;
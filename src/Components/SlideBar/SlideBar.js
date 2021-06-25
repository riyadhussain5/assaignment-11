import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../image/zoe-schaeffer-ERVDg4pXUBE-unsplash.jpg';
import img2 from '../../image/elaine-casap-qgHGDbbSNm8-unsplash.jpg';
import img3 from '../../image/markus-spiske-sFydXGrt5OA-unsplash.jpg';

const SlideBar = () => {
    return (
      <div>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Dream Big</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Work Hard</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mr-10"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>live like a king</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


      </div>
       
        
    );
};

export default SlideBar;
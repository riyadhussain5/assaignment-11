import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faMobile
  } from "@fortawesome/free-brands-svg-icons";
import './Navbar.css';
import Navbar2 from '../Navbar2/Navbar2';
import BackiMAGE from '../BackiMAGE/BackiMAGE';




const Navbar = () => {
    return (
        <div>
<div className="social-container">
<a href="https://www.youtube.com/c/jamesqquick"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" /> 

</a> 







            <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Mobile number : +8801789918991</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Email: riyadhussain456@gmail.com</a>
  </li>
  
</ul>

</div>
<Navbar2></Navbar2>
<BackiMAGE></BackiMAGE>

        </div>
        
    );
};

export default Navbar;
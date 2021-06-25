import React from 'react';
import Appointment from '../Appointment/Appointment';
import Benifits from '../Benifits/Benifits';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


import Navbar from '../Navbar/Navbar';
import Review from '../Review/Review';
import Shopping from '../Shopping/Shopping';


import SlideBar from '../SlideBar/SlideBar';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Benifits></Benifits>
            <SlideBar></SlideBar>
            <Team></Team>
            <Shopping></Shopping>
            <Review></Review>
            <Blogs></Blogs>
            <Appointment></Appointment>
            <Contact></Contact>
            <Footer></Footer>
    
            
            
            
            
        </div>
    );
};

export default Home;
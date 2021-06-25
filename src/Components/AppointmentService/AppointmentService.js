import React, { useState } from 'react';
import AppointmentDetail from '../AppointmentDetail/AppointmentDetail';
import BookAppointment from '../BookAppointment/BookAppointment';
import Footer from '../Footer/Footer';
import Navbar2 from '../Navbar2/Navbar2';

const AppointmentService = () => {
    const [selected, setSelected] = useState(new Date());
    const handleDatechange = (date)=>{
        setSelected(date);
    }
    return (
        <div>
            <Navbar2></Navbar2>
            <AppointmentDetail handleDatechange={handleDatechange}></AppointmentDetail>
            <BookAppointment date={selected}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default AppointmentService;
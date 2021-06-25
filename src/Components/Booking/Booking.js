import React, { useState } from 'react';

import AppointmentForm from '../AppointmentForm/AppointmentForm';


const Booking = ({booking , select}) => {

    

        const [modalIsOpen, setIsOpen] = useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      
    
      function closeModal() {
        setIsOpen(false);
      }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className='card-body text-center'>
                    <h5 className='card-title text-bramd'>{booking.topic}</h5>
                    <h6>{booking.time}</h6>

                   <p>{booking.seat} SPACES AVAILABLE</p>
                   <button onClick={openModal} className='btn btn-brand text-uppercase'>Book now</button>
                   <AppointmentForm  modalIsOpen={modalIsOpen} appointment={booking.topic} closeModal={closeModal} date={select}></AppointmentForm>
                 

                </div> 

            </div>
           
        </div>
    );
};

export default Booking;
import React from 'react';
import Booking from '../Booking/Booking';

const BookingData = [
    {
        topic: 'Roof Garden',
        time: '8.00 AM - 9.00 AM',
        seat: 10,

    },
    {
        topic: 'Interior Garden',
        time: '10.00 AM - 11.00 AM',
        seat: 10,

    },

    {
        topic: 'Office Garden',
        time: '5.00 PM - 6.30 AM',
        seat: 10,

    },
    {
        topic: 'Home Garden',
        time: '8.00 AM - 9.00 AM',
        seat: 10,

    },
    {
        topic: 'Interior Garden',
        time: '10.00 AM - 11.00 AM',
        seat: 10,

    },

    {
        topic: 'Office Garden',
        time: '5.00 PM - 6.30 AM',
        seat: 10,

    }
]

const BookAppointment = ({date}) => {
    
    return (
        <div>
           
            <section >
            <h2 className='text-center text-brand mb-5'>Available appointment on {date.toDateString()} </h2>
            <div className='row'>
{
    BookingData.map(booking=> <Booking  booking={booking} select={date}></Booking>)
}
            </div>
            </section>
        </div>
    );
};

export default BookAppointment;
import React from 'react';
import tree from '../../image/cytonn-photography-vWchRczcQwM-unsplash.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
const AppointmentDetail = ({handleDatechange}) => {
    
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Appointment <br/> Starts Here</h1>
                <Calendar
        onChange={handleDatechange}
        value={new Date()}
      />
              
            </div>
            <div className="col-md-6">
                <img src={tree} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default AppointmentDetail;
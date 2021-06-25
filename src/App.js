import  React  from "react";
import './App.css';
import Switch from 'react-router-dom'


import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";



import Home from './Components/Home/Home';


import AppointmentService from './Components/AppointmentService/AppointmentService';




function App() {
 
  return (
    <div className='app'>


   <Router>
     <Switch>
       <Route  exact path ='/'>
         <Home></Home>
         </Route>

       <Route path ='/appointment'>
         <AppointmentService></AppointmentService>
         </Route>

       

     </Switch>
     </Router>
   
    </div>

  );
}

export default App;

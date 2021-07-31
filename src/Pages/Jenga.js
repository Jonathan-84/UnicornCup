import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import JengaPic from '../Assets/Images/jenga.jpg'; // gives image path


class Jenga extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Jenga</h1>
         <img src={JengaPic} alt="Stock Jenga" className="photos" />
          <p className='explText'>Enter event description</p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Jenga;

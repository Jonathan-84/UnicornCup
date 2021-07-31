import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import YogaPic from '../Assets/Images/yoga.jpg'; // gives image path


class Yoga extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Yoga: Who Falls Least</h1>
        <img src={YogaPic} alt="Yoga with Adriene 30 days of Yoga" className="photos" />
          <p className='explText'>Enter event description</p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Yoga;

import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import TheCup from '../Assets/Images/TheCup.jpg'; // gives image path


class History extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>The Prize ...</h1>
       <img src={TheCup} alt="The Cup We Play For" className="photos" />
          <p className='explText'>Enter event description</p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default History;
import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import UnoPic from '../Assets/Images/Uno.jpg'; // gives image path


class Uno extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Uno</h1>
          <img src={UnoPic} alt="Deck of Toy Story Uno" className="photos" />
          <p className='explText'>Enter event description</p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Uno;

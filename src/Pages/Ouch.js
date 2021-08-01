import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
//import MScott from '../Assets/Images/ouch.gif'; // gives image path


class Ouch extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Ouch! Name that Toy</h1>
   {/*}      <img src={MScott} alt="Deck of Toy Story Uno" className="photos" />*/}
         <p className='explText'><span className='events'>Events Origins and Rules: </span> An experience familiar to many
         parents was the inspiration for this event. <span>
         <ul>
           <li>You're in the kitchen making dinner, step down and Ouch</li>
           <li> You're walking laundry to the washer, step down and Ouch!</li>
           <li>You're hopping along any happy bunny trail, step down and Ouch! </li>
         </ul>
         </span>
         That "Ouch!" is all too familiar. This event captures that in a more controlled, less paninful form. The children
         will place an object in specific location, completely covered, and will not provide any hints to the contestants.
         The contestants will then be able to step down and have 3 attempts to guess the object. This will be done in a best of 
         3 series.
         

 </p>
      <p className='explText'><span className='events'>Results:</span> Will update upon completion.
       </p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Ouch;

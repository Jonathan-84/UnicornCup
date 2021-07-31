import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import MScott from '../Assets/Images/ouch.gif'; // gives image path


class Ouch extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Ouch! Name that Toy</h1>
         <img src={MScott} alt="Deck of Toy Story Uno" className="photos" />
          <p className='explText'>Enter event description</p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Ouch;

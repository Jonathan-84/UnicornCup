import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import Shaggy from '../Assets/Images/shaggy.gif'; // gives image path


class Sammy extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Best Sandwich</h1>
        <img src={Shaggy} alt="Deck of Toy Story Uno" className="photos" />
          <p className='explText'>Enter event description</p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Sammy;

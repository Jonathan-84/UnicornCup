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
       <p className='explText'><span className='events'>Tournament: </span> The past 1.5 years have brought challenges 
       and upheaval to everyone. Our household has been no different. We've looked for distractions from all of these challenges.
       The desire for fun, humor, and togetherness has led to the birth of this Tournament which we intend to make a tradition. 
       
       <br></br>
       <br>
       </br>Why name it the Unicorn Cup? Why not? Our kids help us to appreciate the fun and fanciful, which 
       embodies the spirit of the games.


 </p>
      <p className='explText'><span className='events'>The Prize:</span> While the Unicorn Cup will remain the prize,
      it's expected that the Cup will take many forms (much like Doctor Who). In this section, we will track those many forms
      of the Unicorn Cup.
       </p>
            <br>
            </br>
            <br></br>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default History;
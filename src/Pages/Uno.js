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
          <p className='explText'><span className='events'>Events Origins and Rules: </span> Like many, Uno provides a brief and easy game for family 
          enjoyment, making it perfect for a Cup staple. No need to explain how to play Uno, their instructions do that. For the purpose,
          of the Cup, the winner will be decided by a best of three format.
        </p>
      <p className='explText'><span className='events'>Results:</span> Llamaphones swept both games in this event. Llamaphones was in the driver 
      seat most of the contest with Hippopposites only getting to call "Uno" once before promptly receiving a Draw 4 card. 
       </p>
       <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Uno;

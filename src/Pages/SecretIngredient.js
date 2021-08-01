import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import IronChef from '../Assets/Images/IronChef.jpg'; // gives image path


class SecretIngredient extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>The Secret Ingredient Is ...</h1>
          <img src={IronChef} alt="Iron Chef America Logo" className="photos" />
          <p className='explText'><span className='events'>Events Origins and Rules: </span> Much as we'd refer to Jeopardy as a "Couple's Rite of Passage",
          Iron Chef America was treated the same way in our house. Before watching the awesome food being made by Chef Morimoto, we'd guess the Secret 
          Ingredient. Over the years, Llamaphones has had an unprecented run. Naturally it would become sport a for this prestigous Cup. This event is broken into 3 rounds, 
          or 3 episodes, and the one with the correct guess- wins the round.   
        </p>
      <p className='explText'><span className='events'>Results:</span> This event ended in a draw. After 3 episodes, neither contestant guessed right, and since 
      the contestants have lives (at this point you may be debating that), they decided to call it a draw. The closest either contestant came was when they guess the Secret Ingredient
      but were off by an episode.
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
export default SecretIngredient;

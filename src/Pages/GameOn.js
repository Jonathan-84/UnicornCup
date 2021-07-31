import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
//import UnoPic from '../Assets/Images/Uno.jpg'; // gives image path


class GameOn extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Game On</h1>
        {/*}  <img src={UnoPic} alt="Deck of Toy Story Uno" className="photos" />*/}
        <p className='explText'><span className='events'>Events Origins and Rules: </span> It could not be a Robinson 
        tournament without a video game event. The challenge can be deciding the way to best keep competitors fairly matched
        especially with Hippopposites video game experience. With that experience in mind, Injustice 2: Legenedary Edition
        was chosen as the game for the competition. The game had never been played by either challenger. In an effort to minimize
        muscle memory for Hippopposites, an additional handicap was decided by him. Hippopposites was to play on a difficulty 
        level higher and he couldn't use Raiden or Sub-Zero. Each match, the competitors would chose a new fighter for themselves.
        They would both fight the same AI character and the first to lose, loses the event. </p>
      <p className='explText'><span className='events'>Results:</span> After multiple matches where Hippopposites, barely snuck
      by and Llamaphones' Girl Power strategy was crushing the competition. The competitors then increased their difficulty
      levels from Easy and Medium to Medium and Hard. A misstep by Hippopposites, choosing Firestorm, and lack of button 
      mashing skill was no match for the unexpected buttom mashing prowess of Llamaphones. In Llamaphones post competition cool down, she 
      proved her dominance to be more than a fluke, going undefeated on Medium.</p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default GameOn;

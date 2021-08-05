import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import Donald from '../Assets/Images/donald.gif'; // gives image path


class BTS extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Bed Time Stealth</h1>
          <img src={Donald} alt="Deck of Toy Story Uno" className="photos" />
        <p className='explText'><span className='events'>Events Origins and Rules: </span> Inspired by the nightly ritual
        that many parents understand, sneaking past your kids room when bedtime starts. It seems that children have mastered
        the art of stall tactics, and anything is better than bed. 
        <br>
        </br>
        <br>
        </br>
        This event will take place around the start of bedtime. 
        Each contestant will make 3 passes by the kids' bedrooms. 1) the opposite direction 2) adjacent to their rooms 3) 
        passing in front of their rooms. If your name, or mom/dad, is accurately called, then you get 0 points on that pass.
        If you are not identified, then you get 1 point.
        Then it's the other contestant's turn, unless the previous contestant was accurately identified during their turn.
        (since it is almost guaranteed that the children will call the fist contestant's name, skewing results). The one with the most
        points after their 3 passes will win. A tiebreaker is TBD.  

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
export default BTS;

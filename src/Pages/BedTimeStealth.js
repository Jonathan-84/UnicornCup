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
        This event will take place around the start of bedtime. 
        Each contestant will make 3 passes by the judges's bedrooms. 
        <span>
         <ul>
           <li> 1. Opposite direction from their rooms</li>
           <li> 2. Turn down the adjacent hallway</li>
           <li> 3. Pass in front of their rooms </li>
         </ul>
         </span>
  
        If your name, or mom/dad, is accurately called, then you get 0 points on that pass.
        If you are not identified, then you get 1 point.
        Then it's the other contestant's turn, unless the previous contestant was accurately identified during their turn.
        (since it is almost guaranteed that the children will call the fist contestant's name, skewing results). The one with the most
        points after their 3 passes will win. A tiebreaker is TBD.  

 </p>
      <p className='explText'><span className='events'>Results:</span> Llamaphones won with 3 points, since Hippopposites 2. 
      Each contestant exhibited ninja like stealth as they completed their first 2 passes. The third and final pass, right
      in front of the judges' rooms, was the deciding round. After Hippopposites was called on his own turn, he was called for again
      as Llamaphones completed their round... even though the little judge could see who passed.
       </p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default BTS;

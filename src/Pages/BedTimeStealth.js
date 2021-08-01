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
        the art of stall tactics, and anything is better than bed. This event will take place around the start of bedtime. 
        Each contestant will make 3 passes by the kids' bedroom. 1) the opposite direction 2) adjacent to their room 3) 
        passing in front of their rooms. If your name, or mom/dad, is accurately called, then you get 0 points on that pass.
        If you are not identified, then you get 1 point.
        The next contestant then takes their 3 passes, unless the previous contestant was accurately identified on their passes
        (since it is almost guranteed that the children will call that individual's name, skewing results). The one with the most
        points after their 3 passes will win. A tiebreak is TBD.  

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

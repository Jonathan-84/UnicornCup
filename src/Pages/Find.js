import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import Kairi from '../Assets/Images/Kairi.jpg'; // gives image path


class Find extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Where Did You Put My ...</h1>
        <img src={Kairi} alt="Kairi from KH keychain" className="photos" />
        <p className='explText'><span className='events'>Events Origins and Rules: </span> This event was inspired 
        by the everyday challenge faced by parents with young kids. 
        
        <br></br>
        <br></br> {/* tweak the font appearance */}
        <span> <p className='block-quote'> These questions are familiar to many parents:
          Where did you put my keys?, Where did you hide my wallet?, What did you do with my [insert important item here]?</p></span>
        <br>
        </br>
        <br></br> 
        The children will hide a far less important item in a specific room- filled with their toys. 
        They will hide the object (Kingdom Hearts Kairi keychain) while both contestants are out of the room, then leave the room to stand quietly with the 
        next contestant. This is meant to prevent hints. The first contestant then presses the stop watch and begins their search. The clock stops
        when they find the object. Contestant 1 then makes sure that the children put the object in the same location for the next contestant- to ensure equal 
        difficulty. Contestant 2 takes their turn. 
        </p>
      <p className='explText'><span className='events'>Results:</span> After an event misfire, where the youngest hid the object
      and practically told Hippopposites where the object is, the object was hidden again. After the false-start, Hippopposites searched
      the room, influenced by the false-start hiding place... in the middle of the floor under toys, that is where Hippopposites started.
      Eventually he shifted focus to the toy chest, the actual hiding place, wrapping up his turn at 1 minute 30 second mark. Next it was Llamaphones
      turn, the item was put back into the same hiding place, and the contest began. Llamaphones went right to the chest, while Hippopposites was sweating 
      bullets, but she moved on from the chest without finding the item. After passing Hippopposite's time, the event was called. It appeared
      that the event was decided by Llamaphones confusion over which Kingdom Hearts keychain was used, thinking it was the Riku keychain not the Kairi one.  </p>
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
export default Find
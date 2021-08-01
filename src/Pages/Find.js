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
        by the everyday challenge that the parents of young kids face. Most parents have uttered these words at least 
        oncee: "where did you put my keys", "where did you hide my wallet", "what did you do with my [insert important item here]". 
        For this event, the children were instructed to hide a far less important item in a specific room- filled with their toys. 
        The children are to hide the object (Kingdom Hearts Kairi keychain) while both contestants are out of the room, then leave the room to stand quietly with the 
        next contestant. This is meant to prevent hints. The first contestant then presses the stop watch and begins their search. The clock stops
        when they find the object. They then make sure that the children put the object in the same location for the next contestant- to ensure even 
        difficulty.
        </p>
      <p className='explText'><span className='events'>Results:</span> After an event misfire, where the youngest hid the object
      and practically told Hippopposites where the object is, the object was hidden again. After the false-start, Hippopposites searched
      the room, influenced by the fale-start hiding place... in the middle of the floor under toys, that is where Hippopposites started.
      Eventually he shifted focus to the toy chest, the actual hiding place, and finding it at the 1 minute 30 second mark. Next it was Llamaphones
      turn, the item was put back into the same hiding place, and the contest began. Llamaphones went right to the chest, while Hippopposites was sweating 
      bullets, but she moved on from the chest without finding the item. After passing Hippopposites time, the event was called. It appeared
      that the event was decided by Llamaphones confusion over which Kingdom Hearts keychain it was, thinking it was the Kingdom Hearts Riku keychain not the Kairi one.  </p>
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
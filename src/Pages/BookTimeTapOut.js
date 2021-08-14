import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import Books from '../Assets/Images/BookTapOut.jpg'; // gives image path


class BTTO extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Book Time Tap Out</h1>
         <img src={Books} alt="Books from regulation" className="photos" />
        <p className='explText'><span className='events'>Events Origins and Rules: </span> From a generation blessed to have <span>
          <a href="https://www.readingrainbow.org/" target="_blank" rel='noreferrer'>Reading Rainbow</a></span>, there is no doubt
          about the importance of reading and the power of a good story. That said, as many parents know, it's possible to have
          too much of a good thing. Reading is often that good thing for us. The same stories over and over again, one book after the next.
          Reading becomes a feat of endurance. This event embodies that reading marathon. Each contestant will keep reading until 
          they cannot anymore, reading the same books, in the same order. The contestant that makes it further will win the point. In the case
          of a mid-event delay, the event will be broken into "regulation" and overtime.  

 </p>
      <p className='explText'><span className='events'>Results:</span> The event is still in progress. Regulation consists
      of 8 books, various reading levels and topics to provide a great experience for the judges. Hippopposites has commpleted 
      regulation while Llamaphones has yet to enter the book gauntlet. 
       </p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default BTTO;

import React, {Component} from 'react';
import TurtleTossPic from '../Assets/Images/TurtleToss.jpg'; // gives image path


class TurtleToss extends Component {
 
  

  render() {

    

    return (
      <>
      <h1 className="title ">Turtle Toss</h1>
      <img src={TurtleTossPic} alt="Upright Turtle Bean Bag" className="photos" />
      <p className='explText'><span className='events'>Events Origins and Rules: </span>In the Turtle Toss portion of the 
      Bean Bag Toss category, the bean bag target is vertical and located 15ft away. The 
      event is broken into 3 sets, best total score each set wins the set. </p>
      <p className='explText'><span className='events'>Results:</span> The Turtle Toss was swept by Hippopposites, but it was close.
      Both set 1 and 2 were won by only 2 points.</p>
      <br></br>
      <br></br>
      <br></br>

      </>
    
    )}
}
  export default TurtleToss;


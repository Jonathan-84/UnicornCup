import React, {Component} from 'react';
import TurtleTossPic from '../Assets/Images/TurtleToss.jpg'; // gives image path


class TurtleToss extends Component {
 
  

  render() {

    

    return (
      <>
      <h1 className="title ">Turtle Toss</h1>
      <img src={TurtleTossPic} alt="Upright Turtle Bean Bag" className="photos" />
      <p className='explText'>Enter event description</p>
      <br></br>
      <br></br>
      <br></br>

      </>
    
    )}
}
  export default TurtleToss;


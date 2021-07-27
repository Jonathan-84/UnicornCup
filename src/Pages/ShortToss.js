import React, {Component} from 'react';
import BeanBag from '../Assets/Images/BeanBagToss.jpg'; // gives image path


class ShortToss extends Component {
  

  render() {

    

    return (
      <>
      
      <h1 className="title ">Short Toss</h1>
      <img src={BeanBag} alt="Lay down bean bag" className="photos" />
      <p className='explText'>Enter event description</p>
      <br></br>
      

      </>
    
    )}
}
  export default ShortToss;


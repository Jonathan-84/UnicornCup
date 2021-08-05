import React, {Component} from 'react';
import BeanBag from '../Assets/Images/BeanBagToss.jpg'; // gives image path


class ShortToss extends Component {
  

  render() {

    

    return (
      <>
      
      <h1 className="title ">Short Toss</h1>
      <img src={BeanBag} alt="Lay down bean bag" className="photos" />
      <p className='explText'><span className='events'>Events Origins and Rules: </span>Seems like tossing bean bags are the new American Past Time. Naturally
      it has become a Unicorn Cup event. In this event, the bean bag target is laying down and located 15ft away. The 
      event is broken into 3 sets, best total score each set wins the set. </p>
      <p className='explText'><span className='events'>Results:</span> It was a clean sweep for Llamaphones. After a close set 1, where the 
        point difference was 6, set 2 was not even close. </p>
        <br>
            </br>
            <br></br>
           
         

      </>
    
    )}
}
  export default ShortToss;


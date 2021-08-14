import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import BeanBag from '../Assets/Images/BeanBagToss.jpg'; // gives image path


class LongToss extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Long Toss</h1>
          <img src={BeanBag} alt="Lay down bean bag" className="photos" />
          <p className='explText'><span className='events'>Events Origins and Rules: </span>Seems like tossing bean bags are the new American Past Time. Naturally
      it has become a Unicorn Cup event. In the long event, the bean bag target is laying down and located 18ft away. The 
      event is broken into 3 sets, the contestant with the highest score will win the set. </p>
      <p className='explText'><span className='events'>Results:</span> This event was won by Hippopposites after 3 closely fought sets. After Llamaphones
      edged out the set 1 vitory, Hippopposites won the next 2. While set 2 was won by a wide margin, the 3rd and deciding set was won
      by only 2 points.</p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default LongToss;

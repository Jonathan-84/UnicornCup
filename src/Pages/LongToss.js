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
      event is broken into 3 sets, best total score each set wins the set. </p>
      <p className='explText'><span className='events'>Results:</span> This event was won by Hippopposites after 3 tough fought sets. After Llamaphones
      edged out the set 1 vitory, Hippopposites won the next 2. While set 2 was won by a wide margin, the 3rd and deciding set was decided
      by only 2 points.</p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default LongToss;
/*
The fetch itself works, and extracted JSON, fiddling with the format to better map the information and 
use it below. Not to mention, this would better allow me to use 

const baseUrl= 'https://api.nasa.gov/planetary/apod';
  const api_key= process.env.REACT_APP_GOVT_API_KEY;


  fetch(`${baseUrl}?api_key=${api_key}`)
    .then(response => response.json())
    .then(response => {
  console.log (response.hdurl, response.explanation);

     I believe the above link was the right one, need to find how to return the 
      link-- ran into request issues, too many while testing state
       console.log(response.originator.name)
    })
    .catch(err => {
      console.log(err);
    });

    
    return (
      <>
      <h1>Home</h1>
      <p> NASA is the bees knees.
        </p>
        <div className="pic-day">
          <p>Picture Goes Here</p>
      
        </div>


      </>
    );
    }
  export default Home;
*/

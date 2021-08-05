import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import TheCup from '../Assets/Images/TheCup.jpg'; // gives image path


class History extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>The Prize ...</h1>
       <img src={TheCup} alt="The Cup We Play For" className="photos" />
       <p className='explText'><span className='events'>Tournament: </span> The past 1.5 years have brought challenges 
       and upheaval to everyone. Our household has been no different, forcing us more inward out of necessity while also 
       providing us greater strength. With the increased family, a blessing for sure, we've sought ways to find fun and 
       distraction from the realities that we're all facing. The idea of fun, humor, and togetherness has led to the birth
       of this Tournament which we intend to make a tradition. 
       
       <br></br>
       <br>
       </br>Why name is it the Unicorn Cup? Why not? As we learn from our children,
       you can enjoy majesty, beauty, whimsy, and just plain Awesomeness! Honestly, it's trully amazing when you get to
       see the world through their eyes. Squealing for a Skellington Jack decoration one moment and choosing a Unicorn ballon to 
       celebrate your four legged family members birthday the next.

 </p>
      <p className='explText'><span className='events'>The Prize:</span> While the Unicorn Cup will remain the prize,
      it's expected that the Cup will take many forms (much like Doctor Who). In this section, we will track the many forms
      of the Unicorn Cup.
       </p>
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
export default History;
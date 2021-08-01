import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import JengaPic from '../Assets/Images/jenga.jpg'; // gives image path


class Jenga extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Jenga</h1>
         <img src={JengaPic} alt="Stock Jenga" className="photos" />
         <p className='explText'><span className='events'>Events Origins and Rules: </span> The past 1.5 years have cemented the importance of 
         delicately balancing responsibilities and roles- often through addition and subtraction. Jenga is a simple and fast game that 
         represents that concept. There are no tricky rules here. The contestants will follow the rules of Jenga in a best of 3
         series.
 </p>
      <p className='explText'><span className='events'>Results:</span> Will update upon completion.
       </p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Jenga;

import React, {Component} from 'react';
import '../App.css';
import Torch from '../Assets/Images/Torch.jpg'; // gives image path


class Home extends Component {
   
    render() {
 
        return (
          <>
         
          <h1 className='title'>Welcome</h1>
          <img src={Torch} alt="The Cermonial Unicorn Cup Torch" className="photos" />
          <p className='explText'>Explanation of the Unicorn Cup and its competitors.
          </p>

          
            <br>
            </br>
            <br></br>
            <br></br>
</>
       )
   }
        }
export default Home;


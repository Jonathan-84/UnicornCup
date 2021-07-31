import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import JeopardyPic from '../Assets/Images/jeopardy.jpg'; // gives image path


class Jeopardy extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Jeopardy</h1>
        <img src={JeopardyPic} alt="Jeopardy Logo" className="photos" />
          <p className='explText'>Enter event description</p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Jeopardy;

import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';


class LongToss extends Component {
 
    render() {

   
        return (
          <>
          <div>
          <h1 className='title'>Long Toss</h1>
          <p className='explText'>Enter event description</p>
    
            </div>
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

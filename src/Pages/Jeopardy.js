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
        <p className='explText'><span className='events'>Events Origins and Rules: </span> Inspired by a "couple's rite of passage", 
        that most couple's have done at some point in their relationship, the contestants sat down and played along with an episode of Jeopardy. 
        A random episode was selected, Season 37 Episode 217, which was guest hosted by the awesome LeVar Burton. The rules were simple:
        you only got one attempt, the first to answer got the point(s)- 1 point in first round and 2 points in second round, and there was no
        penalty for wrong answers. 
        </p>
      <p className='explText'><span className='events'>Results:</span> The event started strong with a couple of rights answers for both contestants.
      That didn't last long, soon enough Llamaphones took control, with her excellent auditory processing speed and wizadry with the "Nerve" category 
      questions. In Round 2, Hippopposites mounted a mini-comeback but Llamaphone's steady performance ensured victory. </p>
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
export default Jeopardy;

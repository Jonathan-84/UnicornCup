import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import Shaggy from '../Assets/Images/shaggy.gif'; // gives image path


class Sammy extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Best Sandwich</h1>
        <img src={Shaggy} alt="Shaggy (scooby doo) making a sandwich" className="photos" />
        <p className='explText'><span className='events'>Events Origins and Rules: </span> In a child approved feat of 
        culinary skill, this event will be a Peanut Butter and Jelly sandwich making contest. The contestants will make a
        traditional Peanut Butter and Jelly sandwich but with a small twist, they will need to add their secret ingredient.
        There are no restrictions on the ingredient and the contestants do not need to use the same ingredient, nor do they
        need to use a different ingredient. The judges will then determine which they enjoyed most. The point will then go to
        the winner.

 </p>
      <p className='explText'><span className='events'>Results:</span> The fluid standards from both judges, led to 
      initial confusion and controversy, but Hippopposites won by the slimmest of margins. After choosing their secret ingredients, from
      the closet and refrigerator, the sandwiches were presented to the judges. In classic form, the judges chose the first
      one that they bit into or chose the one they thought a specific contestant made. It took the rephrasing of judging criteria before
      the youngest judge flipped their vote- capturing Hippopposites victory.       </p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Sammy;

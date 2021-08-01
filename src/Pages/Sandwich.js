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
      <p className='explText'><span className='events'>Results:</span> Will update upon completion.
       </p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Sammy;

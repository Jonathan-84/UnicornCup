import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import IronChef from '../Assets/Images/IronChef.jpg'; // gives image path


class SecretIngredient extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>The Secret Ingredient Is ...</h1>
          <img src={IronChef} alt="Iron Chef America Logo" className="photos" />
          <p className='explText'>Enter event description</p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default SecretIngredient;

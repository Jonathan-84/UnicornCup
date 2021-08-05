import React, {Component} from 'react';
import { Link } from 'react-router-dom';

/* Put in Tables and Link to Event descriptions which will appear on the main Window
*/

class CupTables extends Component {
 


 
  
  

  render() {

    return (
      <>
   
      <h1 className='title'>Unicorn Cup Tables</h1>
      <p className='nav-subtitle '> The event's winner will receive a point.</p>
      <br></br>
      <table class="table nav-text ">
  <tr className='table-header'>
    <th>Event</th>
    <th>Llamaphones</th>
    <th>Hippopposites</th>
  </tr>
  <tr>
  <td><Link to={"/ShortToss"} className="nav-text">Short Toss</Link></td>
    <td >1</td>
    <td >0</td>
  </tr>
  <tr>
  <td><Link to={"/LongToss"} className="nav-text">Long Toss</Link></td>
    <td >0</td>
    <td>1</td>
  </tr>
  <tr>
  <td><Link to={"/KiteFlying"} className="nav-text">Kite Flying</Link></td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
  <td><Link to={"/TurtleToss"} className="nav-text">Turtle Toss</Link></td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
  <td><Link to={"/Uno"} className="nav-text">Uno</Link></td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
  <td><Link to={"/SecretIngredient"} className="nav-text">Secret Ingredient</Link></td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
  <td> <Link to={"/BTS"} className="nav-text">Bed Time Stealth</Link></td>
    <td>TBD</td>
    <td>TBD</td>
  </tr>
  <tr>
  <td><Link to={"/GameOn"} className="nav-text">Game On</Link></td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
  <td><Link to={"/Sammy"} className="nav-text">Best Sandwich</Link></td>
    <td>TBD</td>
    <td>TBD</td>
  </tr>
  <tr>
  <td><Link to={"/BTTO"} className="nav-text">Book Time Tap Out</Link></td>
    <td>TBD</td>
    <td>TBD</td>
  </tr>
  <tr>
  <td><Link to={"/Find"} className="nav-text">Find It</Link></td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
  <td><Link to={"/Jeopardy"} className="nav-text">Jeopardy</Link></td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
  <td><Link to={"/Yoga"} className="nav-text">Yoga</Link></td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
  <td><Link to={"/Jenga"} className="nav-text">Jenga</Link></td>
    <td>TBD</td>
    <td>TBD</td>
  </tr>
  <tr>
  <td><Link to={"/Ouch"} className="nav-text">Ouch!</Link></td>
    <td>TBD</td>
    <td>TBD</td>
  </tr>
</table>
  <br>
  </br>
  <br></br>
  <br></br>
  

            
      </>
    );
}
}

export default CupTables;
    


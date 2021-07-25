import React, {Component} from 'react';
import { Link } from 'react-router-dom';

/* Put in Tables and Link to Event descriptions which will appear on the main Window
*/

class CupTables extends Component {
 


 
  
  

  render() {

    return (
      <>
      <br></br>
      <h1 className='title'>Unicorn Cup Tables</h1>
      <br></br>
      <table class="table">
  <tr>
    <th>Event</th>
    <th>LlamaPhones Pts</th>
    <th>Hippopposites Pts</th>
  </tr>
  <tr>
    <Link to={"/ShortToss"} className="nav-text"><td>Short Toss</td></Link>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
  <Link to={"/LongToss"} className="nav-text"><td>Long Toss</td></Link>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
  <Link to={"/KiteFlying"} className="nav-text"><td>Kite Flying</td></Link>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
  <Link to={"/TurtleToss"} className="nav-text"><td>Turtle Toss</td></Link>
    <td>0</td>
    <td>1</td>
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
    


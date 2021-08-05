import React, {Component} from 'react';
import Owl from '../Assets/Images/owlkite.jpg'; // gives image path

class KiteFlying extends Component {
 
  

  render() {

    

    return (
      <>
      <h1 className="title ">Kite Flying</h1>
      <img src={Owl} alt="owl kite" className="photos" />
      <br></br>
      <p className='explText'><span className='events'>Events Origins and Rules: </span>The Littlest one loves a
      good kite-flying, but can the competitors live up to his high and sometimes fluid standards. Based on the
      little one's subjective view, of who flew the kite better, the winner was selected.  </p>
      <p className='explText'><span className='events'>Results:</span> Llamaphones won this event quickly, but not 
      without some controversy. Initially both competitors were named winners due to the judge's fluid style. There can
      only be one winner though, so the replay was needed, the judge initially granted victory to Llamaphones
      and the first judgement is the one that counts.  </p>
      <br>
            </br>
            <br></br>

      </>
    
    )}
}
  export default KiteFlying;


import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import YogaPic from '../Assets/Images/yoga.jpg'; // gives image path


class Yoga extends Component {
 
    render() {

   
        return (
          <>
          
          <h1 className='title'>Yoga: Who Falls Least</h1>
        <img src={YogaPic} alt="Yoga with Adriene 30 days of Yoga" className="photos" />
        <p className='explText'><span className='events'>Events Origins and Rules: </span> A little mindfulness and fitness has
        never hurt anyone. While the family has been enjoying doing <span><a href="https://cosmickids.com/" target="_blank" rel='noreferrer'>Cosmic Kids Yoga
        </a></span> together, that won't do for 2 grown adults. No, the yoga source of choice is <span><a href="https://yogawithadriene.com/" target="_blank" rel='noreferrer'>Yoga with Adriene
        </a></span>. As the contestants have progressed through her 30 days of Yoga program, there have been the clear "
        that's crazy talk" moments. So this competition was born, complete one of her Yoga sessions without falling or
        resetting your position. The contestant with the higher number of falls or resets loses. 

 </p>
      <p className='explText'><span className='events'>Results:</span> The Day was chosen at random and the contestants nearly
      nailed it. Though Hippopposites was muttering under his breath for some core exercises, it was his lone reset that decided
      decided the competition. Llamaphones won with 0 falls/resets vs Hippopposites 1 fall/reset.
       </p>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Yoga;

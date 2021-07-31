import React, {Component} from 'react';
import '../App.css';
import Torch from '../Assets/Images/Torch.jpg'; // gives image path
import { Chart, registerables } from 'chart.js';



class Home extends Component {
   
  componentDidMount() {

    const ctx = document.getElementById("myChart");

    Chart.register(...registerables);

    new Chart(ctx, {
      type: 'bar',
   data: {
       datasets: [{
           label: "Team's Total",
           data: [0, 5, 3, 0, 14,],
           borderColor: ["Green", "Red"],
           backgroundColor: ["Green", "Red"],
           // this dataset is drawn below
           order: 1
       }, {
           label: 'Clinch',
           data: [9, 9, 9, 9, 9, 9, 9],
           borderColor: 'Purple',
           type: 'line',
           // this dataset is drawn on top
           order: 0,
           borderDash     : [0,6], 
           
borderCapStyle : 'round', 
       }],

       labels: ['','Llamaphone', 'Hippopposites','']
   
}

});
        
}
  


    render() {

        return (
          <>
         
          <h1 className='title'>Welcome</h1>
          <img src={Torch} alt="The Cermonial Unicorn Cup Torch" className="photos" />
          <p className='explText'>The inaugural Unicorn Cup kicked off on July 25th, 2021. Each Olympic year, 
          the Robinson household will do battle in feats of skill, intelligence, luck, and all together whimsy. 
          The start of this year's competition was marked with a wonderfully tropical candle as contestants were announced. 
          This year's contestants are my wife (team Llamophones) and I (team Hippopposites).
          </p>
          <div>
          <canvas id="myChart" width="400" height="400"></canvas>
</div>
          <div>
</div>

          
            <br>
            </br>
            <br></br>
            <br></br>
</>
       )
   }
        }
export default Home;


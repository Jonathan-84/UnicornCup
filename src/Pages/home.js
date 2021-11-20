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
           label: "Team Total",
           data: [0, 8, 4, 0, 14,],
           borderColor: ["Green", "Red"],
           backgroundColor: ["Green", "Red"],
           // this dataset is drawn below
           order: 1
       }, {
           label: 'Magic Number',
           data: [8, 8, 8, 8, 8, 8, 8],
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
          The start of this year's competition was marked with a wonderfully tropical candle as contestants were announced - 
    my wife (team Llamaphones) and I (team Hippopposites).
          </p>
          <p className='explText'> This year's team names are inspired by 2 awesome grammar focused, children's books: <span><a href="https://www.barnesandnoble.com/w/llamaphones-janik-coat/1126905972?ean=9781419728273" target="_blank" rel='noreferrer'>Llamaphones
        </a></span> and <span><a href="https://www.barnesandnoble.com/w/hippopposites-janik-coat/1105802932?ean=9781419701511" target="_blank" rel='noreferrer'>Hippopposites
        </a></span>.</p>
          <div>
            <h2 className='winner'> Llamaphones wins the Unicorn Cup!!!</h2>
          <canvas id="myChart" width="400" height="400"></canvas>
          <p className='explText'> * Final 2 Events Were Canceled</p>
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


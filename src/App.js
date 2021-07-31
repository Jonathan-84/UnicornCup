import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js'
import Footer from './Components/Footer'
import Home from './Pages/home'
import CupTables from './Components/CupTables'
import ShortToss from './Pages/ShortToss';
import LongToss from './Pages/LongToss';
import KiteFlying from './Pages/KiteFlying';
import TurtleToss from './Pages/TurtleToss';
import Uno from './Pages/Uno';
import SecretIngredient from './Pages/SecretIngredient';
import BTS from './Pages/BedTimeStealth';
import GameOn from './Pages/GameOn';
import Sammy from './Pages/Sandwich';
import BTTO from './Pages/BookTimeTapOut';
import Find from './Pages/Find';
import Jeopardy from './Pages/Jeopardy';
import Yoga from './Pages/Yoga';
import Jenga from './Pages/Jenga';
import Ouch from './Pages/Ouch';
import History from './Pages/History';

require('dotenv').config()

function App() {
  return (
    <HashRouter  basename={process.env.PUBLIC_URL} >
        <>
          <Header />
          <div className='page-container'>
          <div className='LeftPanel'>
          <CupTables/>
          </div>
          <div className='main body-text'>
          <Switch>
         <Route exact path= {'/home'} component={Home}/>
         <Route exact path= {'/ShortToss'} component={ShortToss}/>
         <Route exact path= {'/LongToss'} component={LongToss}/> 
         <Route exact path= {'/KiteFlying'} component={KiteFlying}/> 
         <Route exact path= {'/TurtleToss'} component={TurtleToss}/> 
         <Route exact path= {'/Uno'} component={Uno}/> 
         <Route exact path= {'/SecretIngredient'} component={SecretIngredient}/> 
         <Route exact path= {'/BTS'} component={BTS}/> 
         <Route exact path= {'/GameOn'} component={GameOn}/> 
         <Route exact path= {'/Sammy'} component={Sammy}/> 
         <Route exact path= {'/BTTO'} component={BTTO}/> 
         <Route exact path= {'/Find'} component={Find}/> 
         <Route exact path= {'/Jeopardy'} component={Jeopardy}/> 
         <Route exact path= {'/Yoga'} component={Yoga}/> 
         <Route exact path= {'/Jenga'} component={Jenga}/> 
         <Route exact path= {'/Ouch'} component={Ouch}/>
         <Route exact path= {'/History'} component={History}/>
        
         <Route render={() => <Redirect to={'/home'} />} />

          </Switch>
          </div>
          </div>
          <div className='footer-size'>
          <Footer/>
          </div>
  
        </>
      </HashRouter>

    );
}

export default App;

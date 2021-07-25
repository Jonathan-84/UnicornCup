import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer'
import Home from './Pages/home'
import CupTables from './Components/CupTables'
import ShortToss from './Pages/ShortToss';
import LongToss from './Pages/LongToss';

require('dotenv').config()

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <>
          <Navbar />
          <div className='page-container'>
          <div className='LeftPanel'>
          <CupTables/>
          </div>
          <div className='main body-text'>
          <Switch>
         <Route exact path= {'/home'} component={Home}/>
         <Route exact path= {'/ShortToss'} component={ShortToss}/>
         <Route exact path= {'/LongToss'} component={LongToss}/> 
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

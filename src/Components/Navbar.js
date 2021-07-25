import React from 'react';
import { Link } from 'react-router-dom';



function Navbar(){

    return (
      <>
                <div className='nav-container'>
                  <div className="header-image">
                    <div className='header-container'>
                  <h2>
                      <Link to={"/Home"} className="nav-text"> Unicorn Cup</Link>
                      </h2>
                <div className='nav-links'>
       {/*      <ul >
                <Link to="/" className="nav-text">Temp</Link>
                        </ul>*/}
                
       <ul>
                <Link to={"/ShortToss"} className="nav-text">Short Toss</Link>
                </ul>
                <ul>
                <Link to={"/LongToss"} className="nav-text">Long Toss</Link>
                </ul>
                </div>
                </div>
                </div>
                </div>
      </>
    );
  };
  
  export default Navbar;
  
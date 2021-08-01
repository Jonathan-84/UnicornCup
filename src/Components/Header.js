import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Images/logo.jpg'; // gives image path



function Header(){

    return (
      <>
      {/* need to fix nav container to make the purple stretch properly*/}
                <div className='nav-container'>


               <div className='header-container'>
                   
                   <div className='hero-links'>
                    <a href={"/Home"}>
          <img  alt="Unicorn Cup logo" src={Logo}  className="hero"/>
          </a>
        <div className="history">
      <button className="nav-button"><Link to={"/History"} className="nav-subtitle"> The Cup's History</Link></button> 
    </div>
              </div>  
                </div>
                </div>
              
              
      </>
    );
  };
  
  export default Header;
  
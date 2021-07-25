import React from 'react';
import { Link } from 'react-router-dom';



function Header(){

    return (
      <>
                <div className='nav-container'>
          
                    <div className='header-container'>
                  <h2>
                      <Link to={"/Home"} className="nav-title"> Unicorn Cup</Link>
                      </h2>
                </div>
                </div>
          
              
      </>
    );
  };
  
  export default Header;
  
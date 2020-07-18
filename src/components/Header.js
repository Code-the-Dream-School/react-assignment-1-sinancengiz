import React from 'react';
import logo from '../images/logo.png'; 

const Header = (props) => {
  return(
    <header id="header_id">
      {/* crate header elements */}
      <img className="logo" src={logo} alt="Logo" />
      <h2>TIC TAC TOE</h2>
    </header>
 
  );
}

export default Header;

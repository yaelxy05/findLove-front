import React from "react";

// Import components
import Button from '../Button'
// Import assets 
import Logo from '../../assets/img/logo/FindLove.png'
// Import css
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header_logo-box">
        <img src={Logo} alt="logo du site" className="header_logo"/>
          </div>
          <div className="header_button-box">
              <Button name="Se connecter" className='header_button'/>
          </div>
    </header>
  );
}

export default Header;

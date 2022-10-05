import React from "react";

// Import components
import Button from '../Button'

function Header() {
  return (
    <header>
      <div className="header_logo-box">
        <img src="" alt="logo du site" />
          </div>
          <div className="header_button-box">
              <Button name="Se connecter" className='header_button'/>
          </div>
    </header>
  );
}

export default Header;

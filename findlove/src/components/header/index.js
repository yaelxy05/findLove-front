import React from "react";
import { NavLink } from "react-router-dom";

// Import components
import Button from "../Button";
import Logo from "../Logo";
// Import css
import "./header.scss";

function Header({ nameLink, nameButton, nameClassButton }) {
  
  return (
    <header className="header">
      <Logo />
      <div className="header_button-box">
        <NavLink to={`/${nameLink}`}>
          <Button name={nameButton} className={`header_button ${nameClassButton}`} />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

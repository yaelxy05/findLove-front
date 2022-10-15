import React from "react";
import { NavLink } from "react-router-dom";

// Import components
import Button from "../Button";
// Import assets
import Logo from "../../assets/img/logo/FindLove.png";
// Import css
import "./header.scss";

function Header({ nameLink, nameButton, nameClassButton }) {
  
  return (
    <header className="header">
      <div className="header_logo-box">
        <img src={Logo} alt="logo du site" className="header_logo" />
      </div>
      <div className="header_button-box">
        <NavLink to={`/${nameLink}`}>
          <Button name={nameButton} className={`header_button ${nameClassButton}`} />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

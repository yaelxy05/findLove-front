import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// Import Components
import Logo from "../../../components/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faUser,
  faMagnifyingGlass,
  faEnvelope,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// Import CSS
import "./naviagtionMobile.scss";

function NavigationMobile({ openMenu, closeMenu, isOpen }) {
  return (
    <>
    <nav className="navigatioMobile">
      <div className="navigationMobile_header">
        <Logo />
        <div className={isOpen ? "navigationMobile_burger--open": "navigationMobile_burger"}   onClick={openMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <div className={isOpen ? "navigationMobile_menu" : "navigationMobile_menu--close" }>
        <div className="naviagtionMobile_cross">
          <FontAwesomeIcon icon={faXmark} onClick={closeMenu}/>
        </div>

        <ul>
          <li onClick={closeMenu}>
            <FontAwesomeIcon icon={faAddressBook} />
            <p>Mes contacts</p>
          </li>
          <li onClick={closeMenu}>
            <FontAwesomeIcon icon={faUser} />
            <p>Mon profil</p>
          </li>
          <li onClick={closeMenu}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>Recherche</p>
          </li>
          <li onClick={closeMenu}>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Mes messages</p>
          </li>
        </ul>
      </div>
      </nav>
    </>
    
  );
}

export default NavigationMobile;

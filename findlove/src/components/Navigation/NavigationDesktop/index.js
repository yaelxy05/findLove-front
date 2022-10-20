import React from "react";

// Import Components
import Logo from "../../../components/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faUser, faMagnifyingGlass, faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";

// Import CSS
import "./navigationDesktop.scss";

function NavigationDesktop() {
  return (
    <nav className="nav_desktop">
      <Logo />
      <ul>
      <li>
          <FontAwesomeIcon icon={faHouse} />
          <p>Accueil</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faAddressBook} />
          <p>Mes contacts</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <p>Mon profil</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <p>Recherche</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Mes messages</p>
        </li>
      
      </ul>
    </nav>
  );
}

export default NavigationDesktop;

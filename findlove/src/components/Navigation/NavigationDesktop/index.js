import React from "react";
import { NavLink } from "react-router-dom";

// Import Components
import Logo from "../../../components/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faUser,
  faMagnifyingGlass,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

// Import CSS
import "./navigationDesktop.scss";

function NavigationDesktop() {
  let activeClassName = "active";
  return (
    <>
      <nav className="nav_desktop">
        <Logo />
        <ul>
          <li>
            <NavLink
              to="/espace-utilisateur/home"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <FontAwesomeIcon icon={faHouse} />
              <p>Accueil</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/espace-utilisateur/contact"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <FontAwesomeIcon icon={faAddressBook} />
              <p>Mes contacts</p>
            </NavLink>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <p>Mon profil</p>
          </li>
          <li>
            <NavLink
              to="/espace-utilisateur/recherche"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p>Recherche</p>
            </NavLink>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Mes messages</p>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationDesktop;

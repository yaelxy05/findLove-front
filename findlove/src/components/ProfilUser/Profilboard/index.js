import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsUp,
  faMessage,
  faHandSpock,
} from "@fortawesome/free-solid-svg-icons";

// Import CSS
import "./profilBoard.scss";

function ProfilBoard() {
  return (
    <section className="profil_dashboard-wrapper">
      <header className="profil_dashboard-header">
        <img src="https://xsgames.co/randomusers/avatar.php?g=male" />

        <p>Yael</p>
      </header>
      <div className="profil_dashboard-infos">
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            Mes Coups de coeur
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faThumbsUp} />
            </span>
            Mes likes
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faHandSpock} />
            </span>
            Mes visites
          </li>
        
        </ul>
      </div>
    </section>
  );
}

export default ProfilBoard;

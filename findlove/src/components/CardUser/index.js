import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsUp,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

function CardUser({ urlPicture, altPicture, name, city, age }) {
  return (
    <div className="profilCatalog_card">
      <img src={urlPicture} alt={altPicture} />
      <div className="profilCatalog_card--midlle">
        <p className="profilCatalog_card--name">{name}</p>
        <span>
          <p>{city}</p>
          <p>{age} ans</p>
        </span>
      </div>

      <div className="profilCatalog_card--footer">
        <span>
          <FontAwesomeIcon icon={faThumbsUp} />
        </span>
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <span>
          <FontAwesomeIcon icon={faMessage} />
        </span>
      </div>
    </div>
  );
}

export default CardUser;

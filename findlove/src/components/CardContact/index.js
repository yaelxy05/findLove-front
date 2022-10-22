import React from "react";

function CardContact({ urlPicture, altPicture, name }) {
  return (
    <div className="cardContact_card">
      <img src={urlPicture} alt={altPicture} />
      <div className="cardContact_card--midlle">
        <p className="cardContact_card--name">{name}</p>
      </div>

      <div className="cardContact--footer">
        <button>Contacter moi</button>
      </div>
    </div>
  );
}

export default CardContact;

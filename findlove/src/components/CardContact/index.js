import React from "react";

function CardContact({ urlPicture, altPicture, name, Description, phone }) {
  return (
    <div className="cardContact_card">
      <header className="cardContact_header">
        <img src={urlPicture} alt={altPicture} />
      </header>

      <div className="cardContact_card--midlle">
        <p className="cardContact_card--name">{name}</p>
        <p className="cardContact_card--phone">{phone}</p>
        <p className="cardContact_card--description">{Description}</p>
      </div>

      <footer className="cardContact--footer">
        <button>Contactez moi</button>
      </footer>
    </div>
  );
}

export default CardContact;

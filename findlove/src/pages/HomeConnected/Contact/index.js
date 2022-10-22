import React from "react";
import CardContact from "../../../components/CardContact";

function Contact() {
  return (
    <div>
      <div className="contact_title">
        <h1>Mes contacts</h1>
      </div>
      <section>
        <div className="contact_card--list">
          <CardContact
            name="lana"
            urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
            altPicture="photo de contact"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;

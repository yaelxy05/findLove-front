import React from "react";

// Import components
import CardContact from "../../../components/CardContact";
import ConversationList from "../../../containers/Conversation";
import Chat from "../../../containers/ToggleMessage";

import "./contact.scss";

function Contact() {
  return (
    <div className="middle_headerConnected">
      <div className="contact">
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
            <CardContact
              name="lana"
              urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
              altPicture="photo de contact"
            />
            <CardContact
              name="lana"
              urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
              altPicture="photo de contact"
            />
            <CardContact
              name="lana"
              urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
              altPicture="photo de contact"
            />
            <CardContact
              name="lana"
              urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
              altPicture="photo de contact"
            />
            <CardContact
              name="lana"
              urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
              altPicture="photo de contact"
            />
            <CardContact
              name="lana"
              urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
              altPicture="photo de contact"
            />
            <CardContact
              name="lana"
              urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
              altPicture="photo de contact"
            />
          </div>
        </section>
      </div>
      <Chat />
      <ConversationList />
    </div>
  );
}

export default Contact;

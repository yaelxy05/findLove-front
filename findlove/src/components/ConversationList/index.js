import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Import Components
import Message from "./message";
// Import CSS
import "./conversationList.scss";

function ConversationList({ isOpenChat, toggleChat }) {
  
  return (
    <aside  className={isOpenChat ? "messenger" : "messenger_inactive"}>
      <header className="messenger_header">
        <h2>Messagerie</h2>
        <FontAwesomeIcon icon={faChevronDown} onClick={toggleChat} />
      </header>
      <div className="messenger_content--box">
        <Message
          name="Jean"
          date="18 octobre"
          message="Je vous remercie 
        Bonne journée 
        Mr HUE Yael
        07-81-28-51-47"
        />
        <Message
          name="Jean"
          date="18 octobre"
          message="Je vous remercie 
        Bonne journée 
        Mr HUE Yaelgrgrggegergerezffezfezfezfez
        fezfezfezfezfez
        zfefezf
        07-81-28-51-47"
        />
        <Message
          name="Jean"
          date="18 octobre"
          message="Je vous remercie 
        Bonne journée 
        Mr HUE Yael
        07-81-28-51-47"
        />
        <Message
          name="Jean"
          date="18 octobre"
          message="Je vous remercie 
        Bonne journée 
        Mr HUE Yael
        07-81-28-51-47"
        />
        <Message
          name="Jean"
          date="18 octobre"
          message="Je vous remercie 
        Bonne journée 
        Mr HUE Yael
        07-81-28-51-47"
        />
        <Message
          name="Jean"
          date="18 octobre"
          message="Je vous remercie 
        Bonne journée 
        Mr HUE Yael
        07-81-28-51-47"
        />
      </div>
    </aside>
  );
}

export default ConversationList;

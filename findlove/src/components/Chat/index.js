import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

// Import CSS
import "./chat.scss"

function Chat({ isOpenMessage, toggleMessage }) {
    console.log(isOpenMessage)
  return (
      <div className={isOpenMessage ? "chat" : "chat_inactive"}>
          <header className="chat_header">
              <h3>name</h3>
              <FontAwesomeIcon icon={faXmark} onClick={toggleMessage} />
          </header>
          <div className="chat_middle">
              
          </div>
          <footer className='chat_footer' aria-label='Ecrire un message'>
              <input type="text" />
              <FontAwesomeIcon icon={faPaperPlane}/>
          </footer>
    </div>
  )
}

export default Chat

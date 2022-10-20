import React from "react";

function message({ name, date, message }) {
  return (
    <div className="messenger_wrapper">
      <div className="messenger_conversation">
        <img
          src="https://xsgames.co/randomusers/avatar.php?g=female"
          alt=""
          className="messenger_avatar"
        />
        <div className="messenger_content">
          <div className="messenger_name-time">
            <h3>{name}</h3>
            <time>{date}</time>
          </div>
          <div className="messenger_row--conversation">
            <p className="messenger_message">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default message;

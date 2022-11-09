import React from "react";

import ConversationList from "../../../containers/Conversation";
import Profilboard from "../../../containers/ProfilBoard";
import ProfilCatalog from "../../../containers/UserList";
import Chat from "../../../containers/ToggleMessage";

import "./home.scss";

function Home() {
  return (
    <>
      <div className="middle_headerConnected home">
        <Profilboard />
        <ProfilCatalog />
        <Chat />
        <ConversationList />
      </div>
    </>
  );
}

export default Home;

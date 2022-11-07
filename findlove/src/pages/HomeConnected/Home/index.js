import React from "react";

import ConversationList from "../../../containers/ToggleChat";
import Profilboard from "../../../components/ProfilUser/Profilboard";
import ProfilCatalog from "../../../components/ProfilUser/ProfilCatalog";
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

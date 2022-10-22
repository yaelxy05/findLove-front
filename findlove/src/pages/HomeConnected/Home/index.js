import React from "react";

import ConversationList from "../../../components/ConversationList";
import Profilboard from "../../../components/ProfilUser/Profilboard";
import ProfilCatalog from "../../../components/ProfilUser/ProfilCatalog";
import Chat from "../../../components/Chat";

function Home() {
  return (
    <>
      <div className="middle_headerConnected">
        <Profilboard />
        <ProfilCatalog />
        <Chat />
        <ConversationList />
      </div>
    </>
  );
}

export default Home;

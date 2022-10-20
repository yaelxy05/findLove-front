import React from "react";

// Import components
import HeaderConnected from "../../containers/Navigation";
import ConversationList from "../../components/ConversationList";
import Profilboard from "../../components/ProfilUser/Profilboard";
import ProfilCatalog from "../../components/ProfilUser/ProfilCatalog";

// Import CSS
import "./homeConnected.scss";

function HomeConnected() {
  return (
    <>
      <div className="homeConnected">
        <HeaderConnected />

        <div className="middle_headerConnected">
          <Profilboard />
          <ProfilCatalog />
          <ConversationList />
        </div>
      </div>
    </>
  );
}

export default HomeConnected;

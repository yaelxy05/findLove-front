import React from "react";

// Import components
import HeaderConnected from "../../components/HeaderConnected";
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
        </div>
      </div>
    </>
  );
}

export default HomeConnected;

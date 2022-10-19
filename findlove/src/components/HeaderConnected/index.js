import React from "react";

// Import Components
import NavigationDesktop from "../Navigation/NavigationDesktop";
import Logo from "../Logo";

// Import CSS
import "./headerConnected.scss"

function HeaderConnected() {
  return (
    <div className="header_connected">
      <Logo />
      {/* Navigation desktop */}
      <NavigationDesktop />
      {/* Navigation mobile */}
    </div>
  );
}

export default HeaderConnected;

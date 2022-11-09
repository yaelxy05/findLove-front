import React from "react";
import { Outlet } from "react-router-dom";

// Import Components
import NavigationDesktop from "../Navigation/NavigationDesktop";
import NavigationMobile from "../Navigation/NavigationMobile";

// Import CSS
import "./headerConnected.scss";

function HeaderConnected({ openMenu, closeMenu, isOpen }) {
  return (
    <>
      <div className="header_connected">
        {/* Navigation desktop */}
        <NavigationDesktop />
        {/* Navigation mobile */}
        <NavigationMobile
          openMenu={openMenu}
          closeMenu={closeMenu}
          isOpen={isOpen}
        />
        
      </div>
      <Outlet />
    </>
  );
}

export default HeaderConnected;

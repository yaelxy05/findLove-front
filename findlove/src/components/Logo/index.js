import React from "react";

// Import assets
import LogoPicture from "../../assets/img/logo/FindLove.png";

function Logo() {
  return (
    <div className="header_logo-box">
      <img src={LogoPicture} alt="logo du site" className="header_logo" />
    </div>
  );
}

export default Logo;

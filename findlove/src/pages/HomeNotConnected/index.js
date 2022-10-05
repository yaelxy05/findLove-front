import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";

// Import CSS
import './homeNotConnected.scss';

function homeNotConnected() {
  return (
    <div className="homeNotConnected_wrapper">
      {/* header */}
      <Header />
      {/* Form signup */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default homeNotConnected;

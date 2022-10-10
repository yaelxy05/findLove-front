import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import FormRegisterMultistep from "./FormRegisterMultistep/";

// Import CSS
import "./homeNotConnected.scss";

function homeNotConnected({
  city,
  birthdate,
  lastname,
  firstname,
  mail,
  changeFieldRegister,
  password,
  confirmPassword,
  gender,
  handleRegister,
}) {
  return (
    <div className="homeNotConnected_wrapper">
      {/* header */}
      <Header />
      {/* Form signup */}

      <FormRegisterMultistep
        city={city}
        birthdate={birthdate}
        lastname={lastname}
        firstname={firstname}
        changeFieldRegister={changeFieldRegister}
        mail={mail}
        password={password}
        confirmPassword={confirmPassword}
        gender={gender}
        handleRegister={handleRegister}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default homeNotConnected;

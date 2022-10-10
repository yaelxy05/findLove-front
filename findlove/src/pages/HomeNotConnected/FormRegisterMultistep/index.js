import React, { useState } from "react";

// Import components
import FormRegisterChoiceSex from "./FormRegisterChoiceSex";
import FormRegisterInformation from "./FormRegisterInformation";
import FormRegisterIdentifiant from "./FormRegisterIdentifiant";

function FormRegisterMultistep({
  city,
  birthdate,
  lastname,
  firstname,
  mail,
  changeFieldRegister,
  password,
  confirmPassword,
  gender,
  handleRegister
}) {
  const [page, setPage] = useState(0);

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <FormRegisterChoiceSex
          page={page}
          setPage={setPage}
          gender={gender}
          changeFieldRegister={changeFieldRegister}
        />
      );
    } else if (page === 1) {
      return (
        <FormRegisterInformation
          page={page}
          setPage={setPage}
          city={city}
          birthdate={birthdate}
          lastname={lastname}
          firstname={firstname}
          changeFieldRegister={changeFieldRegister}
        />
      );
    } else {
      return (
        <FormRegisterIdentifiant
          page={page}
          setPage={setPage}
          mail={mail}
          password={password}
          confirmPassword={confirmPassword}
          changeFieldRegister={changeFieldRegister}
          handleRegister={handleRegister}
        />
      );
    }
  };

  return <>{pageDisplay()}</>;
}

export default FormRegisterMultistep;

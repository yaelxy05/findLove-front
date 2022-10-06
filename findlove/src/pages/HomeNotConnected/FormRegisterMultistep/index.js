import React, { useState } from "react";

// Import components
import FormRegisterChoiceSex from "./FormRegisterChoiceSex";
import FormRegisterInformation from "./FormRegisterInformation";
import FormRegisterIdentifiant from "./FormRegisterIdentifiant";

function FormRegisterMultistep() {
  const [page, setPage] = useState(0);


  const pageDisplay = () => {
    if (page === 0) {
        return <FormRegisterChoiceSex page={page} setPage={setPage} />;
    } else if (page === 1) {
      return <FormRegisterInformation page={page} setPage={setPage}/>;
    } else {
      return <FormRegisterIdentifiant page={page} setPage={setPage}/>;
    }
  };

  return (
    <>
      {pageDisplay()}
    </>
  );
}

export default FormRegisterMultistep;

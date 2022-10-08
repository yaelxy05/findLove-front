import React, { useState } from "react";

// Import Components
import Input from "../../../../components/Input";

// Import CSS
import "./formRegisterChoiceSex.scss";

function FormRegister({ page, setPage }) {
  const [gender, setGender] = useState("");
  const [genderSearch, setGenderSearch] = useState("");

  function manageChange(event) {
    setGender(event.target.value);
  }
  function manageChangeSearch(event) {
    setGenderSearch(event.target.value);
    console.log(event.target.value);
  }

  return (
    <section className="form_register--wrapperOne">
      <h2>Votre recherche</h2>
      <form className="form_register">
        <div className="form_register-input--box">
          <p>Je suis</p>
          <div className="form_register-box-input">
            <Input
              type="radio"
              groupName="me-group"
              classNameInput="form_register-input man_checked"
              id="man"
              value="man"
              checked={gender === "man"}
              manageChange={manageChange}
              nameLabel="un homme"
              classNameLabel="man-label"
              nameId="man"
            />
            <Input
              type="radio"
              groupName="me-group"
              classNameInput="form_register-input woman_checked"
              id="woman"
              value="woman"
              checked={gender === "woman"}
              manageChange={manageChange}
              nameLabel="une femme"
              classNameLabel="woman-label"
              nameId="woman"
            />
          </div>
        </div>
        <div className="form_register-input--box">
          <p>Je Recherche</p>
          <div className="form_register-box-input-search">
            <Input
              type="radio"
              groupName="search-group"
              classNameInput="form_register-input"
              id="man-search"
              value="man-search"
              checked={genderSearch === "man-search"}
              manageChange={manageChangeSearch}
              nameLabel="un homme"
              classNameLabel="man-label"
              nameId="man-search"
            />
            <Input
              type="radio"
              groupName="search-group"
              classNameInput="form_register-input"
              id="woman-search"
              value="woman-search"
              checked={genderSearch === "woman-search"}
              manageChange={manageChangeSearch}
              nameLabel="une femme"
              classNameLabel="woman-label"
              nameId="woman-search"
            />
          </div>
        </div>
        <div className="form_register--button">
          <button
            disabled={page === 2}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Suivant
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormRegister;

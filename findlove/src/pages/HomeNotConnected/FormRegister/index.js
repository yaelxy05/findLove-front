import React, { useState } from "react";

// Import CSS
import "./formRegister.scss";

function FormRegister() {
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
    <section className="form_register--wrapper">
      <h2>Trouver le bonheur</h2>
      <form className="form_register">
        <div className="form_register-input--box">
          <p>Je suis</p>
          <div className="form_register-box-input">
            <input
              type="radio"
              name="me-group"
              className="form_register-input man_checked"
              id="man"
              value="man"
              checked={gender === "man"}
              onChange={manageChange}
            />
            <label className="man-label" htmlFor="man">
              un homme
            </label>

            <input
              type="radio"
              name="me-group"
              className="form_register-input woman_checked"
              id="woman"
              value="woman"
              defaultChecked={gender === "woman"}
              onChange={manageChange}
            />
            <label className="woman-label" htmlFor="woman">
              une femme
            </label>
          </div>
        </div>
        <div className="form_register-input--box">
          <p>Je Recherche</p>
          <div className="form_register-box-input-search">
            <input
              type="radio"
              name="search-group"
              className="form_register-input"
              id="man-search"
              value="man-search"
              checked={genderSearch === "man-search"}
              onChange={manageChangeSearch}
            />
            <label className="man-label" htmlFor="man-search">
              un homme
            </label>

            <input
              type="radio"
              name="search-group"
              className="form_register-input"
              id="woman-search"
              value="woman-search"
              checked={genderSearch === "woman-search"}
              onChange={manageChangeSearch}
            />
            <label className="woman-label" htmlFor="woman-search">
              une femme
            </label>
          </div>
        </div>
        <div className="form_register--button">
          <button>Suivant</button>
        </div>
      </form>
    </section>
  );
}

export default FormRegister;

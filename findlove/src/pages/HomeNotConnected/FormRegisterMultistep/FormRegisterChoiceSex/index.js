import React, { useState } from "react";

// Import Components
import Input from "../../../../components/Input";
import ProgressBar from "../../../../components/ProgressBar";
// Import CSS
import "./formRegisterChoiceSex.scss";

function FormRegister({ page, setPage, gender, search, changeFieldRegister }) {
  




  return (
    <section className="form_register--wrapperOne">
      <ProgressBar
        step1Title="Recherche"
        step2Title="Informations"
        step3Title="Identifiant"
        number1="1"
        number2="2"
        number3="3"
        page={page}
      />
      <h2>Votre recherche</h2>
      <form className="form_register">
        <div className="form_register-input--box">
          <p>Je suis</p>
          <div className="form_register-box">
            <div className="form_register-box-input">
              <Input
                type="radio"
                groupName="gender"
                classNameInput="form_register-input man_checked"
                id="man"
                value="H"
                checked={gender === "H"}
                manageChange={(value, identifier) => {
                  changeFieldRegister(value, identifier);
                }}
                nameLabel="un homme"
                classNameLabel="man-label"
                nameId="man"
                required
              />
              <Input
                type="radio"
                groupName="gender"
                classNameInput="form_register-input woman_checked"
                id="woman"
                value="W"
                checked={gender === "W"}
                manageChange={(value, identifier) => {
                  changeFieldRegister(value, identifier);
                }}
                nameLabel="une femme"
                classNameLabel="woman-label"
                nameId="woman"
                required
              />
            </div>
            
          </div>
        </div>

        <div className="form_register-input--box">
          <p>Je Recherche</p>
          <div className="form_register-box-input-search">
            <Input
              type="radio"
              groupName="search"
              classNameInput="form_register-input"
              id="man-search"
              value="H"
              checked={search === "H"}
              manageChange={(value, identifier) => {
                changeFieldRegister(value, identifier);
              }}
              nameLabel="un homme"
              classNameLabel="man-label"
              nameId="man-search"
            />
            <Input
              type="radio"
              groupName="search"
              classNameInput="form_register-input"
              id="woman-search"
              value="W"
              checked={search === "W"}
              manageChange={(value, identifier) => {
                changeFieldRegister(value, identifier);
              }}
              nameLabel="une femme"
              classNameLabel="woman-label"
              nameId="woman-search"
            />
          </div>
        </div>

        <div className="form_register--button">
          <button disabled={page === 2} onClick={() => {
              setPage((currPage) => currPage + 1);
            }} >
            Suivant
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormRegister;

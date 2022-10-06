import React from "react";

// Import Components
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

// Import css
import "../formRegister.scss";

function FormRegisterInformation({ page, setPage }) {
  return (
    <section className="form_register--wrapper">
      <h2>Informations</h2>
      <div className="form_register--inputbox">
        <Input
          type="text"
          groupName="firstname"
          classNameInput="input_firstname"
          id="firstname"
          value="firstname"
          nameLabel="Prénom"
          classNameLabel="firstname-label"
          nameId="firstname-id"
          placeholder=" "
        />
        <Input
          type="text"
          groupName="lastname"
          classNameInput="input_lastname"
          id="lastname"
          value="lastname"
          nameLabel="Nom"
          classNameLabel="lastname-label"
          nameId="lastname-id"
          placeholder=" "
        />
        <Input
          type="text"
          groupName="city"
          classNameInput="input_city"
          id="city"
          value="city"
          nameLabel="Ville"
          classNameLabel="city-label"
          nameId="city-id"
          placeholder=" "
        />
        <Select
          groupName="birthday"
          classNameInput="input_birthday"
          id="birthday"
          value="birthday"
          nameLabel="Date de naissance"
          classNameLabel="birthday-label"
          nameId="birthday-id"
          placeholder=" "
        />
        <div className="form_register--button">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            className="button_prev"
          >
            Précédent
          </button>
          <button
            disabled={page === 2}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
            className="button_next"
          >
            Suivant
          </button>
        </div>
      </div>
    </section>
  );
}

export default FormRegisterInformation;

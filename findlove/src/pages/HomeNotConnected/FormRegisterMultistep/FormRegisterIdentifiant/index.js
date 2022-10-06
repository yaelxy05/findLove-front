import React from "react";

// Import Components
import Input from "../../../../components/Input";

// Import css
import "../formRegister.scss";

function FormRegisterInformation({ page, setPage }) {
  return (
    <section className="form_register--wrapper">
      <h2>Identifiants</h2>
      <div className="form_register--inputbox">
        <Input
          type="email"
          groupName="email"
          classNameInput="input_email"
          id="email"
          value="email"
          nameLabel="Email"
          classNameLabel="email-label"
          nameId="email-id"
          placeholder=" "
        />
        <Input
          type="password"
          groupName="password"
          classNameInput="input_password"
          id="password"
          value="password"
          nameLabel="password"
          classNameLabel="password-label"
          nameId="password-id"
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
          <button className="button_submit">Envoyer</button>
        </div>
      </div>
    </section>
  );
}

export default FormRegisterInformation;

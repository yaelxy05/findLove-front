import React from "react";

// Import Components
import Input from "../../../../components/Input";
import ProgressBar from "../../../../components/ProgressBar";
// Import css
import "../formRegister.scss";

function FormRegisterIdentifiant({
  page,
  setPage,
  mail,
  password,
  confirmPassword,
  changeFieldRegister,
  handleRegister
}) {
  return (
    <section className="form_register--wrapper">
      <ProgressBar
        step1Title="Recherche"
        step2Title="Informations"
        step3Title="Identifiant"
        number1="1"
        number2="2"
        number3="3"
        page={page}
      />
      <h2>Identifiants</h2>
      <div className="form_register--inputbox">
        <Input
          type="mail"
          groupName="mail"
          classNameInput="input_email inputMultiStep"
          id="email"
          value={mail}
          nameLabel="Email"
          classNameLabel="email-label labelMultiStep"
          nameId="email-id"
          placeholder="Email"
          manageChange={(value, identifier) =>
            changeFieldRegister(value, identifier)
          }
        />
        <Input
          type="password"
          groupName="password"
          classNameInput="input_password inputMultiStep"
          id="password"
          value={password}
          nameLabel="password"
          classNameLabel="password-label labelMultiStep"
          nameId="password-id"
          placeholder="Mot de passe"
          manageChange={(value, identifier) =>
            changeFieldRegister(value, identifier)
          }
        />
        <Input
          type="password"
          groupName="confirmPassword"
          classNameInput="input_confirm-password inputMultiStep"
          id="confirm-password"
          value={confirmPassword}
          nameLabel="confirm-password"
          classNameLabel="confirm-password-label labelMultiStep"
          nameId="confirm-password-id"
          placeholder="confirmation du mot de passe"
          manageChange={(value, identifier) =>
            changeFieldRegister(value, identifier)
          }
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
          <button className="button_submit" type="submit" onClick={handleRegister}>Envoyer</button>
        </div>
      </div>
    </section>
  );
}

export default FormRegisterIdentifiant;

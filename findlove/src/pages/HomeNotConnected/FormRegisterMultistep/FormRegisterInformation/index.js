import React from "react";

// Import Components
import Input from "../../../../components/Input";
import ProgressBar from "../../../../components/ProgressBar";
// Import css
import "../formRegister.scss";

function FormRegisterInformation({
  page,
  setPage,
  city,
  birthdate,
  lastname,
  firstname,
  changeFieldRegister,
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
      <h2>Informations</h2>
      <div className="form_register--inputbox">
        <Input
          type="text"
          groupName="firstname"
          classNameInput="input_firstname inputMultiStep"
          id="firstname"
          value={firstname}
          nameLabel="Prénom"
          classNameLabel="firstname-label labelMultiStep"
          nameId="firstname-id"
          placeholder="Prénom"
          manageChange={(value, identifier) =>
            changeFieldRegister(value, identifier)
          }
        />
        <Input
          type="text"
          groupName="lastname"
          classNameInput="input_lastname inputMultiStep"
          id="lastname"
          value={lastname}
          nameLabel="Nom"
          classNameLabel="lastname-label labelMultiStep"
          nameId="lastname-id"
          placeholder="Nom"
          manageChange={(value, identifier) =>
            changeFieldRegister(value, identifier)
          }
        />
        <Input
          type="text"
          groupName="city"
          classNameInput="input_city inputMultiStep"
          id="city"
          value={city}
          nameLabel="Ville"
          classNameLabel="city-label labelMultiStep"
          nameId="city-id"
          placeholder="Ville"
          manageChange={(value, identifier) =>
            changeFieldRegister(value, identifier)
          }
        />
        <Input
          type="date"
          groupName="birthdate"
          classNameInput="input_birthday inputMultiStep"
          id="birthday"
          value={birthdate}
          nameLabel="Date de naissance"
          classNameLabel="birthday-label labelMultiStep"
          nameId="birthday-id"
          placeholder="Date de naissance"
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

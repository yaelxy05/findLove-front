import React, { useEffect, useState } from "react";

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
  let errorsObj = {
    firstname: "",
    lastname: "",
    city: "",
    birthdate: "",
  };
  let checksObj = {
    firstname: false,
    lastname: false,
    city: false,
    birthdate: false,
  };
  const calculate_age = (birthdate) => {
    const birthDate = new Date(birthdate);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
  };

  const [errors, setErrors] = useState(errorsObj);
  const [success, setSuccess] = useState(false);
  const [successIcon, setSuccessIcon] = useState(checksObj);

  const validateForm = (evt) => {
    evt.preventDefault();

    const errorObj = { ...errorsObj };
    const checkObj = { ...checksObj };
    //first Name validation
    if (firstname === "") {
      errorObj.firstname = "Le prénom est requis";
    } else if (firstname.length < 3) {
      errorObj.firstname = "Le prénom doit contenir minimum 3 caractères.";
    } else if (
      !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
        firstname
      )
    ) {
      errorObj.firstname = "Le prénom ne doit pas contenir de chiffres.";
    } else {
      checkObj.firstname = true;
      setSuccess(true);
    }
    //last Name validation
    if (lastname === "") {
      errorObj.lastname = "le nom est requis";
    } else if (lastname.length < 3) {
      errorObj.lastname = "Le nom doit contenir minimum 3 caractères.";
    } else if (
      !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
        lastname
      )
    ) {
      errorObj.lastname = "Le nom ne doit pas contenir de chiffres.";
    } else {
      checkObj.lastname = true;
      setSuccess(true);
    }
    //city Name validation
    if (city === "") {
      errorObj.city = "Un nom de ville est requis";
    } else if (
      !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
        city
      )
    ) {
      errorObj.city = "Ce champs ne doit pas contenir de chiffres.";
    } else {
      checkObj.city = true;
      setSuccess(true);
    }
    //bithdate validation
    if (!/^\d{4}-\d{2}-\d{2}$/u.test(birthdate)) {
      errorObj.birthdate = "Veuillez saisir une date valide.";
    } else if (calculate_age(birthdate) < 18) {
      errorObj.birthdate = "Il faut avoir plus de 18 ans";
    } else {
      checkObj.birthdate = true;
      setSuccess(true);
    }

    if (
      success &&
      errorObj.birthdate === "" &&
      errorObj.city === "" &&
      errorObj.firstname === "" &&
      errorObj.lastname === ""
    ) {
      setPage((currPage) => currPage + 1);
    }

    setErrors(errorObj);
    setSuccessIcon(checkObj);
   
  };

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
        <div className="box_input">
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
            manageChange={(value, identifier) => {
              changeFieldRegister(value, identifier);
            }}
            errors={errors.firstname}
            success={successIcon.firstname}
          />
          {errors.firstname && (
            <div className="error_input">
              <p className="error">{errors.firstname}</p>
            </div>
          )}
        </div>
        <div className="box_input">
          <Input
            type="text"
            groupName="lastname"
            classNameInput="input_lastname inputMultiStep"
            id="lastname"
            DefaultValue={lastname}
            nameLabel="Nom"
            classNameLabel="lastname-label labelMultiStep"
            nameId="lastname-id"
            placeholder="Nom"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            errors={errors.lastname}
            success={successIcon.lastname}
          />
          {errors.lastname && (
            <div className="error_input">
              <p className="error">{errors.lastname}</p>
            </div>
          )}
        </div>
        <div className="box_input">
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
            errors={errors.city}
            success={successIcon.city}
          />

          {errors.city && (
            <div className="error_input">
              <p className="error">{errors.city}</p>
            </div>
          )}
        </div>

        <div className="box_input">
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
            errors={errors.birthdate}
            success={successIcon.birthdate}
          />
          {errors.birthdate && (
            <div className="error_input">
              <p className="error">{errors.birthdate}</p>
            </div>
          )}
        </div>

        <div className="form_register--button">
          <button className="button_prev">Précédent</button>
          <button
            disabled={page === 2}
            className="button_next"
            onClick={validateForm}
          >
            Suivant
          </button>
        </div>
      </div>
    </section>
  );
}

export default FormRegisterInformation;

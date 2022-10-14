import React, { useState } from "react";
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
  handleRegister,
}) {
  let errorsObj = {
    mail: "",
    password: "",
    confirmPassword: "",
  };
  let checksObj = {
    mail: false,
    password: false,
    confirmPassword: false,
  };
  const [errors, setErrors] = useState(errorsObj);
  const [success, setSuccess] = useState(false);
  const [successIcon, setSuccessIcon] = useState(checksObj);

  const validateFormIdentifiant = (evt) => {
    evt.preventDefault();

    const errorObj = { ...errorsObj };
    const checkObj = { ...checksObj };
    //mail validation
    if (mail === "") {
      errorObj.mail = "Un email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(mail)) {
      errorObj.mail = "l'email n'est pas valide.";
    } else {
      checkObj.mail = true;
      setSuccess(true);
    }
    //password validation
    if (password === "") {
      errorObj.password = "Un mot de passe est requis.";
    } else if (password.length < 6) {
      errorObj.password = "Le mot de passe doit contenir minimum 6 caractères.";
    } else {
      checkObj.password = true;
      setSuccess(true);
    }
    //password confirmation validation
    if (password !== confirmPassword) {
      errorObj.confirmPassword =
        "Les champs mot de passe doivent être identique.";
    } else if (confirmPassword === "") {
      errorObj.confirmPassword =
        "Le champ confirmation du mot de passe est requise.";
    } else {
      checkObj.confirmPassword = true;
      setSuccess(true);
    }

    if (
      errorObj.mail === "" &&
      errorObj.password === "" &&
      errorObj.confirmPassword === ""
    ) {
      setSuccess(true);
      console.log("test sucess")
    }

    if (
      errorObj.mail === "" &&
      errorObj.password === "" &&
      errorObj.confirmPassword === ""
    ) {
      handleRegister();
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
      <h2>Identifiants</h2>
      <div className="form_register--inputbox">
        <div className="box_input">
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
            errors={errors.mail}
            success={successIcon.mail}
          />
          {errors.mail && (
            <div className="error_input">
              <p className="error">{errors.mail}</p>
            </div>
          )}
        </div>
        <div className="box_input">
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
            errors={errors.password}
            success={successIcon.password}
          />
          {errors.password && (
            <div className="error_input">
              <p className="error">{errors.password}</p>
            </div>
          )}
        </div>
        <div className="box_input">
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
            errors={errors.confirmPassword}
            success={successIcon.confirmPassword}
          />
          {errors.confirmPassword && (
            <div className="error_input">
              <p className="error">{errors.confirmPassword}</p>
            </div>
          )}
        </div>

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
            className="button_submit"
            type="submit"
            onClick={validateFormIdentifiant}
          >
            Envoyer
          </button>
        </div>
      </div>
    </section>
  );
}

export default FormRegisterIdentifiant;

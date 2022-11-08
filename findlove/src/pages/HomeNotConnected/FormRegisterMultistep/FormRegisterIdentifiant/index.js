import React, { useState } from "react";
// Import Components
import Input from "../../../../components/Input";
import ProgressBar from "../../../../components/ProgressBar";
// Import css
import "../formRegister.scss";

function FormRegisterIdentifiant({
  page,
  setPage,
  email,
  password,
  confirmPassword,
  changeFieldRegister,
  handleRegister,
}) {
  let errorsObj = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  let checksObj = {
    email: false,
    password: false,
    confirmPassword: false,
  };
  const [errors, setErrors] = useState(errorsObj);
  const [successIcon, setSuccessIcon] = useState(checksObj);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateFormIdentifiant = (evt) => {
    evt.preventDefault();

    const errorObj = { ...errorsObj };
    const checkObj = { ...checksObj };
    //mail validation
    if (email === "") {
      errorObj.email = "Un email est requis.";
    } /*else if (!/\S+@\S+\.\S+/.test(email)) {
      errorObj.email = "l'email n'est pas valide.";
    } */ else {
      checkObj.email = true;
    }
    //password validation
    if (password === "") {
      errorObj.password = "Un mot de passe est requis.";
    } else if (password.length < 6) {
      errorObj.password = "Le mot de passe doit contenir minimum 6 caractères.";
    } else {
      checkObj.password = true;
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
    }

    if (
      errorObj.email === "" &&
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
            type="email"
            groupName="email"
            classNameInput="input_email inputMultiStep"
            id="email"
            value={email}
            nameLabel="Email"
            classNameLabel="email-label labelMultiStep"
            nameId="email-id"
            placeholder="Email"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            errors={errors.email}
            success={successIcon.email}
          />
          {errors.email && (
            <div className="error_input">
              <p className="error">{errors.email}</p>
            </div>
          )}
        </div>
        <div className="box_input">
          <Input
            type={passwordVisible ? "text" : "password"}
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
            setPasswordVisible={setPasswordVisible}
            passwordVisible={passwordVisible}
            
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

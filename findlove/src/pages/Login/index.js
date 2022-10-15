import React from "react";
// Import Components
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Header from "../../components/header";
// Import CSS
import "./login.scss";

function Login({
  username,
  password,
  changeLoginField,
  handleLogin,
  isLogged,
}) {
  const handleAuth = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login_wrapper">
      <Header
        nameLink=""
        nameButton="Créer un compte"
        nameClassButton="signup_button"
      />
      <section className="form_login">
        <h2>Se connecter</h2>
        <form className="form_login--inputbox" onSubmit={handleAuth}>
          <div className="box_input">
            <Input
              type="username"
              value={username}
              groupName="username"
              classNameInput="input_email inputLogin"
              id="email"
              nameLabel="Email"
              classNameLabel="email-label labelLogin"
              nameId="email-id"
              placeholder="Email"
              manageChange={(value, identifier) =>
                changeLoginField(value, identifier)
              }
            />
          </div>
          <div className="box_input">
            <Input
              type="password"
              value={password}
              groupName="password"
              classNameInput="input_password inputLogin"
              id="password"
              nameLabel="Mot de passe"
              classNameLabel="password-label labelLogin"
              nameId="password-id"
              placeholder="Mot de passe"
              manageChange={(value, identifier) =>
                changeLoginField(value, identifier)
              }
            />
          </div>
          <div className="form_login--button">
            <button className="button_submit" type="submit">
              Valider
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Login;

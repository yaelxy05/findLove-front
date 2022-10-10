import React from "react";
// Import Components
import Input from "../../../../components/Input";

// Import CSS
import "./login.scss";

function Login() {
  return (
    <section className="form_login">
      <h2>Se connecter</h2>
      <div className="form_login--inputbox">
        {/* login */}
        <Input
          type="email"
          value=""
          groupName="email"
          classNameInput="input_email inputLogin"
          id="email"
        />
        {/* password */}
        <Input
          type="password"
          value=""
          groupName="password"
          classNameInput="input_password inputLogin"
          id="password"
        />
      </div>
    </section>
  );
}

export default Login;

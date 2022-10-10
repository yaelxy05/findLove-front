import { connect } from "react-redux";

import { changeRegisterField, newUserCreation } from "../../actions/register";
import Register from "../../pages/HomeNotConnected";

const mapStateToProps = (state) => ({
  mail: state.register.mail,
  password: state.register.password,
  confirmPassword: state.register.confirmPassword,
  city: state.register.city,
  gender: state.register.gender,
  lastname: state.register.lastname,
  firstname: state.register.firstname,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldRegister: (value, fieldName) => {
    dispatch(changeRegisterField(value, fieldName));
  },

  handleRegister: () => {
    console.log("click");
    dispatch(newUserCreation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

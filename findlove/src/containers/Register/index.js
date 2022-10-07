import { connect } from "react-redux";

import { updateRegisterField, newUserCreation } from "../../actions/register";
import Register from "../../pages/HomeNotConnected";

const mapStateToProps = (state) => ({
  email: state.register.email,
  password: state.register.password,
  confirmPassword: state.register.confirmPassword,
  city: state.register.city,
  sexe: state.register.sexe,
  lastname: state.register.lastname,
  firstname: state.register.firstname,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldRegister: (value, fieldName) => {
    dispatch(updateRegisterField(value, fieldName));
  },

  handleRegister: () => {
    console.log("click");
    dispatch(newUserCreation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

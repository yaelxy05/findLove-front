import { connect } from "react-redux";

// IMPORT ACTION
import { changeLoginField, logIn, logOut } from "../../actions/login";
import Login from "../../pages/Login";

const mapStateToProps = (state) => ({
  username: state.login.username,
  password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  // for update state login (password and username)
  changeLoginField: (value, fieldName) => {
    dispatch(changeLoginField(value, fieldName));
  },
  // function for authentification to server
  handleLogin: () => {
    dispatch(logIn());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

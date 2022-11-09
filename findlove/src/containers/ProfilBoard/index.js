import { connect } from "react-redux";

// IMPORT ACTION
import { logOut } from "../../actions/login";
import Login from "../../components/ProfilUser/Profilboard";

const mapStateToProps = (state) => ({
  username: state.login.username,
  password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

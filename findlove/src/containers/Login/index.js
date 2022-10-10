import { connect } from "react-redux";

// IMPORT ACTION
import { changeLoginField } from "../actions/login";

{/* Import Component */}
import Login from "../../pages/Login";

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
    changeLoginField: (value, fieldName) => {
        dispatch(changeLoginField(value, fieldName));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

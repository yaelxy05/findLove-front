import { connect } from "react-redux";

// IMPORT ACTION
import { refreshLogin } from "../../actions/login";

// Import Components
import App from "../../pages/App/App.js";

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
    // Function for stay connected after refresh navigator
    refreshLogin: () => {
        dispatch(refreshLogin());
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

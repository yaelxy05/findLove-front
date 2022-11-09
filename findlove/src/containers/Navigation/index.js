import { connect } from "react-redux";

import { openMenu, closeMenu } from "../../actions/navigation";

// Import components
import Navigation from "../../components/HeaderConnected";

const mapStateToProps = (state) => ({
  isOpen: state.navigation.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  openMenu: () => {
    dispatch(openMenu());
  },
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

import { connect } from "react-redux";

import { toggleMessage } from "../../actions/toggleMessage";

// Import components
import ToggleMessage from "../../components/Chat";

const mapStateToProps = (state) => ({
  isOpenMessage: state.toggleMessage.isOpenMessage,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMessage: () => {
    dispatch(toggleMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMessage);

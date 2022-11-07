import { connect } from "react-redux";

import { openChat, closeChat, toggleChat } from "../../actions/toggleChat";

// Import components
import ToggleChat from "../../components/ConversationList/index"

const mapStateToProps = (state) => ({
  isOpenChat: state.toggleChat.isOpenChat,
});

const mapDispatchToProps = (dispatch) => ({
  openChat: () => {
    dispatch(openChat());
  },
  closeChat: () => {
    dispatch(closeChat());
  },
  toggleChat: () => {
    dispatch(toggleChat());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleChat);

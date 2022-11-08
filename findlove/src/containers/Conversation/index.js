import { connect } from "react-redux";

import {
  fetchConversation,
  openChat,
  closeChat,
  toggleChat,
} from "../../actions/conversation";
import {
  fetchUserList,
} from "../../actions/userList";

import Conversation from "../../components/ConversationList";

const mapStateToProps = (state) => ({
  conversationList: state.conversation.conversationList,
  isOpenChat: state.conversation.isOpenChat,
  userList: state.userList.userList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchConversation: () => {
    dispatch(fetchConversation());
  },
  openChat: () => {
    dispatch(openChat());
  },
  closeChat: () => {
    dispatch(closeChat());
  },
  toggleChat: () => {
    dispatch(toggleChat());
  },
  fetchUserList: () => {
    dispatch(fetchUserList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);

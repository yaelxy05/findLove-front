import {
  SAVE_CONVERSATION,
  OPEN_CHAT,
  CLOSE_CHAT,
  TOGGLE_CHAT,
} from "../actions/conversation";

const initialState = {
  conversationList: [],
  isOpenChat: false,
};

function userSpaceReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CONVERSATION:
      return {
        ...state,
        conversationList: action.conversationList,
      };
    case OPEN_CHAT:
      return {
        ...state,
        isOpenChat: true,
      };
    case CLOSE_CHAT:
      return {
        ...state,
        isOpenChat: false,
      };
    case TOGGLE_CHAT:
      return {
        ...state,
        isOpenChat: !state.isOpenChat,
      };
    default:
      return state;
  }
}

export default userSpaceReducer;

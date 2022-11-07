import { OPEN_CHAT, CLOSE_CHAT, TOGGLE_CHAT } from "../actions/toggleChat";

const initialState = {
  isOpenChat: false,
};

function toggleChatReducer(state = initialState, action) {
  switch (action.type) {
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

export default toggleChatReducer;

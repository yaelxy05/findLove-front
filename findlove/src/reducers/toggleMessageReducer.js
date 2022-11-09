import { TOGGLE_MESSAGE } from "../actions/toggleMessage";

const initialState = {
  isOpenMessage: false,
};

function toggleChatReducer(state = initialState, action) {
  switch (action.type) {
      case TOGGLE_MESSAGE:
        return {
          ...state,
          isOpenMessage: !state.isOpenMessage,
        };
    default:
      return state;
  }
}

export default toggleChatReducer;

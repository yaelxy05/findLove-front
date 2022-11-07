import { CHANGE_CONVERSATION_FIELD } from "../actions/conversation";

const initialState = {
  
};


function conversationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CONVERSATION_FIELD:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default conversationReducer;

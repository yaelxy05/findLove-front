import { CHANGE_CONVERSATION_FIELD } from "../actions/conversation";

const initialState = {
    name: '',
};


function conversationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CONVERSATION_FIELD:
      return {
        ...state,
        name: action.name === 'name' ? action.newValue : state.name,
      };
    default:
      return state;
  }
}

export default conversationReducer;

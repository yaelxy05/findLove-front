import { SAVE_USER_LIST } from "../actions/userList";

const initialState = {
  userList: [],
};

function userSpaceReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_LIST:
      return {
        ...state,
        userList: action.userList,
      };
    default:
      return state;
  }
}

export default userSpaceReducer;

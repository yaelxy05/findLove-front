// IMPORT ACTION
import { CHANGE_LOGIN_FIELD } from "../actions/login";

const initialState = {
  username: "",
  password: "",
  isLogged: false,
  token: null,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      if (action.name === "username") {
        return {
          ...state,
          username: action.newValue,
        };
      }
      if (action.name === "password") {
        return {
          ...state,
          password: action.newValue,
        };
      }
    default:
      return state;
  }
}
export default loginReducer;

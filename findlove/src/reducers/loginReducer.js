// IMPORT ACTION
import { CHANGE_LOGIN_FIELD, LOG_OUT, SAVE_USER } from "../actions/login";

const initialState = {
  username: "",
  password: "",
  isLogged: false,
  token: null,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    // for update state login (password and username)
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
      break;
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
      };
    // action to store the token and update isLogged to true
    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        token: action.token,
        username: "",
        password: "",
      };
    default:
      return state;
  }
}
export default loginReducer;

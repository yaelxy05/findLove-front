import { UPDATE_REGISTER_FIELD } from "../actions/register";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  city: "",
  birthday: new Date(),
  sexe: "",
  lastname: "",
  firstname: "",
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_REGISTER_FIELD:
      return {
        ...state,
        email: action.name === "email" ? action.newValue : state.email,
        password: action.name === "password" ? action.newValue : state.password,
        confirmPassword:
          action.name === "confirmPassword"
            ? action.newValue
            : state.confirmPassword,
        birthday: action.name === "birthday" ? action.newValue : state.birthday,
        sexe: action.name === "sexe" ? action.newValue : state.sexe,
        lastname: action.name === "lastname" ? action.newValue : state.lastname,
        firstname:
          action.name === "firstname" ? action.newValue : state.firstname,
      };
    default:
      return state;
  }
}

export default registerReducer;

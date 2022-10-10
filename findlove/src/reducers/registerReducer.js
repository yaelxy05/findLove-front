import { CHANGE_REGISTER_FIELD } from "../actions/register";

const initialState = {
  mail: "",
  password: "",
  confirmPassword: "",
  city: "",
  birthdate: new Date(),
  gender: "",
  lastname: "",
  firstname: "",
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_REGISTER_FIELD:
      return {
        ...state,
        mail: action.name === "mail" ? action.newValue : state.mail,
        password: action.name === "password" ? action.newValue : state.password,
        confirmPassword:
          action.name === "confirmPassword"
            ? action.newValue
            : state.confirmPassword,
        birthdate:
          action.name === "birthdate" ? action.newValue : state.birthdate,
        gender: action.name === "gender" ? action.newValue : state.gender,
        lastname: action.name === "lastname" ? action.newValue : state.lastname,
        firstname:
          action.name === "firstname" ? action.newValue : state.firstname,
        city: action.name === "city" ? action.newValue : state.city,
      };
    default:
      return state;
  }
}

export default registerReducer;

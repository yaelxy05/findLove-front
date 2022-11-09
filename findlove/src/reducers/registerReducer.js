import { CHANGE_REGISTER_FIELD } from "../actions/register";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  city: "",
  birthdate: new Date(),
  gender: "",
  lastname: "",
  firstname: "",
  search: "",
};


function registerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_REGISTER_FIELD:
      return {
        ...state,
        email: action.name === "email" ? action.newValue : state.email,
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
        search: action.name === "search" ? action.newValue : state.search,
      };
    default:
      return state;
  }
}

export default registerReducer;

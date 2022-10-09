import axios from "axios";

import { NEW_USER_CREATION } from "../actions/register";

const API_URL = process.env.REACT_APP_API_URL;

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case NEW_USER_CREATION: {
      const {
        email,
        password,
        confirmPassword,
        city,
        birthday,
        sexe,
        lastname,
        firstname,
      } = store.getState().register;

      const newUser = {
        email,
        password,
        confirmPassword,
        city,
        birthday,
        sexe,
        lastname,
        firstname,
      };

      if (password === confirmPassword) {
        axios
          .post(`${API_URL}/register`, newUser)
          .then((response) => {
            console.log(response.data);
            window.location = "/connexion";
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      }
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default registerMiddleware;

import axios from "axios";

import { NEW_USER_CREATION } from "../actions/register";

const API_URL = process.env.REACT_APP_API_URL;

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case NEW_USER_CREATION: {
      const {
        mail,
        password,
        city,
        birthdate,
        gender,
        lastname,
        firstname,
        search,
      } = store.getState().register;

      const newUser = new FormData();
      newUser.set("mail", mail);
      newUser.set("password", password);
      newUser.set("city", city);
      newUser.set("birthdate", birthdate);
      newUser.set("gender", gender);
      newUser.set("lastname", lastname);
      newUser.set("firstname", firstname);
      newUser.set("search", search);

      axios
        .post(`${API_URL}/register`, newUser)
        .then((response) => {
          console.log(response);
          window.location = "/login";
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default registerMiddleware;

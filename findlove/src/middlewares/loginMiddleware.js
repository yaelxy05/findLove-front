import axios from "axios";

import { LOG_IN, saveUser, LOG_OUT, REFRESH_LOGIN } from "../actions/login";


const API_URL = process.env.REACT_APP_API_URL;

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().login;

      axios
        .post(`${API_URL}/login`, {
          headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
          username: username,
          password: password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          store.dispatch(saveUser(response.data.token));
          window.location = "/espace-utilisateur/home";
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case REFRESH_LOGIN: {
      if (localStorage.getItem("token") !== null) {
        store.dispatch(saveUser(localStorage.getItem("token")));
      }
      next(action);
      break;
    }

    case LOG_OUT: {
      window.location = "/";
      localStorage.removeItem("token");
      next(action);
      break;
    }
    
    default:
      next(action);
  }
};

export default authMiddleware;

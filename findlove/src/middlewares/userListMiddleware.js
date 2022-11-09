import axios from "axios";

import { saveUserList, FETCH_USER_LIST } from "../actions/userList";

// info API
const API_URLS = process.env.REACT_APP_API_URL;

const conversationListMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_LIST: {
      axios
        .get(`${API_URLS}/users`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          
          store.dispatch(saveUserList(response.data));
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

export default conversationListMiddleware;

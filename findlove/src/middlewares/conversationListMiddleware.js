import axios from "axios";

import { saveConversation, FETCH_CONVERSATION } from "../actions/conversation";

// info API
const API_URLS = process.env.REACT_APP_API_URL;

const conversationListMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CONVERSATION: {
      axios
        .get(`${API_URLS}/convs`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(saveConversation(response.data));
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

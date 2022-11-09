import axios from "axios";

import {
  NEW_CONVERSATION_CREATION,
  fetchConversation,
} from "../actions/conversation";

// info API
const API_URLS = process.env.REACT_APP_API_URL;

const conversationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case NEW_CONVERSATION_CREATION: {
      if (localStorage.getItem("token") !== null) {
        axios
          .post(`${API_URLS}/convs/new/${action.userId}`,{}, {
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            console.log(response);
            store.dispatch(fetchConversation());
          })
          .catch((error) => {
            console.log(error);
          });
      }

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default conversationMiddleware;

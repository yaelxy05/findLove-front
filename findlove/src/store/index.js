import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Middlewares
import registerMiddleware from "../middlewares/registerMiddleware";
import loginMiddleware from "../middlewares/loginMiddleware";
import conversationListMiddleware from "../middlewares/conversationListMiddleware";
import userListMiddleware from "../middlewares/userListMiddleware";
// Import reducers
import reducer from "../reducers";

const enhancers = composeWithDevTools(
  applyMiddleware(
    registerMiddleware,
    loginMiddleware,
    conversationListMiddleware,
    userListMiddleware
  )
);
const store = createStore(reducer, enhancers);
export default store;

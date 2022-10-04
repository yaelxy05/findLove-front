import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Middlewares

// Import reducers
import reducer from "../reducers";

const enhancers = composeWithDevTools(applyMiddleware());
const store = createStore(reducer, enhancers);
export default store;

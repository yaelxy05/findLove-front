import { combineReducers } from 'redux';

// Import Reducers
import RegisterReducer from "./registerReducer";
import LoginReducer from "./loginReducer";

const rootReducer = combineReducers({
    register: RegisterReducer,
    login: LoginReducer,
});

export default rootReducer;

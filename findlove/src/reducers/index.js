import { combineReducers } from 'redux';

// Import Reducers
import RegisterReducer from "./registerReducer";
import LoginReducer from "./loginReducer";
import NavigationReducer from "./navigationReducer";

const rootReducer = combineReducers({
    register: RegisterReducer,
    login: LoginReducer,
    navigation: NavigationReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

// Import Reducers
import RegisterReducer from "./registerReducer";

const rootReducer = combineReducers({
    register: RegisterReducer,
});

export default rootReducer;

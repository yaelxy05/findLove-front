import { combineReducers } from 'redux';

// Import Reducers
import RegisterReducer from "./registerReducer";
import LoginReducer from "./loginReducer";
import NavigationReducer from "./navigationReducer";
import ConversationReducer from './conversationListReducer';
//import MessageReducer from './messageReducer';
import ToggleMessageReducer from './toggleMessageReducer';
import UserListReducer from './userListReducer';


const rootReducer = combineReducers({
    register: RegisterReducer,
    login: LoginReducer,
    navigation: NavigationReducer,
    conversation: ConversationReducer,
    toggleMessage: ToggleMessageReducer,
    userList: UserListReducer,
});

export default rootReducer;

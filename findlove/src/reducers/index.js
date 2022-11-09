import { combineReducers } from 'redux';

// Import Reducers
import RegisterReducer from "./registerReducer";
import LoginReducer from "./loginReducer";
import NavigationReducer from "./navigationReducer";
import ConversationListReducer from './conversationListReducer';
import ConversationReducer from './conversationReducer';
//import MessageReducer from './messageReducer';
import ToggleMessageReducer from './toggleMessageReducer';
import UserListReducer from './userListReducer';


const rootReducer = combineReducers({
    register: RegisterReducer,
    login: LoginReducer,
    navigation: NavigationReducer,
    conversationList: ConversationListReducer,
    conversation: ConversationReducer,
    toggleMessage: ToggleMessageReducer,
    userList: UserListReducer,
});

export default rootReducer;

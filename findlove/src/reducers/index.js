import { combineReducers } from 'redux';

// Import Reducers
import RegisterReducer from "./registerReducer";
import LoginReducer from "./loginReducer";
import NavigationReducer from "./navigationReducer";
import ConversationReducer from './conversationReducer';
import MessageReducer from './messageReducer';
import ToggleChatReducer from './toggleChatReducer';
import ToggleMessageReducer from './toggleMessageReducer';


const rootReducer = combineReducers({
    register: RegisterReducer,
    login: LoginReducer,
    navigation: NavigationReducer,
    conversation: ConversationReducer,
    toggleMessage: ToggleMessageReducer,
    toggleChat: ToggleChatReducer
});

export default rootReducer;

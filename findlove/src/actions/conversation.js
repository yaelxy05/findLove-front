export const NEW_CONVERSATION_CREATION = 'NEW_CONVERSATION_CREATION';
export const CHANGE_CONVERSATION_FIELD = 'CHANGE_CONVERSATION_FIELD';
export const FETCH_CONVERSATION = 'FETCH_CONVERSATION';
export const SAVE_CONVERSATION = 'SAVE_CONVERSATION';
// Action for toggle chat menu
export const OPEN_CHAT = "OPEN_CHAT";
export const CLOSE_CHAT = "CLOSE_CHAT";
export const TOGGLE_CHAT = "TOGGLE_CHAT";

export const openChat = () => ({
  type: OPEN_CHAT,
});

export const closeChat = () => ({
  type: CLOSE_CHAT,
});

export const toggleChat = () => ({
  type: TOGGLE_CHAT,
});

export const changeConversationField = (newValue, name) => ({
    type: CHANGE_CONVERSATION_FIELD,
    newValue,
    name,
  });

export const newConversationCreation = () => ({
    type: NEW_CONVERSATION_CREATION,
  });

  // ====================================
// =========== get conversations list ==
export const fetchConversation = () => ({
  type: FETCH_CONVERSATION,
});

export const saveConversation = (conversationList) => ({
  type: SAVE_CONVERSATION,
  conversationList: conversationList,
});

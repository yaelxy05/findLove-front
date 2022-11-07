export const NEW_CONVERSATION_CREATION = 'NEW_CONVERSATION_CREATION';
export const CHANGE_CONVERSATION_FIELD = 'CHANGE_CONVERSATION_FIELD';

export const changeConversationField = (newValue, name) => ({
    type: CHANGE_CONVERSATION_FIELD,
    newValue,
    name,
  });

export const newConversationCreation = () => ({
    type: NEW_CONVERSATION_CREATION,
  });

export const NEW_MESSAGE_CREATION = 'NEW_MESSAGE_CREATION';
export const CHANGE_MESSAGE_FIELD = 'CHANGE_MESSAGE_FIELD';

export const changeMessageField = (newValue, name) => ({
    type: CHANGE_MESSAGE_FIELD,
    newValue,
    name,
  });

export const newConversationCreation = () => ({
    type: NEW_MESSAGE_CREATION,
  });

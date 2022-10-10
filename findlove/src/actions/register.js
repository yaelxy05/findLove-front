export const NEW_USER_CREATION = 'NEW_USER_CREATION';
export const CHANGE_REGISTER_FIELD = 'CHANGE_REGISTER_FIELD';

export const changeRegisterField = (newValue, name) => ({
    type: CHANGE_REGISTER_FIELD,
    newValue,
    name,
  });

export const newUserCreation = () => ({
    type: NEW_USER_CREATION,
  });

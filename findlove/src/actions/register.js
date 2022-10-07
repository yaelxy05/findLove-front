export const NEW_USER_CREATION = 'NEW_USER_CREATION';
export const UPDATE_REGISTER_FIELD = 'UPDATE_REGISTER_FIELD';

export const updateRegisterField = (newValue, name) => ({
    type: UPDATE_REGISTER_FIELD,
    newValue,
    name,
  });

export const newUserCreation = () => ({
    type: NEW_USER_CREATION,
  });

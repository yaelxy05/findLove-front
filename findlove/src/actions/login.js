export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';

export const changeLoginField = (newValue, name) => ({
    type: CHANGE_LOGIN_FIELD,
    newValue,
    name,
  });

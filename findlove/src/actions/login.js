export const CHANGE_LOGIN_FIELD = "CHANGE_LOGIN_FIELD";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN = "LOG_IN";
export const REFRESH_LOGIN = "REFRESH_LOGIN";
export const SAVE_USER = "SAVE_USER";

export const changeLoginField = (newValue, name) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue,
  name,
});

export const saveUser = (token) => ({
  type: SAVE_USER,
  token,
});

export const refreshLogin = () => ({
  type: REFRESH_LOGIN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const SAVE_USER_LIST = 'SAVE_USER_LIST';

  // ====================================
// =========== get conversations list ==
export const fetchUserList = () => ({
    type: FETCH_USER_LIST,
  });
  
  export const saveUserList = (userList) => ({
    type: SAVE_USER_LIST,
    userList: userList,
  });

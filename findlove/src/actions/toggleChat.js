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

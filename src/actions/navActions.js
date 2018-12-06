
export const SET_USER_MENU_VIEW = 'SET_USER_MENU_VIEW';
export const setUserMenuView = (visible) => ({
  type: SET_USER_MENU_VIEW,
  visible
});

export const UPDATE_WINDOW_WIDTH = 'UPDATE_WINDOW_WIDTH';
export const updateWindowWidth = (width) => ({
  type: UPDATE_WINDOW_WIDTH,
  width
});
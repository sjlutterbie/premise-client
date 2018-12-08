
export const SET_USER_MENU_VIEW = 'SET_USER_MENU_VIEW';
export const setUserMenuView = (visible) => ({
  type: SET_USER_MENU_VIEW,
  visible // Expects boolean
});

export const UPDATE_WINDOW_WIDTH = 'UPDATE_WINDOW_WIDTH';
export const updateWindowWidth = (width) => ({
  type: UPDATE_WINDOW_WIDTH,
  width // Expects number
});

export const ADD_VISIBLE_PANES = 'ADD_VISIBLE_PANES';
export const addVisiblePanes = (panes) => ({
  type: ADD_VISIBLE_PANES,
  panes // Expects array
});

export const REMOVE_VISIBLE_PANES = 'REMOVE_VISIBLE_PANES';
export const removeVisiblePanes = (panes) => ({
  type: REMOVE_VISIBLE_PANES,
  panes // Expects array
});
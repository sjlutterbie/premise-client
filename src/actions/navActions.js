
export const SET_USER_MENU_VIEW = 'SET_USER_MENU_VIEW';
export const setUserMenuView = (visible) => ({
  type: SET_USER_MENU_VIEW,
  visible // Expects boolean
});

export const MONITOR_RESPONSIVE_BRACKET = 'MONITOR_RESPONSIVE_BRACKET';
export const monitorResponsiveBracket = (width) => ({
  type: MONITOR_RESPONSIVE_BRACKET,
  width
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

export const UPDATE_USER_GUIDE_PAGE = 'UPDATE_USER_GUIDE_PAGE';
export const updateUserGuidePage = (page) => ({
  type: UPDATE_USER_GUIDE_PAGE,
  page // Expects string
});

export const UPDATE_CURRENT_LOCATION = 'UPDATE_CURRENT_LOCATION';
export const updateCurrentLocation = (location) => ({
  type: UPDATE_CURRENT_LOCATION,
  location
})
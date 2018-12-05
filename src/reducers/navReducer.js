import {SET_USER_MENU_VIEW} from '../actions';

// Set initial state items for navigation elements
const initialState = {
  showUserMenu: false
};

export default (state = initialState, action) => {
  
  // Set UserMenu Visibility
  if (action.type === SET_USER_MENU_VIEW) {
    return Object.assign({}, state, {
      showUserMenu: action.visible
    });
  }
  
  return state;

};
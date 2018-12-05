import {CLOSE_USER_MENU, closeUserMenu,
        OPEN_USER_MENU, openUserMenu} from '../actions';

// Set initial state items for navigation elements
const initialState = {
  showUserMenu: false
};

export default (state = initialState, action) => {
  
  // Open UserMenu
  if (action.type === OPEN_USER_MENU) {
    return Object.assign({}, state, {
      showUserMenu: true
    });
  }
  
  // Close UserMenu
  if (action.type === CLOSE_USER_MENU) {
    return Object.assign({}, state, {
      showUserMenu: false
    });
  }
  
  return state;

};
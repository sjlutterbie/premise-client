import {SET_USER_MENU_VIEW,UPDATE_WINDOW_WIDTH,
        ADD_VISIBLE_PANES} from '../actions';

// Set initial state items for navigation elements
export const initialState = {

  // Responsive handling
  windowWidth: 0,
  //responsiveBracket: 'mobile', // Dev in progress?
  visiblePanes: ['reader'],

  // Element visibility
  showUserMenu: false
};

export default (state = initialState, action) => {
  
  // Set UserMenu Visibility
  if (action.type === SET_USER_MENU_VIEW) {
    return Object.assign({}, state, {
      showUserMenu: action.visible
    });
  }
  
  // Update windowWidth
  if (action.type === UPDATE_WINDOW_WIDTH) {
    return Object.assign({}, state, {
      windowWidth: action.width
    });
  }
  
  // Add elements to visiblePanes array
  if (action.type === ADD_VISIBLE_PANES) {
    
    // Remove duplicates
    action.panes = action.panes.filter((pane, index) => {
      return action.panes.indexOf(pane) == index;
    });
    
    // Filter out already visible panes
    action.panes = action.panes.filter(pane => {
      return !state.visiblePanes.includes(pane);
    });
    
    return Object.assign({}, state, {
      visiblePanes: state.visiblePanes.concat(action.panes)
    });
  }
  
  
  
  return state;

};
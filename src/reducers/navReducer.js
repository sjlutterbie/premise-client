import {SET_USER_MENU_VIEW, MONITOR_RESPONSIVE_BRACKET,
        UPDATE_WINDOW_WIDTH,
        ADD_VISIBLE_PANES, REMOVE_VISIBLE_PANES} from '../actions';

// Set initial state items for navigation elements
export const initialState = {

  // Responsive handling
  windowWidth: 0,
  responsiveBracket: 'mobile', // Default setting (DEV)
  visiblePanes: ['reader','network','userguide'], // Render all (DEV)

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
  
  // monitor responsiveBracket
  if (action.type === MONITOR_RESPONSIVE_BRACKET) {
    // Evaluate responsive bracket
    let bracket;
    if(action.width < 600) {
      bracket = 'small';
    } else {
      bracket = 'large';
    }
    return Object.assign({}, state, {
      responsiveBracket: bracket
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
    
    // Remove duplicates from input array
    action.panes = action.panes.filter((pane, index) => {
      return action.panes.indexOf(pane) == index;
    });
    
    // Filter out already visible panes
    action.panes = action.panes.filter(pane => {
      return !state.visiblePanes.includes(pane);
    });
    
    // Update state
    return Object.assign({}, state, {
      visiblePanes: state.visiblePanes.concat(action.panes)
    });
  }

  // Remove elements from visiblePanes array
  if (action.type === REMOVE_VISIBLE_PANES) {
    
    // Create filtered panes area, for clarity of state update
    let tempVisiblePanes = state.visiblePanes;
    tempVisiblePanes = tempVisiblePanes.filter(pane => {
      return !action.panes.includes(pane);
    });
    
    return Object.assign({}, state, {
      visiblePanes: tempVisiblePanes
    });
  }

  return state;

};
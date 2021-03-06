import {SET_USER_MENU_VIEW, MONITOR_RESPONSIVE_BRACKET,
        ADD_VISIBLE_PANES, REMOVE_VISIBLE_PANES,
        UPDATE_USER_GUIDE_PAGE, UPDATE_CURRENT_LOCATION,
        UPDATE_AUTH_STATUS, UPDATE_LANDING_PAGE_FORM
} from '../actions';

// Set initial state items for navigation elements
export const initialState = {

  // If authorized, show main App. If not authorized, show landing/login page.
  authStatus: false,

  // Responsive handling
  responsiveBracket: 'small', // Default to mobile setting

  visiblePanes: ['reader', 'mobileNav'], // Default to mobile setting
  
  // Current location within App
  currentLocation: 'TEMP VALUE',
  
  // Current <UserGuide/> page
  userGuidePage: 'page1', // Default to page1
  
  // Element visibility
  showUserMenu: false,
  
  // Which form to display on landing page
  landingPageForm: 'login'
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
    // Store existing bracket value
    let previousBracket = state.responsiveBracket;

    // Evaluate responsive bracket
    let bracket;
    if(action.width < 600) {
      bracket = 'small';
    } else {
      bracket = 'large';
    }
    
    // Initialize additions to state
    let newState = {
      responsiveBracket: bracket,
      visiblePanes: state.visiblePanes
    };
    
    // Identify small -> large bracket shift
    if (previousBracket === 'small' && bracket === 'large') {
      // Don't hide userguide on transition
      if (state.visiblePanes.includes('userguide')) {
       newState.visiblePanes = ['reader', 'network', 'userguide'];
      } else {
        newState.visiblePanes = ['reader', 'network'];
      }
    }
    
    // Identify large -> small bracket shift
    if (previousBracket === 'large' && bracket==='small') {
      // Don't hide userguide on transition
      if (state.visiblePanes.includes('userguide')) {
        newState.visiblePanes = ['userguide'];
      } else {
        newState.visiblePanes = ['reader', 'mobileNav'];
      }
    }
    
    // Update state
    return Object.assign({}, state, newState);
  }

  // Add elements to visiblePanes array
  if (action.type === ADD_VISIBLE_PANES) {
    
    // Remove duplicates from input array
    action.panes = action.panes.filter((pane, index) => {
      return action.panes.indexOf(pane) === index;
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
  
  // Update userGuidePage
  if (action.type === UPDATE_USER_GUIDE_PAGE) {
    return Object.assign({}, state, {
      userGuidePage: action.page
    });
  }

  // Update currentLocation
  if (action.type === UPDATE_CURRENT_LOCATION) {
    return Object.assign({}, state, {
      currentLocation: action.location
    });
  }
  
  // Update authorizedUser Status
  if (action.type === UPDATE_AUTH_STATUS) {
    return Object.assign({}, state, {
      authStatus: action.authStatus
    });
  }

  if (action.type === UPDATE_LANDING_PAGE_FORM) {
    return Object.assign({}, state, {
      landingPageForm: action.form
    });
  }  

  return state;

};
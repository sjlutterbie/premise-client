import {
  REGISTER_NEW_USER, AUTHENTICATE_USER,
  START_USER_AUTH
} from '../actions';

export const initialState = {
  currentUser: null,
  authenticating: false,
  error: false
};

export default (state = initialState, action) => {
  
  // Register new user
  if (action.type === REGISTER_NEW_USER) {
    console.log(action.values);
  }
  
  // Authenticate user
  if (action.type === AUTHENTICATE_USER) {
    
    // DEV ONLY: Automatically logs in any provided username
    
    return Object.assign({}, state, {
      currentUser: action.username,
      authenticating: action.authenticating,
      error: action.error
    });
  }
  
  if(action.type === START_USER_AUTH) {
    
    return Object.assign({}, state, {
      authenticating: action.authenticating,
      error: action.error
    });
    
  }
  
  

  return state;
  
};
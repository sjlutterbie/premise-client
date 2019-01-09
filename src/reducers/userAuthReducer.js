import {REGISTER_NEW_USER, AUTHENTICATE_USER,
        START_AUTH_REQUEST} from '../actions';

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
      currentUser: action.values.username
    });
  }

  if (action.type === START_AUTH_REQUEST) {
    return Object.assign({}, state, {
      authenticating: true,
      error: null
    });
    
    
  }


  return state;
  
};
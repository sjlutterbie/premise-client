import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_AUTH_TOKEN,
  CLEAR_AUTH
} from '../actions';

export const initialState = {
  authToken: null,
  currentUser: null,
  authenticating: false,
  error: null,
  user: null
};

export default (state = initialState, action) => {
  
  if(action.type === AUTH_REQUEST) {
    return Object.assign({}, state, {
      authenticating: action.authenticating,
      error: action.error
    });
  }
  
  if(action.type === AUTH_SUCCESS) {
    return Object.assign({}, state, {
      authenticating: action.authenticating,
      error: action.error,
      currentUser: action.username
    });
  }
  
  if(action.type === AUTH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  
  if(action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  }
  
  if(action.type === CLEAR_AUTH) {
    return Object.assign({}, state, {
      authToken: action.authToken,
      currentUser: action.currentUser
    });
  }
  
  return state;
};
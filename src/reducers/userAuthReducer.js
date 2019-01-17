import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  SET_USER_INFO
} from '../actions';

export const initialState = {
  authToken: null,
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
      error: action.error
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
      user: null
    });
  }
  
  if(action.type === SET_USER_INFO) {
    return Object.assign({}, state, {
      user: action.user
    });
  }
  
  return state;
};
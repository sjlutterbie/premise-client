import {REGISTER_NEW_USER, AUTHENTICATE_USER} from '../actions';

export const initialState = {
  user: null
};

export default (state = initialState, action) => {
  
  // Register new user
  if (action.type === REGISTER_NEW_USER) {
    console.log(action.values);
  }
  
  // Authenticate user
  if (action.type === AUTHENTICATE_USER) {
    console.log(action.values);
  }

  return state;
  
};
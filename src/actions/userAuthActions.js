import {PREMISE_BASE_API_URL} from '../config';

export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const registerNewUser = values => ({
  type: REGISTER_NEW_USER,
  values
});

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const authenticateUser = (username) => ({
  type: AUTHENTICATE_USER,
  username,
  authenticating: false,
  error: null
});

export const START_USER_AUTH = 'START_USER_AUTH';
export const startUserAuth = () => ({
  type: START_USER_AUTH,
  authenticating: true,
  error: null
});

export const loginUser = (username, password) => dispatch => {
  
  // Signal start of login process
  dispatch(startUserAuth());
  
  return (
    
    fetch(`${PREMISE_BASE_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  );

};
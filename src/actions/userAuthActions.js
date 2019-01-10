import jwtDecode from 'jwt-decode';

import {PREMISE_BASE_API_URL} from '../config';

import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken} from '../local-storage';

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

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
  type: AUTH_ERROR,
  error
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
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => console.log(authToken))
    .catch(err => console.log(err))
  );

};


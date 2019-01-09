import jwtDecode from 'jwt-decode';

import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';

import {normalizeResponseErrors} from './utils';
import {saveAuthToken} from '../local-storage';

export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const registerNewUser = values => ({
  type: REGISTER_NEW_USER,
  values
});

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const authenticateUser = values => ({
  type: AUTHENTICATE_USER,
  values
});

export const START_AUTH_REQUEST = 'START_AUTH_REQUEST';
export const startAuthRequest = () => ({
  type: START_AUTH_REQUEST
});

export const APPROVE_AUTH_REQUEST = 'APPROVE_AUTH_REQUEST';
export const approveAuthRequest = () => ({
  type: APPROVE_AUTH_REQUEST
});

export const REJECT_AUTH_REQUEST = 'REJECT_AUTH_REQUEST';
export const rejectAuthRequest = (error) => ({
  type: REJECT_AUTH_REQUEST,
  error
});

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});


const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(approveAuthRequest(decodedToken.user));
  saveAuthToken(authToken);
};

export const handleLogin = (username, password) => dispatch => {
  
  // Signal authorization request has started
  dispatch(startAuthRequest());
  
  // Submit login request
  return (
    
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    // Handle non-standard errors
    .catch(err => {
      const {code} = err;
      const message = 
        code === 401
          ? 'Incorrect username or password'
          : 'Unable to login, please try again';
      dispatch(rejectAuthRequest(err));
      // Could not authenticate, so return a SubmissionError for Redux Form
      return Promise.reject(
        new SubmissionError({
          _error: message
        })
      );
    })
  );

};
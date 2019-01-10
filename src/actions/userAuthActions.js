import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

import {PREMISE_BASE_API_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST,
  authenticating: true,
  error: null
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = (username) => ({
  type: AUTH_SUCCESS,
  username,
  authenticating: false,
  error: null
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
  type: AUTH_ERROR,
  error
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

const storeAuthInfo = ((authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
});

export const loginUser = (username, password) => dispatch => {
  
  // Signal start of login process
  dispatch(authRequest());
  
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
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken();
    })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  
  dispatch(authRequest());
  const authToken = getState().userAuth.authToken;
  return fetch(`${PREMISE_BASE_API_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      // Provide existing credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(authToken);
    });
};
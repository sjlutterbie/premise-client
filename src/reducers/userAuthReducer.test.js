import faker from 'faker';

import {default as userAuthReducer, initialState} from './userAuthReducer';

import {
  authRequest,
  authSuccess,
  authError,
  setAuthToken,
  clearAuth,
  setUserInfo
} from '../actions';

describe('userAuthState', () => {
  
  it('Should contain the expected defaults', () => {
    const expectedKeys = ['authToken', 'authenticating', 'error','user'];
    expect(Object.keys(initialState)).toEqual(expectedKeys);
  });
  
  it('Default state elements should be the correct type', () => {
    const expectedTypes = [
      ['authenticating', 'boolean']
    ];
    expectedTypes.forEach(element => {
      expect(typeof initialState[element[0]]).toEqual(element[1]);
    });
  });
  
  describe('authRequest', () => {
    
    it('Should update the state as expected', () => {
      let state = {
        authenticating: false,
        error: 'foo'
      };
      state = userAuthReducer(state, authRequest());
      expect(state.authenticating).toEqual(true);
      expect(state.error).toEqual(null);
    });
  });
  
  describe('authSuccess', () => {
    
    it('Should update the state as expected', () => {
      let state = {
        authenticating: true,
        error: 'foo'
      };
      const testUsername = faker.random.alphaNumeric(10);
      state = userAuthReducer(state, authSuccess(testUsername));
      expect(state.authenticating).toEqual(false);
      expect(state.error).toEqual(null);
    });
  });

  describe('authError', () => {
    
    it('Should update the state as expected', () => {
      let state = {
       error: null 
      };
      const testError = faker.random.alphaNumeric(10);
      state = userAuthReducer(state, authError(testError));
      expect(state.error).toEqual(testError);
    });
  });

  describe('setAuthToken', () => {
    
    it('Should update the state as expected', () => {
      let state = {
        authToken: 'foo'
      };
      const testToken = faker.random.alphaNumeric(10);
      state = userAuthReducer(state, setAuthToken(testToken));
      expect(state.authToken).toEqual(testToken);
    });
  });
  
  describe('clearAuth', () => {
    
    it('Should update the state as expected', () => {
      let state = {
        authToken: 'foo',
        user: 'bar'
      };
      state = userAuthReducer(state, clearAuth());
      expect(state.authToken).toEqual(null);
      expect(state.user).toEqual(null);
    });
  });
  
  describe('setUserInfo', () => {
    
    it('Should update the state as expected', () => {
     let state = {
       user: null
     };
     const testUser = {
       username: faker.random.alphaNumeric(10)
     };
     state = userAuthReducer(state, setUserInfo(testUser));
     expect(state.user).toEqual(testUser);
    });
  });
});
import faker from 'faker';

import {default as userAuthReducer, initialState} from './userAuthReducer';

import {
  authRequest,
  authSuccess,
  authError,
  setAuthToken,
  clearAuth
} from '../actions';

describe('userAuthState', () => {
  
  it('Should contain the expected defaults', () => {
    const expectedKeys = ['authToken', 'currentUser',
                          'authenticating', 'error'];
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
    
    it('Should set `authenticating` and `error` as expected', () => {
      let state = {
        authenticating: false,
        error: 'foo'
      };
      state = userAuthReducer(state, authRequest());
      expect(state.authenticating).toEqual(true);
      expect(state.error).toEqual(null);
    });
    
    
  });

  
});
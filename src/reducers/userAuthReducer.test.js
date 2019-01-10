import faker from 'faker';

import {default as userAuthReducer, initialState} from './userAuthReducer';

import {registerNewUser, startUserAuth} from '../actions';

describe('userAuthState', () => {
  
  it('Should contain the expected defaults', () => {
    const expectedKeys = ['currentUser', 'authenticating', 'error'];
    expect(Object.keys(initialState)).toEqual(expectedKeys);
  });
  
  it('Default state elements should be the correct type', () => {
    const expectedTypes = [
      ['currentUser', 'object'],
      ['authenticating', 'boolean'],
      ['error', 'boolean']
    ];
    expectedTypes.forEach(element => {
      expect(typeof initialState[element[0]]).toEqual(element[1]);
    });
  });
  
  describe('startUserAuth', () => {
    
    it('It sets `authenticating` and `error` appropriately', () => {
      let state = {
        authenticating: false,
        error: 'foo'
      };
      state = userAuthReducer(state, startUserAuth());
      expect(state.authenticating).toEqual(true);
      expect(state.error).toEqual(null);
    });
    
  });
  
  
});
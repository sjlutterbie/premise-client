import faker from 'faker';

import {default as userAuthReducer, initialState} from './userAuthReducer';

import {
  startAuthRequest, approveAuthRequest,
  rejectAuthRequest
} from '../actions';

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
  
  describe('startAuthRequest', () => {
    
    it('Signals an authorization request has begun', () => {
      
      let state = {
        authenticating: false,
        error: true
      };
      state = userAuthReducer(state, startAuthRequest());
      expect(state.authenticating).toEqual(true);
      expect(state.error).toEqual(null);
    });
  });
  
  describe('approveAuthRequest', () => {
    
    it('Signals an authorization request is complete', () => {
      let state = {
        authenticating: true
      };
      state = userAuthReducer(state, approveAuthRequest());
      expect(state.authenticating).toEqual(false);
    });
  });
  
  describe('rejectAuthRequest', () => {
    
    it('Signals an authorization request is complete', () => {
      let state = {
        authenticating: true
      };
      state = userAuthReducer(state, rejectAuthRequest());
      expect(state.authenticating).toEqual(false);
    });
    
    
  });
  
});
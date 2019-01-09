import faker from 'faker';

import {default as userAuthReducer, initialState} from './userAuthReducer';

import {registerNewUser} from '../actions';

describe('userAuthState', () => {
  
  it('Should contain the expected defaults', () => {
    const expectedKeys = ['user'];
    expect(Object.keys(initialState)).toEqual(expectedKeys);
  });
  
  it('Default state elements should be the correct type', () => {
    const expectedTypes = [
      ['user', 'object']
    ];
    expectedTypes.forEach(element => {
      expect(typeof initialState[element[0]]).toEqual(element[1]);
    });
  });
  
});
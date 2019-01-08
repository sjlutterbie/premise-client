import faker from 'faker';

import {default as formsReducer, initialState} from './formsReducer';

describe('formState', () => {
  
  it('Should contain the expected defaults', () => {
    const expectedKeys = [];
    expect(Object.keys(initialState)).toEqual(expectedKeys);
  });
  
});
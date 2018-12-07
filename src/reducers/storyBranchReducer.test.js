import faker from 'faker';

import {default as storyBranchReducer, initialState} from './storyBranchReducer';
import {
  LOAD_DEFAULT_BRANCH, loadDefaultBranch,
  UPDATE_FOCAL_MOMENT, updateFocalMoment,
  UPDATE_FOCAL_MOMENT_MODE, updateFocalMomentMode
} from '../actions';

describe('storyChainState', () => {

  it('Should contain the expected defaults', () => {
    const expectedKeys = ['currentBranch', 'focalMoment', 'focalMomentMode'];
    expect(Object.keys(initialState)).toEqual(expectedKeys);
  });

});

describe('Story Branch Reducer', () => {
  
  describe('loadDefaultBranch()', () => {
    
    it('Loads a storyBranch into state', () => {
      let state = {
        currentBranch: []
      };
      let branch = [
        {foo: 'bar'}
      ];
      state = storyBranchReducer(state, loadDefaultBranch(branch));
      expect(state.currentBranch.length).toBeGreaterThan(0);      
    });
  });
  
  describe('updateFocalMoment', () => {
    
    it('Updates the focalMoment in state', () => {
      let state = {
        focalMoment: faker.random.uuid()
      };
      let momentId = faker.random.uuid();
      state = storyBranchReducer(state, updateFocalMoment(momentId));
      expect(state.focalMoment).toEqual(momentId);
    });
  });
  
  describe('updateFocalMomentMode', () => {
    
    it('Updates the focalMomentMode in state', () => {
      let state = {
        focalMomentMode: faker.random.alphaNumeric(10)
      };
      let mode = faker.random.alphaNumeric(11);
      state = storyBranchReducer(state, updateFocalMomentMode(mode));
      expect(state.focalMomentMode).toEqual(mode);
    });
  });
  
});
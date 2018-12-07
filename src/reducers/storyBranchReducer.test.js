import {default as storyBranchReducer, initialState} from './storyBranchReducer';
import {LOAD_DEFAULT_BRANCH, loadDefaultBranch} from '../actions';

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
  
  
});
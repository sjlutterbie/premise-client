import faker from 'faker';

import {default as storyBranchReducer, initialState} from './storyBranchReducer';
import {
  LOAD_DEFAULT_BRANCH, loadDefaultBranch,
  UPDATE_FOCAL_MOMENT, updateFocalMoment,
  UPDATE_FOCAL_MOMENT_MODE, updateFocalMomentMode,
  HANDLE_MOMENT_TEXT_CLICK, handleMomentTextClick,
  STORYNETWORK_REQUEST, storyNetworkRequest,
  STORYNETWORK_SUCCESS, storyNetworkSuccess,
  STORYNETWORK_ERROR, storyNetworkError
} from '../actions';

describe('storyBranchState', () => {

  it('Should contain the expected defaults', () => {
    const expectedKeys = ['currentBranch', 'focalMoment', 'focalMomentMode',
                          'loadingStoryNetwork', 'storyNetworkError',
                          'storyNetwork'];
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
  
  describe('handleMomentTextClick', () => {
    
    it('Updates state when focalMomentMode = `read` or `actions`', () => {
      const allowedModes = ['read', 'actions'];
      allowedModes.forEach(mode => {
        let state = {
          focalMomentMode: mode,
          focalMoment: faker.random.uuid()
        };
        const momentId = faker.random.uuid();
        state = storyBranchReducer(state, handleMomentTextClick(momentId));
        expect(state.focalMoment).toEqual(momentId);
        expect(state.focalMomentMode).toEqual('actions');
      });
    });
    
    it('Does NOT update state when focalMomentMode is `create`)', () => {
      const origMomentId = faker.random.uuid();
      let state = {
        focalMomentMode: 'create',
        focalMoment: origMomentId
      };
      const momentId = faker.random.uuid();
      state = storyBranchReducer(state, handleMomentTextClick(momentId));
      expect(state.focalMoment).toEqual(origMomentId);
    });
  });
  
  describe('storyNetworkRequest', () => {
    
    it('Sets loadingStoryNetwork to true', () => {
      let state = {
        loadingStoryNetwork: false
      };
      state = storyBranchReducer(state, storyNetworkRequest());
      expect(state.loadingStoryNetwork).toEqual(true);
    });
    
  });
  
  describe('storyNetworkSuccess', () => {
    
    it('Sets loadingStoryNetwork to false, and loads storyNetwork', () => {
      let state = {
        loadingStoryNetwork:true,
        storyNetwork: null
      };
      const testNetwork = [
        faker.random.alphaNumeric(10),
        faker.random.alphaNumeric(10)
      ];
      state = storyBranchReducer(state, storyNetworkSuccess(testNetwork));
      expect(state.loadingStoryNetwork).toEqual(false);
      expect(state.storyNetwork).toEqual(testNetwork);
    });
  });
  
  describe('storyNetworkError', () => {
    
    it('Sets loadingStoryNetwork to false; storyNetworkError to true', () => {
      let state = {
        loadingStoryNetwork: true,
        storyNetworkError: false
      };
      state = storyBranchReducer(state, storyNetworkError());
      expect(state.loadingStoryNetwork).toEqual(false);
      expect(state.storyNetworkError).toEqual(true);
    });
  });
});
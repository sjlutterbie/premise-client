import faker from 'faker';

import {
  LOAD_DEFAULT_BRANCH, loadDefaultBranch,
  UPDATE_FOCAL_MOMENT, updateFocalMoment,
  UPDATE_FOCAL_MOMENT_MODE,updateFocalMomentMode,
  HANDLE_MOMENT_TEXT_CLICK, handleMomentTextClick,
  STORYNETWORK_REQUEST, storyNetworkRequest,
  STORYNETWORK_SUCCESS, storyNetworkSuccess,
  STORYNETWORK_ERROR, storyNetworkError,
  UPDATE_STORY_NETWORK_ID, updateStoryNetworkId,
  UPDATE_ENDPOINT_MOMENT, updateEndpointMoment,
  loadStoryNetwork
} from './storyBranchActions';


describe('storyNetwork actions', () => {
  
  describe('storyNetworkRequest', () => {
    
    it('Should return the action', () => {
      const action = storyNetworkRequest();
      expect(action.type).toEqual(STORYNETWORK_REQUEST);
    });
    
    it('Should return the expected value', () => {
      const action = storyNetworkRequest();
      expect(action.loadingStoryNetwork).toEqual(true);
    });
  });
  
  describe('storyNetworkSuccess', () => {
    
    it('Should return the action', () => {
      const action = storyNetworkSuccess();
      expect(action.type).toEqual(STORYNETWORK_SUCCESS);
    });
    
    it('Should return the expected values', () => {
      const testNetwork= [
        faker.random.alphaNumeric(10),
        faker.random.alphaNumeric(10)
      ];
      const action = storyNetworkSuccess(testNetwork);
      expect(action.loadingStoryNetwork).toEqual(false);
      expect(action.storyNetwork).toEqual(testNetwork);
    });
  });
  
  describe('storyNetworkError', () => {

    it('Should return the action', () => {
      const action = storyNetworkError();
      expect(action.type).toEqual(STORYNETWORK_ERROR);
    });
    
    it('Should set loadingStoryNetwork and storyNetworkError to false', () => {
      const action = storyNetworkError();
      expect(action.loadingStoryNetwork).toEqual(false);
      expect(action.storyNetworkError).toEqual(true);
    });
  });
  
  describe('updateStoryNetworkId', () => {
    
    it('Should return the action', () => {
      const action = updateStoryNetworkId();
      expect(action.type).toEqual(UPDATE_STORY_NETWORK_ID);
    });
    
    it('Should return the expected value', () => {
      const testId = faker.random.alphaNumeric(10);
      const action = updateStoryNetworkId(testId);
      expect(action.storyNetworkId).toEqual(testId);
    });
  });
});

describe('Story Branch Actions', () => {
  
  describe('loadDefaultBranch', () => {
    
    it('Should return the action', () => {
      const action = loadDefaultBranch();
      expect(action.type).toEqual(LOAD_DEFAULT_BRANCH);
    });
    
    it('Should return the correct value', () => {
      const branch = {foo: 'bar'};
      const action = loadDefaultBranch(branch);
      expect(action.branch).toEqual(branch);
    });
  });
  
  describe('updateFocalMoment', () => {
    
    it('Should return the action', () => {
      const action = updateFocalMoment();
      expect(action.type).toEqual(UPDATE_FOCAL_MOMENT);
    });
    
    it('Should return the correct value', () => {
      const momentId = faker.random.uuid();
      const action = updateFocalMoment(momentId);
      expect(action.momentId).toEqual(momentId);
    });
  });
  
  describe('updateFocalMomentMode', () => {
    
    it('Should return the action', () => {
      const action = updateFocalMomentMode();
      expect(action.type).toEqual(UPDATE_FOCAL_MOMENT_MODE);
    });
    
    it('Should return the correct value', () => {
      const mode = faker.random.alphaNumeric(10);
      const action = updateFocalMomentMode(mode);
      expect(action.mode).toEqual(mode);
    });
  });
  
  describe('handleMomentTextClick', () => {
    
    it('Should return the action', () => {
      const action = handleMomentTextClick();
      expect(action.type).toEqual(HANDLE_MOMENT_TEXT_CLICK);
    });
    
    it('Should return the correct value', () => {
      const momentId = faker.random.uuid();
      const action = handleMomentTextClick(momentId);
      expect(action.momentId).toEqual(momentId);
    });
  });
  
  describe('updateEndpointMoment', () => {
    
    it('Should return the action', () => {
      const action = updateEndpointMoment();
      expect(action.type).toEqual(UPDATE_ENDPOINT_MOMENT);
    });
    
    it('Should return the correct value', () => {
      const testId = faker.random.alphaNumeric(10);
      const action = updateEndpointMoment(testId);
      expect(action.momentId).toEqual(testId);
    });
  });
});
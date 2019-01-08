import faker from 'faker';

import {
  LOAD_DEFAULT_BRANCH, loadDefaultBranch,
  UPDATE_FOCAL_MOMENT, updateFocalMoment,
  UPDATE_FOCAL_MOMENT_MODE,updateFocalMomentMode,
  HANDLE_MOMENT_TEXT_CLICK, handleMomentTextClick
} from './storyBranchActions';

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
  
  
});
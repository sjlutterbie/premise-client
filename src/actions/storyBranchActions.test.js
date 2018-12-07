import {LOAD_DEFAULT_BRANCH, loadDefaultBranch} from './storyBranchActions';

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
  
});
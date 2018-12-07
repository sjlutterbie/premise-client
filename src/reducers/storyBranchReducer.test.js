import {default as storyBranchReducer, initialState} from './storyBranchReducer';

describe('storyChainState', () => {

  it('Should contain the expected defaults', () => {
    const expectedKeys = ['currentBranch', 'focalMoment', 'focalMomentMode'];
    expect(Object.keys(initialState)).toEqual(expectedKeys);
  });

});


import {LOAD_DEFAULT_BRANCH} from '../actions';

// Set initial state items for storyBranch elements
export const initialState = {
  
  // Current storyBranch
  currentBranch: [],
  
  // The moment on which the user may be acting, or which they have selected as
  //  their starting moment within a storyChain
  focalMoment: null,
  
  // <Moment/> mode for the focal moment
  focalMomentMode: 'read',

};

export default (state = initialState, action) => {
  
  if(action.type === LOAD_DEFAULT_BRANCH) {
    return Object.assign({}, state, {
      currentBranch: action.branch
    });
  }
  
  return state;
  
};
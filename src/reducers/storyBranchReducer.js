import {
  LOAD_DEFAULT_BRANCH,
  UPDATE_FOCAL_MOMENT,
  UPDATE_FOCAL_MOMENT_MODE,
  HANDLE_MOMENT_TEXT_CLICK,
  STORYNETWORK_REQUEST,
  STORYNETWORK_SUCCESS,
  STORYNETWORK_ERROR
} from '../actions';

// Set initial state items for storyBranch elements
export const initialState = {
  
  // Current storyBranch
  currentBranch: [],
  
  // The moment on which the user may be acting, or which they have selected as
  //  their starting moment within a storyChain
  focalMoment: null,
  
  // <Moment/> mode for the focal moment
  focalMomentMode: 'read',
  
  loadingStoryNetwork: false,
  
  storyNetworkError: false,
  
  storyNetwork: null

};

export default (state = initialState, action) => {
  
  if(action.type === LOAD_DEFAULT_BRANCH) {
    return Object.assign({}, state, {
      currentBranch: action.branch
    });
  }
  
  if(action.type === UPDATE_FOCAL_MOMENT) {
    return Object.assign({}, state, {
      focalMoment: action.momentId
    });
  }
  
  if(action.type === UPDATE_FOCAL_MOMENT_MODE) {
    return Object.assign({}, state, {
      focalMomentMode: action.mode
    });
  }
  
  // HANDLE_MOMENT_TEXT_CLICK
    // If focalMomentMode === 'create'; no action
    // if focalMomentMode != 'create'; set mode to 'create', and momentId to 'id'

  if(action.type === HANDLE_MOMENT_TEXT_CLICK) {
    
    if(state.focalMomentMode !== 'create') {
      return Object.assign({}, state, {
        focalMoment: action.momentId,
        focalMomentMode: 'actions'
      });
    }
  }
  
  if (action.type === STORYNETWORK_REQUEST) {
    
    console.log('storyNetworkRequest was called');
    
    return Object.assign({},state, {
      loadingStoryNetwork: action.loadingStoryNetwork
    });
  }
  
  if (action.type === STORYNETWORK_SUCCESS) {
    
    console.log('storyNetworkSuccess was called');
    
    return Object.assign({}, state, {
      loadingStoryNetwork: action.loadingStoryNetwork,
      storyNetwork: action.storyNetwork
    });
  }
  
  if (action.type === STORYNETWORK_ERROR) {
    
    console.log('StoryNetworkError was called');
    
    return Object.assign({}, state, {
      loadingStoryNetwork: false,
      storyNetworkError: true
    });
  }

  return state;
  
};
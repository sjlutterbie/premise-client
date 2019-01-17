import {REACT_APP_PREMISE_BASE_API_URL} from '../config';

import {normalizeResponseErrors} from './utils';

// STORY NETWORK ACTIONS

export const STORYNETWORK_REQUEST = 'STORYNETWORK_REQUEST';
export const storyNetworkRequest = () => ({
  type: STORYNETWORK_REQUEST,
  loadingStoryNetwork: true
});

export const STORYNETWORK_SUCCESS = 'STORYNETWORK_SUCCESS';
export const storyNetworkSuccess = (storyNetwork) => ({
  type: STORYNETWORK_SUCCESS,
  loadingStoryNetwork: false,
  storyNetwork
});

export const STORYNETWORK_ERROR = 'STORYNETWORK_ERROR';
export const storyNetworkError = () => ({
  type: STORYNETWORK_ERROR,
  loadingStoryNetwork: false,
  storyNetworkError: true
});


// STORY BRANCH ACTIONS

export const LOAD_DEFAULT_BRANCH = 'LOAD_DEFAULT_BRANCH';
export const loadDefaultBranch = (branch) => ({
  type: LOAD_DEFAULT_BRANCH,
  branch
});

export const UPDATE_FOCAL_MOMENT = 'UPDATE_FOCAL_MOMENT';
export const updateFocalMoment = (momentId) => ({
  type: UPDATE_FOCAL_MOMENT,
  momentId
});

export const UPDATE_FOCAL_MOMENT_MODE = 'UPDATE_FOCAL_MOMENT_MODE';
export const updateFocalMomentMode = (mode) => ({
  type: UPDATE_FOCAL_MOMENT_MODE,
  mode
});

export const HANDLE_MOMENT_TEXT_CLICK = 'HANDLE_MOMENT_TEXT_CLICK';
export const handleMomentTextClick = (momentId) => ({
  type: HANDLE_MOMENT_TEXT_CLICK,
  momentId
});

export const loadStoryNetwork = (storyNetworkId) => (dispatch, getState) => {
  
  // Signal start of loading process
  dispatch(storyNetworkRequest());

  return fetch(
    `${REACT_APP_PREMISE_BASE_API_URL}/moment/storynetwork/${storyNetworkId}`,
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${getState().userAuth.authToken}`
      }
    }
  )
//  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(res => dispatch(storyNetworkSuccess(res.storyNetwork)))
  .catch(err => {
    dispatch(storyNetworkError());
  });

};
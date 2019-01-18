import {REACT_APP_PREMISE_BASE_API_URL} from '../config';

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

export const UPDATE_STORY_NETWORK_ID = 'UPDATE_STORY_NETWORK_ID';
export const updateStoryNetworkId = (storyNetworkId) => ({
  type: UPDATE_STORY_NETWORK_ID,
  storyNetworkId
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

export const UPDATE_ENDPOINT_MOMENT = 'UPDATE_ENDPOINT_MOMENT';
export const updateEndpointMoment = (momentId) => ({
  type: UPDATE_ENDPOINT_MOMENT,
  momentId
});

export const UPDATE_CURRENT_BRANCH = 'UPDATE_CURRENT_BRANCH';
export const updateCurrentBranch = (branch) => ({
  type: UPDATE_CURRENT_BRANCH,
  branch
});

// ASYNC ACTIONS

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
  .then(res => res.json())
  .then(res => {
    dispatch(storyNetworkSuccess(res));
    dispatch(updateStoryNetworkId(storyNetworkId));
  })
  .catch(err => {
    dispatch(storyNetworkError());
  });

};


export const getMaxEndpoint = (storyNetworkId) => (dispatch, getState) => {
  
  const reqUrl = REACT_APP_PREMISE_BASE_API_URL
    + `/moment/storynetwork/${storyNetworkId}/max-lineage`;
  
  return fetch(
     reqUrl,
     {
       method: 'GET',
       headers: {
         'Authorization': `Bearer ${getState().userAuth.authToken}`
       }
     }
  )
  .then(res => res.json())
  .then(res => {
    dispatch(updateEndpointMoment(res));
    dispatch(getStoryBranch(res));
  })
  .catch(err => {
  });
};

export const getStoryBranch = (endMoment) => (dispatch, getState) => {
  
  const endMomentId = endMoment.id;
  // The id of the first moment in the endMoment's lineage
  const startMomentId = endMoment.lineage[0];
  
  const reqUrl = REACT_APP_PREMISE_BASE_API_URL
    + `/moment/storychain?start=${startMomentId}&end=${endMomentId}`;
  
  return fetch(
    reqUrl,
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${getState().userAuth.authToken}`
      }
    }
  )
  .then(res => res.json())
  .then(res => {
    dispatch(updateCurrentBranch(res));
  })
  .catch(err => {
    console.log(err);
  });
};

export const createMoment = (parentMoment, content) => (dispatch, getState) => {
  
  const reqUrl = REACT_APP_PREMISE_BASE_API_URL
    + `/moment`;
    
  const momentData = {
    creator: getState().userAuth.user.id,
    storyNetwork: parentMoment.storyNetwork,
    content: content,
    isPremiseMoment: false,
    premise: parentMoment.premise || parentMoment.id,
    children: [],
    lineage: parentMoment.lineage
  };
  
  console.log(momentData);
    
  return fetch(
    reqUrl,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getState().userAuth.authToken}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(momentData)
    }
  )
  .then(res => res.json())
  .then(res => {
    dispatch(updateEndpointMoment(res));
    dispatch(getStoryBranch(res));
  })
  .catch(err => {
    console.log(err);
  });
};
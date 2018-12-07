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
})
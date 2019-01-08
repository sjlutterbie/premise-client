export {
  SET_USER_MENU_VIEW, setUserMenuView,                  // Simple onClick event (can also simplify!)
  MONITOR_RESPONSIVE_BRACKET, monitorResponsiveBracket, // Event Listener (PremiseApp, extra logic)
  ADD_VISIBLE_PANES, addVisiblePanes,
  REMOVE_VISIBLE_PANES, removeVisiblePanes,
  UPDATE_USER_GUIDE_PAGE, updateUserGuidePage,
  UPDATE_CURRENT_LOCATION, updateCurrentLocation,
  UPDATE_AUTH_STATUS, updateAuthStatus
} from './navActions';
        
export {
  LOAD_DEFAULT_BRANCH, loadDefaultBranch,               // componentWillMount (PremiseApp)
  UPDATE_FOCAL_MOMENT, updateFocalMoment,               // Simple onClick event (clean code)
  UPDATE_FOCAL_MOMENT_MODE, updateFocalMomentMode,      // Multiple state updates
  HANDLE_MOMENT_TEXT_CLICK, handleMomentTextClick
} from './storyBranchActions';

export {
  REGISTER_NEW_USER, registerNewUser
} from './userAuthActions';
import {combineReducers, createStore} from 'redux';

// Reducers
import {navReducer, storyBranchReducer} from './reducers';

// Build central reducer
const centralReducer = combineReducers({
  navState: navReducer,
  storyBranch: storyBranchReducer
});

// Export store
export default createStore(centralReducer);
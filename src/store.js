import {combineReducers, createStore} from 'redux';

// Reducers
import {navReducer, storyBranchReducer, formsReducer} from './reducers';

// Build central reducer
const centralReducer = combineReducers({
  navState: navReducer,
  storyBranch: storyBranchReducer,
  forms: formsReducer
});

// Export store
export default createStore(centralReducer);
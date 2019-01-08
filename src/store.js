import {combineReducers, createStore} from 'redux';

// Reducers
import {navReducer, storyBranchReducer} from './reducers';
import {reducer as formsReducer} from 'redux-form';

// Build central reducer
const centralReducer = combineReducers({
  navState: navReducer,
  storyBranch: storyBranchReducer,
  form: formsReducer
});

// Export store
export default createStore(centralReducer);
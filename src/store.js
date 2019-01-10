import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import {navReducer, storyBranchReducer, userAuthReducer} from './reducers';
import {reducer as formsReducer} from 'redux-form';

// Build central reducer
const centralReducer = combineReducers({
  navState: navReducer,
  storyBranch: storyBranchReducer,
  form: formsReducer,
  userAuth: userAuthReducer
});

// Export store
export default createStore(centralReducer, applyMiddleware(thunk));
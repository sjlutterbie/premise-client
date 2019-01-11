import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions';

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

// Create store
const store = createStore(centralReducer, applyMiddleware(thunk));

// Load authToken, if it exists
const authToken = loadAuthToken();
if (authToken) {
  store.dispatch(setAuthToken(authToken));
  store.dispatch(refreshAuthToken());
}

export default store;
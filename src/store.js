import {combineReducers, createStore} from 'redux';

// Reducers
import {navReducer} from './reducers';

// Build central reducer
const centralReducer = combineReducers({
  navState: navReducer
});

// Export store
export default createStore(centralReducer);
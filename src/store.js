import {createStore} from 'redux';

// Reducers
import {navReducer} from './reducers';

export default createStore(navReducer);
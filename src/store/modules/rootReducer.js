import { combineReducers } from 'redux';

import user from './user/reducer';
import types from './types/reducer';

export default combineReducers({
    user,
    types,
});

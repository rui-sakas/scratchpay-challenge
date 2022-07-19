import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { authenticationReducer } from './authentication';

export default combineReducers({
    users: usersReducer,
    authentication: authenticationReducer
});

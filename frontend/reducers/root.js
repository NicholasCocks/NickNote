import { combineReducers } from 'redux';
import sessionReducer from '../reducers/session';

export default combineReducers({
    session: sessionReducer,
})
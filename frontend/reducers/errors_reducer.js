import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import notebookErrorsReducer from './notebook_errors_reducer'; 

export default combineReducers({
    session: sessionErrorsReducer,
    notebook: notebookErrorsReducer,
});
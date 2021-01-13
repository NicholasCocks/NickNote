import { RECEIVE_NOTEBOOK_ERRORS } from '../actions/notebook_actions';
import { CLEAR_ERRORS } from '../actions/session';

const notebookErrorsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case (RECEIVE_NOTEBOOK_ERRORS):
            const newState = Object.assign({}, { errors: [action.errors.responseJSON] })
            return Object.values(newState);
        case (CLEAR_ERRORS):
            let blankState = Object.assign({}, { errors: [""] });
            return Object.values(blankState);
        default:
            return state
    } 
} 

export default notebookErrorsReducer;
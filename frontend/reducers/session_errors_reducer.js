import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session';


function sessionErrorsReducer(state = [], action) {
    Object.freeze(state);
    switch (action.type) {
        case (RECEIVE_CURRENT_USER):
            return [];
        case (CLEAR_ERRORS):
            let blankState = Object.assign({}, { errors: [""] });
            return Object.values(blankState);
        case (RECEIVE_ERRORS):
            const newState = Object.assign({}, { errors: [action.errors.responseJSON] })
            return Object.values(newState);
        default:
            return state;
    }
}


export default sessionErrorsReducer;
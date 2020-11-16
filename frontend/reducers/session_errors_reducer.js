import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session';


function sessionErrorsReducer(state = [], action) {
    Object.freeze(state);
    switch (action.type) {
        case (RECEIVE_CURRENT_USER):
            return [];
        case (RECEIVE_ERRORS):
            const newState = Object.assign(state, { errors: action.errors })
            return Object.values(newState)
        default:
            return state;
    }
}


export default sessionErrorsReducer;
import { RECEIVE_CURRENT_USER } from '../actions/session';

function usersReducer(state = {}, action) {
    Object.freeze(state)
    switch (action.type) {
        case (RECEIVE_CURRENT_USER):
            const newState = Object.assign({}, state, {
                [action.user.id]: action.user
            });
            return newState;
        default:
            return state
    }
}

export default usersReducer;
import {
    RECEIVE_ALL_NOTES
} from '../actions/notebook_actions';

const NotebooksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_ALL_NOTES):
            return Object.assign({}, state, action.notes)
        default:
            return state;
    }
}

export default NotebooksReducer;
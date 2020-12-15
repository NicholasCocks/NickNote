import {
    RECEIVE_ALL_NOTES,
    RECEIVE_NOTE
} from '../actions/note_actions';

import {
    LOGOUT_CURRENT_USER,
} from '../actions/session';

const NotesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_ALL_NOTES):
            return Object.assign({}, state, action.notes);
        case (RECEIVE_NOTE):
            return Object.assign({}, state, {
                [action.note.id]: action.note
            })
        case (LOGOUT_CURRENT_USER):
            return Object.assign({})
        default:
            return state;
    }
}

export default NotesReducer;
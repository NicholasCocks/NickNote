import {
    RECEIVE_ALL_NOTES,
    RECEIVE_NOTE
} from '../actions/note_actions';

const NotesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_ALL_NOTES):
            return Object.assign({}, state, action.notes);
        case (RECEIVE_NOTE):
            return Object.assign({}, state, {
                [action.note.id]: action.note
            })
        default:
            return state;
    }
}

export default NotesReducer;
import {
    RECEIVE_NOTES_FROM_TAG
} from '../actions/taggable_actions';

const NotesFromTagReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_NOTES_FROM_TAG):
            return Object.assign({}, state, {
                [action.tag.id]: action.notes
            })
        default:
            return state;
    }
}

export default NotesFromTagReducer;
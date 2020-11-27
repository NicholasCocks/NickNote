import {
    RECEIVE_TAGS_FROM_NOTE,
} from '../actions/taggable_actions'

const TagsFromNoteReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_TAGS_FROM_NOTE):
            return Object.assign({}, state, {
                [action.note.id]: action.tags
            })
        default:
            return state;
    }
}

export default TagsFromNoteReducer;
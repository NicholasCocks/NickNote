import {
    RECEIVE_ALL_TAGS,
    RECEIVE_TAG,
    REMOVE_TAG
} from '../actions/tags_actions';

const TagsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_ALL_TAGS):
            return Object.assign({}, state, action.tags);
        case (RECEIVE_TAG):
            return Object.assign({}, state, {
                [action.tag.id]: action.tag
            })
        default:
            return state;
    }
}

export default TagsReducer;
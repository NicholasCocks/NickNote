import {
    RECEIVE_ALL_TAGGABLES,
    RECEIVE_TAGGABLE
} from '../actions/taggable_actions';

const taggableReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ALL_TAGGABLES:
            return Object.assign({}, state, action.taggables);
        case RECEIVE_TAGGABLE:
            return Object.assign({}, state, action.taggable);
        default:
            return state;
    }
};

export default taggableReducer;
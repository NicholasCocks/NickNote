import {
    RECEIVE_ALL_TAGGABLES,
    RECEIVE_TAGGABLE,
    REMOVE_TAGGABLE
} from '../actions/taggable_actions';

const taggableReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ALL_TAGGABLES:
            return Object.assign({}, state, action.taggables);
        case RECEIVE_TAGGABLE:
            return Object.assign({}, state, action.taggable);
        case REMOVE_TAGGABLE:
            let nextState = Object.assign({}, state);
            delete nextState[action.taggable.id]
            return nextState;
        default:
            return state;
    }
};

export default taggableReducer;
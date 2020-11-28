import {
    RECEIVE_ALL_TAGGABLES
} from '../actions/taggable_actions';

const taggableReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_TAGGABLES:
            return Object.assign({}, state, action.taggables);
        default:
            return state;
    }
};

export default taggableReducer;
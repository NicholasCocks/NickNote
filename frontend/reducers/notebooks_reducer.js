import {
    RECEIVE_ALL_NOTEBOOKS,
    RECEIVE_NOTEBOOK
} from '../actions/notebook_actions';

const NotebooksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case (RECEIVE_ALL_NOTEBOOKS):
            return Object.assign({}, state, action.notebooks);
        case (RECEIVE_NOTEBOOK):
            debugger
            return Object.assign({}, state, {
                [action.notebook.id]: action.notebook
            })
        default:
            return state;
    }
}

export default NotebooksReducer;
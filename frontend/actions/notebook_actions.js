import * as NoteBookApiUtil from '../util/notebooks_api';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';

const receiveAllNotes = notes => {
    return {
        type: RECEIVE_ALL_NOTES,
        notes
    }
}

export const fetchAllNotes = () => dispatch => {
    return NoteBookApiUtil.fetchAllNotes().then(notes => dispatch(receiveAllNotes(notes)));
}
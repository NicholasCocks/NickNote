export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';

const receiveAllNotes = notes => {
    return {
        type: RECEIVE_ALL_NOTES,
        notes
    }
}

export const fetchNotes = () => dispatch => {
    return NoteApiUtil.fetchNotes().then(notes => dispatch(receiveAllNotes(notes)));
}
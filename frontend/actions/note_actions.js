import * as NoteApiUtil from '../util/notes_api';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_AUTOSAVE = 'RECEIVE_AUTOSAVE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

const receiveAllNotes = notes => {
    return {
        type: RECEIVE_ALL_NOTES,
        notes
    }
}

const receiveNote = note => {
    return {
        type: RECEIVE_NOTE,
        note
    }
}

const receiveAutosave = message => {
    return {
        type
    }
}

const removeNote = note => {
    return {
        type: REMOVE_NOTE,
        note
    }
}

export const fetchAllNotes = () => dispatch => {
    return NoteApiUtil.fetchAllNotes().then(notes => dispatch(receiveAllNotes(notes)));
}

export const fetchNote = (noteId) => dispatch => {
    return NoteApiUtil.fetchNote(noteId).then(note => dispatch(receiveNote(note)));
}

export const createNote = (note) => dispatch => {
    return NoteApiUtil.createNote(note).then(note => dispatch(receiveNote(note)));
}

export const updateNote = (note) => dispatch => {
    debugger
    return NoteApiUtil.updateNote(note).then(note => dispatch(receiveNote(note)));
}
import * as NoteBookApiUtil from '../util/notebooks_api';

export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const RECEIVE_NOTEBOOK_ERRORS = 'RECEIVE_NOTEBOOK_ERRORS';

const receiveAllNotebooks = notebooks => {
    return {
        type: RECEIVE_ALL_NOTEBOOKS,
        notebooks
    }
}

const receiveNotebook = notebook => {
    return {
        type: RECEIVE_NOTEBOOK,
        notebook
    }
}

const removeNotebook = notebook => {
    return {
        type: REMOVE_NOTEBOOK,
        notebook
    }
}

const receiveNotebookErrors = errors => {
    return {
        type: RECEIVE_NOTEBOOK_ERRORS,
        errors
    }
}

export const fetchAllNotebooks = () => dispatch => {
    return NoteBookApiUtil.fetchAllNotebooks().then(notebooks => dispatch(receiveAllNotebooks(notebooks)));
}

export const fetchNotebook = (notebookId) => dispatch => {
    return NoteBookApiUtil.fetchNotebook(notebookId).then(notebook => dispatch(receiveNotebook(notebook)));
}

export const createNotebook = (notebook) => dispatch => {
    return NoteBookApiUtil.createNotebook(notebook).then(notebook => dispatch(receiveNotebook(notebook)), 
    errors => dispatch(receiveNotebookErrors(errors)));
}

export const updateNotebook = (notebook) => dispatch => {
    return NoteBookApiUtil.updateNotebook(notebook).then(notebook => dispatch(receiveNotebook(notebook)));
}

export const deleteNotebook = (notebook) => disptach => {
    return NoteBookApiUtil.deleteNotebook(notebook).then(notebook => disptach(removeNotebook(notebook)))
}
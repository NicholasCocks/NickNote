import * as TaggableApiUtil from '../util/taggable_api';

export const RECEIVE_TAGS_FROM_NOTE = 'RECEIVE_TAGS_FROM_NOTE';
export const RECEIVE_NOTES_FROM_TAG = 'RECEIVE_NOTES_FROM_TAG';

const receiveTagsFromNote = (tags, note) => {
    return {
        type: RECEIVE_TAGS_FROM_NOTE,
        tags,
        note
    }
}

const receiveNotesFromTag = (notes, tag) => {
    return {
        type: RECEIVE_NOTES_FROM_TAG,
        notes,
        tag
    }
}

export const findNotesWithTag = (tag) => dispatch => {
    return TaggableApiUtil.findNotesWithTag(tag).then(notes => dispatch(receiveNotesFromTag(notes, tag)));
}

export const findTagsWithNote = (note) => dispatch => {
    return TaggableApiUtil.findTagsWithNote(note).then(tags => dispatch(receiveTagsFromNote(tags, note)))
}
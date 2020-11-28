import * as TaggableApiUtil from '../util/taggable_api';

export const RECEIVE_TAGGABLE = 'RECEIVE_TAGGABLE';
export const RECEIVE_ALL_TAGGABLES = 'RECEIVE_ALL_TAGGABLES';
export const REMOVE_TAGGABLE = 'REMOVE_TAGGABLE';

const receiveAllTaggables = (taggables) => {
    return {
        type: RECEIVE_ALL_TAGGABLES,
        taggables
    }
}

const receiveTaggable = (taggable) => {
    return {
        type: RECEIVE_TAGGABLE,
        taggable
    }
}

const removeTaggable = (taggable) => {
    return {
        type: REMOVE_TAGGABLE,
        taggable
    }
}

export const fetchAllTaggables = () => dispatch => {
    return TaggableApiUtil.fetchAllTaggables().then(taggables => dispatch(receiveAllTaggables(taggables)));
}

export const createTaggable = (note, tag) => dispatch => {
    return TaggableApiUtil.createTaggable(note, tag).then(taggable => dispatch(receiveTaggable(taggable)));
}

export const deleteTaggable = (taggable) => dispatch => {
    return TaggableApiUtil.deleteTaggable(taggable).then(() => dispatch(removeTaggable(taggable)));
}
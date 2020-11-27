import * as TagApiUtil from '../util/tags_api';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

const receiveAllTags = tags => {
    return {
        type: RECEIVE_ALL_TAGS,
        tags
    }
}

const receiveTag = tag => {
    return {
        type: RECEIVE_TAG,
        tag
    }
}

const removeTag = tag => {
    return {
        type: REMOVE_TAG,
        tag
    }
}

export const fetchAllTags = () => dispatch => {
    return TagApiUtil.fetchAllTags().then(tags => dispatch(receiveAllTags(tags)));
}

export const fetchTag = (tagId) => dispatch => {
    return TagApiUtil.fetchTag(tagId).then(tag => dispatch(receiveTag(tag)));
}

export const createTag = (tag) => dispatch => {
    return TagApiUtil.createTag(tag).then(tag => dispatch(receiveTag(tag)));
}

export const updateTag = (tag) => dispatch => {
    return TagApiUtil.updateTag(tag).then(tag => dispatch(receiveTag(tag)));
}

export const deleteTag = (tag) => dispatch => {
    return TagApiUtil.deleteTag(tag).then(tag => dispatch(removeTag(tag)));
}

export const findNotesWithTag = (tag) => dispatch => {}
import * as TaggableApiUtil from '../util/taggable_api';

export const RECEIVE_ALL_TAGGABLES = 'RECEIVE_ALL_TAGGABLES';

const receiveAllTaggables = (taggables) => {
    return {
        type: RECEIVE_ALL_TAGGABLES,
        taggables
    }
}

export const fetchAllTaggables = () => dispatch => {
    return TaggableApiUtil.fetchAllTaggables().then(taggables => dispatch(receiveAllTaggables(taggables)));
}
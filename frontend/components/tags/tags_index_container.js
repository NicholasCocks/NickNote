import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { fetchAllTags } from '../../actions/tags_actions';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchAllTaggables } from '../../actions/taggable_actions';
import { createTag, deleteTag } from '../../actions/tags_actions';


const mapStateToProps = (state) => {
    return {
        tags: state.entities.tags,
        taggables: state.entities.taggables,
        tagsList: Object.values(state.entities.tags).sort((obj1, obj2) => {
            return new Date(obj2.updated_at) - new Date(obj1.updated_at)
        }),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllTags: () => dispatch(fetchAllTags()),
        fetchAllTaggables: () => dispatch(fetchAllTaggables()),
        fetchAllNotes: () => dispatch(fetchAllNotes()),
        createTag: (tag) => dispatch(createTag(tag)),
        deleteTag: (tag) => dispatch(deleteTag(tag)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);
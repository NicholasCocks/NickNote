import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { fetchAllTags } from '../../actions/tags_actions';
import { fetchAllNotes } from '../../actions/note_actions';

const mapStateToProps = (state) => {
    return {
        tags: state.entities.tags,
        tagsList: Object.values(state.entities.tags).sort((obj1, obj2) => {
            return new Date(obj2.updated_at) - new Date(obj1.updated_at)
        }),
        //will need toget all taggables so each tag can show how many notes 
        //its tagged to.
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllTags: () => dispatch(fetchAllTags()),
        fetchAllNotes: () => dispatch(fetchAllNotes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);
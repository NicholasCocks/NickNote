import { connect } from 'react-redux';
import NotebookIndexItem from './notebook_index_item';

const mapStateToProps = (state, ownProps) => {
    return {
        notes: Object.values(state.entities.notes).filter((note) => {
            return note.notebook_id === ownProps.notebook.id
        }).sort((a, b) => (a.title === "" ? "Untitled" : a.title > b.title) ? 1 : -1)
    }
}

export default connect(mapStateToProps)(NotebookIndexItem);
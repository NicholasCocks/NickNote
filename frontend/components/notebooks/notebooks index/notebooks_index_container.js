import { connect } from 'react-redux';
import { fetchAllNotes } from '../../../actions/note_actions';
import { fetchAllNotebooks, createNotebook, deleteNotebook } from '../../../actions/notebook_actions';
import NotebooksIndex from './notebooks_index';


const mapStateToProps = (state) => {
    return {
        errors: Object.values(state.errors.notebook),
        notebooks: state.entities.notebooks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNotebook: (notebook) => dispatch(createNotebook(notebook)),
        fetchAllNotes: () => dispatch(fetchAllNotes()),
        fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndex);
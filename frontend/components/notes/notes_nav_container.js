import { connect } from 'react-redux';
import NotesNav from './notes_nav';
import { logoutAction, createNote } from '../../actions/session';

const mapStateToProps = (state) => {
    return {
        noteId: state.entities.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAction()),
        createNote: (note) => dispatch(createNote(note))
    }
}

export default connect(null, mapDispatchToProps)(NotesNav)
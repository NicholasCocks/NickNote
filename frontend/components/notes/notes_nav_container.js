import { connect } from 'react-redux';
import NotesNav from './notes_nav';
import { logoutAction } from '../../actions/session';
import { createNote } from '../../actions/note_actions';

const mapStateToProps = (state) => {
    return {
        note: { title: '', body: '' },
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAction()),
        createNote: (note) => dispatch(createNote(note)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesNav)
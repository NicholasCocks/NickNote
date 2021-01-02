import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';
import NotesNav from './notes_nav';
import { logoutAction } from '../../actions/session';
import { createNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
    let notebook_id = 1;


    if (ownProps.location.pathname.slice(0, 15) === "/notes/notebook") {
        notebook_id = parseInt(ownProps.location.pathname.slice(16))
    } else if (!_.isEmpty(state.entities.notebooks)) {
        notebook_id = Object.values(state.entities.notebooks).filter((note) => {
            return note.first_notebook === true
        })[0].id
    }

    return {
        path: ownProps.path,
        history: ownProps.history,
        email: Object.values(state.entities.users)[0].email,
        note: { title: '', body: '', notebook_id: notebook_id },
        notes: Object.values(state.entities.notes).filter(note => {
            return note.trashed === false
        }),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAction()),
        createNote: (note) => dispatch(createNote(note)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesNav))
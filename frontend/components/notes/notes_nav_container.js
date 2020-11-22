import { connect } from 'react-redux';
import NotesNav from './notes_nav';
import { logoutAction } from '../../actions/session';

const mapStateToProps = (state) => {
    return {
        noteslist: Object.values(state.entities.notes).sort((obj1, obj2) => {
            return new Date(obj2.updated_at) - new Date(obj1.updated_at)
        }).filter(note => { return note.trashed === false }),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesNav)
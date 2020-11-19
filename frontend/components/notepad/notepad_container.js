import { connect } from 'react-redux';
import { fetchNote } from '../../actions/note_actions';
import Notepad from './notepad';


const mapStateToProps = (state, ownProps) => {

    return {
        note: state.entities.notes[ownProps.match.params.noteId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNote: noteId => dispatch(fetchNote(noteId)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Notepad);
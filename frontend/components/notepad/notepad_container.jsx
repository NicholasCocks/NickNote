import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../../actions/note_actions';
import Notepad from './notepad';

class NotepadContainer extends React.Component {
    render() {
        const { note, updateNote } = this.props;
        if (!note) return null;
        return( 
            <Notepad 
            note={note}
            updateNote={updateNote}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        note: state.entities.notes[ownProps.match.params.noteId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNote: note => dispatch(updateNote(note)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NotepadContainer);
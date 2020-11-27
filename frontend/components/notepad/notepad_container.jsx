import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../../actions/note_actions';
import Notepad from './notepad';

class NotepadContainer extends React.Component {
    render() {
        const { note, updateNote, path, notebooks } = this.props;
        if (!note) return null;
        return( 
            <Notepad 
            note={note}
            notebooks={notebooks}
            path={path}
            updateNote={updateNote}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        path: ownProps.match.path,
        note: state.entities.notes[ownProps.match.params.noteId],
        notebooks: state.entities.notebooks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNote: note => dispatch(updateNote(note)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NotepadContainer);
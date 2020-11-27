import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../../actions/note_actions';
import { findTagsWithNote } from '../../actions/taggable_actions';
import Notepad from './notepad';

class NotepadContainer extends React.Component {
    render() {
        const { note, updateNote, path, notebooks, findTagsWithNote } = this.props;
        if (!note) return null;
        return( 
            <Notepad 
            note={note}
            notebooks={notebooks}
            path={path}
            updateNote={updateNote}
            findTagsWithNote={findTagsWithNote}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        path: ownProps.match.path,
        note: state.entities.notes[ownProps.match.params.noteId],
        tags: Object.values(state.entities.tags),
        notebooks: state.entities.notebooks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        findTagsWithNote: note => dispatch(findTagsWithNote(note)),
        updateNote: note => dispatch(updateNote(note)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NotepadContainer);
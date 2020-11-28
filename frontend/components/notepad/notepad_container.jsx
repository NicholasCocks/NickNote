import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../../actions/note_actions';
import { createTaggable } from '../../actions/taggable_actions';

import Notepad from './notepad';

class NotepadContainer extends React.Component {
    render() {
        const { note, updateNote, path, notebooks, taggables, tags,
        createTaggable } = this.props;
        if (!note) return null;
        return( 
            <Notepad 
            note={note}
            notebooks={notebooks}
            path={path}
            updateNote={updateNote}
            taggables={taggables}
            tags={tags}
            createTaggable={createTaggable}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        path: ownProps.match.path,
        note: state.entities.notes[ownProps.match.params.noteId],
        taggables: state.entities.taggables,
        tags: state.entities.tags,
        notebooks: state.entities.notebooks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNote: note => dispatch(updateNote(note)),
        createTaggable: (note, tag) => dispatch(createTaggable(note,tag))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NotepadContainer);
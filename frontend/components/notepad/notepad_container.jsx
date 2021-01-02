import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateNote } from '../../actions/note_actions';
import { createTaggable, deleteTaggable } from '../../actions/taggable_actions';


import Notepad from './notepad';

class NotepadContainer extends React.Component {
    render() {
        const { note, updateNote, path, history, notebooks, taggables, tags,
        createTaggable, deleteTaggable } = this.props;
        if (!note) return null;
        return( 
            <Notepad 
            note={note}
            history={history}
            notebooks={notebooks}
            path={path}
            updateNote={updateNote}
            taggables={taggables}
            tags={tags}
            createTaggable={createTaggable}
            deleteTaggable={deleteTaggable}
            />
            )
        }
    }
    
    const mapStateToProps = (state, ownProps) => {
        debugger
        return {
            path: ownProps.match.path,
            history: ownProps.history,
            note: state.entities.notes[ownProps.match.params.noteId],
            taggables: state.entities.taggables,
            tags: state.entities.tags,
            notebooks: state.entities.notebooks,
        }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNote: note => dispatch(updateNote(note)),
        createTaggable: (note, tag) => dispatch(createTaggable(note,tag)),
        deleteTaggable: (taggable) => dispatch(deleteTaggable(taggable)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotepadContainer));
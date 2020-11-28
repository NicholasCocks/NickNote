import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Notebook from './notebook';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchAllTags } from '../../actions/tags_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import { fetchAllTaggables } from '../../actions/taggable_actions';

class TagNotebook extends React.Component {

    render() {
        const { notes, notesList, fetchNotes, fetchNotebooks, fetchAllTags,
            notebookTitle, notebookURL, tag, fetchAllTaggables } = this.props;
        return (
            <Notebook
            tag={tag}
            notes={notes}
            notesList={notesList}
            fetchNotes={fetchNotes}
            fetchNotebooks={fetchNotebooks}
            notebookTitle={notebookTitle} 
            notebookURL={notebookURL}
            fetchAllTags={fetchAllTags}
            fetchAllTaggables={fetchAllTaggables}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => { 
    let notebookTitle = "Tag"; 
    let notesList = [];
    let notebookURL = "tags";
    let tag;
    
    if (state.entities.tags[parseInt(ownProps.match.url.slice(12))]) {
        notebookTitle = state.entities.tags[parseInt(ownProps.match.url.slice(12))].title
        tag = state.entities.tags[parseInt(ownProps.match.url.slice(12))];
        notebookURL = `tags/${tag.id}`
    }

    if (Object.keys(state.entities.notes).length !== 0) {
        notesList = Object.values(state.entities.taggables).map((taggable, index) => {
            debugger
            if (taggable.tag_id === tag.id) {
                return state.entities.notes[taggable.note_id]
            }
        }).filter((note) => { return typeof(note) !== "undefined"})
    }

    return {
        notes: state.entities.notes,
        notesList: notesList,
        notebookTitle: notebookTitle, 
        notebookURL: notebookURL, 
        tag: tag
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchAllNotes()),
        fetchNotebooks: () => dispatch(fetchAllNotebooks()),
        fetchAllTags: () => dispatch(fetchAllTags()),
        fetchAllTaggables: () => dispatch(fetchAllTaggables()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagNotebook));
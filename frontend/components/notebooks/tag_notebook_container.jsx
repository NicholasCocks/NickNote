import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Notebook from './notebook';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchAllTags } from '../../actions/tags_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import { findNotesWithTag } from '../../actions/taggable_actions';

class TagNotebook extends React.Component {

    render() {
        const { notes, notesList, fetchNotes, fetchNotebooks, fetchAllTags,
            notebookTitle, notebookURL, tag, findNotesWithTag } = this.props;
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
            findNotesWithTag={findNotesWithTag}/>
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
    }

    if (state.entities.taggable.notesFromTag) { 
        notesList = Object.values(state.entities.taggable.notesFromTag)
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
        fetchAllTags: () => dispatch(fetchAllTags()),
        fetchNotes: () => dispatch(fetchAllNotes()),
        findNotesWithTag: (tag) => dispatch(findNotesWithTag(tag)),
        fetchNotebooks: () => dispatch(fetchAllNotebooks()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagNotebook));
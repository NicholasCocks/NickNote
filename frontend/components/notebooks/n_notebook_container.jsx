import React from 'react';
import { connect } from 'react-redux';
import Notebook from './notebook';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';

class NNotebookContainer extends React.Component {
    render() {
        const { notes, notesList, fetchNotes, fetchNotebooks, notebookTitle, notebookURL } = this.props;
        if (!notebookTitle) return null;
        return (
            <Notebook
            notes={notes}
            notesList={notesList}
            fetchNotes={fetchNotes}
            fetchNotebooks={fetchNotebooks}
            notebookTitle={notebookTitle} 
            notebookURL={notebookURL}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => { 
    let notebookTitle = "NNotebook"; 
    let notesList = [];
    let notebookURL = "notebook";
    
    if (state.entities.notebooks[parseInt(ownProps.match.url.slice(16))]) {
        notebookTitle = state.entities.notebooks[parseInt(ownProps.match.url.slice(16))].title;
        notesList = Object.values(state.entities.notes).sort((obj1, obj2) => {
            return new Date(obj2.updated_at) - new Date(obj1.updated_at)
        }).filter(note => { return note.trashed === false && note.notebook_id === state.entities.notebooks[parseInt(ownProps.match.url.slice(16))].id});
        notebookURL = `notebook/${state.entities.notebooks[parseInt(ownProps.match.url.slice(16))].id}`
    }
    
    return {
        notes: state.entities.notes,
        notesList: notesList,
        notebookTitle: notebookTitle, 
        notebookURL: notebookURL, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchAllNotes()),
        fetchNotebooks: () => dispatch(fetchAllNotebooks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NNotebookContainer);
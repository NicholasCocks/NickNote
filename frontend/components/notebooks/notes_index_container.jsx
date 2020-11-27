import React from 'react';
import { connect } from 'react-redux';
import Notebook from './notebook';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';

class NotesIndex extends React.Component {
    render() {
        const { notes, notesList, fetchNotes, fetchNotebooks, notebookTitle, notebookURL } = this.props;
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

const mapStateToProps = (state) => { 
    return {
        notes: state.entities.notes,
        notesList: Object.values(state.entities.notes).sort((obj1, obj2) => {
            return new Date(obj2.updated_at) - new Date(obj1.updated_at)
        }).filter(note => { return note.trashed === false }),
        notebookTitle: "All Notes",
        notebookURL: "index",
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchAllNotes()),
        fetchNotebooks: () => dispatch(fetchAllNotebooks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
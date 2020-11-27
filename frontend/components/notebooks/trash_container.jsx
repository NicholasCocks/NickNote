import React from 'react';
import { connect } from 'react-redux';
import Notebook from './notebook';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import { fetchAllNotes } from '../../actions/note_actions';


class TrashContainer extends React.Component {
    render() {
        const { notes, notesList, fetchNotes, fetchNotebooks, notebookTitle, notebookURL } = this.props;
        return(
            <Notebook
            notes={notes}
            notesList={notesList}
            fetchNotebooks={fetchNotebooks}
            fetchNotes={fetchNotes}
            notebookTitle={notebookTitle} 
            notebookURL={notebookURL} />
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        notes: state.entities.notes,
        notesList: Object.values(state.entities.notes).sort((obj1, obj2) => {
            return new Date(obj2.updated_at) - new Date(obj1.updated_at)
        }).filter(note => { return note.trashed === true }),
        notebookTitle: "Trash",
        notebookURL: "trash",
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        fetchNotes: () => dispatch(fetchAllNotes()),
        fetchNotebooks: () => dispatch(fetchAllNotebooks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrashContainer);
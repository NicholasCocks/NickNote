import React from 'react';
import { connect } from 'react-redux';
import Notebook from './notebook';
import { fetchAllNotes } from '../../actions/note_actions';


class TrashContainer extends React.Component {
    render() {
        return(
            <Notebook
            notes={this.props.notes}
            notesList={this.props.notesList}
            fetchNotes={this.props.fetchNotes}
            notebookTitle={this.props.notebookTitle} 
            notebookURL={this.props.notebookURL} />
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
    return {
        fetchNotes: () => dispatch(fetchAllNotes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrashContainer);
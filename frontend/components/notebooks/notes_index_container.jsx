import React from 'react';
import { isEqual } from 'lodash';
import { connect } from 'react-redux';
import Notebook from './notebook';
import { fetchAllNotes } from '../../actions/note_actions';
// import {withRouter} from 'react-router-dom';


class NotesIndex extends React.Component {
    // componentDidUpdate(prevprops) {
    //     debugger
    //    if ( isEqual(Object.values(prevprops.notes), Object.values(this.props.notes)) === false ) {
    //        this.props.fetchNotes();
    //        //if this.props.notes is equal to the current notepad values
    //    }
    // }
    
    render() {
        return (
            <Notebook
            notes={this.props.notes}
            noteslist={this.props.noteslist}
            fetchNotes={this.props.fetchNotes}
            notebookTitle={this.props.notebookTitle} />
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        notes: state.entities.notes,
        noteslist: Object.values(state.entities.notes).sort((obj1, obj2) => {
            return new Date(obj2.updated_at) - new Date(obj1.updated_at)
        }).filter(note => { return note.trashed === false }),
        notebookTitle: "All Notes",
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchAllNotes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
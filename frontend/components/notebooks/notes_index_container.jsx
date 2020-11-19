import React from 'react';
import { connect } from 'react-redux';
import Notebook from './notebook';
import { fetchAllNotes } from '../../actions/notebook_actions';
// import {withRouter} from 'react-router-dom';


class NotesIndex extends React.Component {
    
    render() {
        return (
            <Notebook
            notes={this.props.notes}
            fetchNotes={this.props.fetchNotes}
            notebookTitle={this.props.notebookTitle} />
        )
    }
}

const mapStateToProps = (state) => { 
    debugger
    return {
        notes: Object.values(state.entities.notes),
        notebookTitle: "All Notes",
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchAllNotes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
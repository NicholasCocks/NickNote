import React from 'react';
import { connect } from 'react-redux';
import NotebookContainer from '../notebooks/notebook_container';
import { fetchNotes } from '../../actions/notebook_actions';
// import {withRouter} from 'react-router-dom';


class NotesIndex extends React.Component {
    
    render() {
        return (
            <NotebookContainer 
            action={this.props.fetchNotes}
            notebookTitle={this.props.notebookTitle} />
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        notebookTitle: "All Notes",
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchNotes()),
    }
}

export default connect(mapStateToProps)(NotesIndex);
import React from 'react';
import { connect } from 'react-redux';
import Notebook from './notebook';
import {withRouter} from 'react-router-dom';


class TrashContainer extends React.Component {
    render() {
        return(
            <Notebook
                notes={this.props.notes}
                fetchNotes={this.props.fetchNotes}
                notebookTitle={this.props.notebookTitle} />
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        notes: [{title: "Need trash reducer"}],
        notebookTitle: "Trash",
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: () => console.log('need trash actions creator')
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrashContainer);
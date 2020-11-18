import React from 'react';
import { connect } from 'react-redux';
import NotebookContainer from '../notebooks/notebook_container';
import {withRouter} from 'react-router-dom';


class TrashContainer extends React.Component {
    render() {
        return(
            <NotebookContainer 
                notebookTitle={this.props.notebookTitle} />
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        notebookTitle: "Trash",
    }
}

export default connect(mapStateToProps)(TrashContainer);
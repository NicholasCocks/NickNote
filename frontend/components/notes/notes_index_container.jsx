import React from 'react';
import NotebookContainer from '../notebooks/notebook_container';
import {withRouter} from 'react-router-dom';


class NotesIndex extends React.Component {

    render() {
        return (
            <div>
            <p>NotesIndex</p>
            <NotebookContainer />
            </div>
        )
    }
}

export default withRouter(NotesIndex);
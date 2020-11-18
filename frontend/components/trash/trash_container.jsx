import React from 'react';
import NotebookContainer from '../notebooks/notebook_container';
import {withRouter} from 'react-router-dom';


class TrashContainer extends React.Component {
    render() {
        return(
            <div>
            <p>TrashContainer Component</p>
            <NotebookContainer />
            </div>
        )
    }
}

export default withRouter(TrashContainer);
import React from 'react';
import {withRouter} from 'react-router-dom';

class NotebooksIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <p>NotebooksIndex</p>
        )
    }
}

export default withRouter(NotebooksIndex);
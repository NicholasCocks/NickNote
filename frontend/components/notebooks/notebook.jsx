import React from 'react';
import {withRouter} from 'react-router-dom';


class Notebook extends React.Component {
    render() {
        return(
            <p>Notebook Component</p>
        )
    }
}

export default withRouter(Notebook);
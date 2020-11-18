import React from 'react';
import {withRouter} from 'react-router-dom';
import NotepadContainer from '../notepad/notepad_container';


class Notebook extends React.Component {
    render() {
        return(
            <div className="notebook_container">
                <div className="notebook_noteslist_container">
                    <h3>{this.props.notebookTitle}</h3>
                    <p>Notebook Component</p>
                </div>
                <div>
                    <NotepadContainer />
                </div>
            </div>
        )
    }
}

export default withRouter(Notebook);
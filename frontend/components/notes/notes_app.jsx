import React from 'react';
import NotesNavContainer from './notes_nav_container';
import NotebooksIndexContainer from '../notebooks/notebooks index/notebooks_index_container';
import TagsIndexContainer from '../tags/tags_index';
import NotesIndexContainer from '../notebooks/notes_index_container';
import NNotebookContainer from '../notebooks/n_notebook_container';
import TrashContainer from '../notebooks/trash_container';
import { ProtectedRoute } from '../../util/route_util';
import { Switch, withRouter } from 'react-router-dom';

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <div className="notes_full_page">
                <NotesNavContainer />
                <Switch>
                    <ProtectedRoute path="/notes/notebook/index" component={NotebooksIndexContainer}/>
                    <ProtectedRoute path="/notes/tags/index" component={TagsIndexContainer} />
                    <ProtectedRoute path="/notes/trash" component={TrashContainer} />
                    <ProtectedRoute path="/notes/notebook/:notebookId" component={NNotebookContainer} />
                    <ProtectedRoute component={NotesIndexContainer} /> 
                </Switch>
            </div>
        )
    }
}

export default withRouter(NotesApp);
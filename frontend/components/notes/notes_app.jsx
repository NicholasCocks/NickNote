import React from 'react';
import NotesNavContainer from './notes_nav_container';
import NotebooksIndexContainer from '../notebooks/notebooks_index';
import TagsIndexContainer from '../tags/tags_index';
import NotesIndexContainer from './notes_index_container';
import TrashContainer from '../trash/trash_container';
import { ProtectedRoute } from '../../util/route_util';
import { Switch } from 'react-router-dom';

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
                    <ProtectedRoute path="/notes/notebooks/index" component={NotebooksIndexContainer}/>
                    <ProtectedRoute path="/notes/tags/index" component={TagsIndexContainer} />
                    <ProtectedRoute path="/notes/notebooks/trash" component={TrashContainer} />
                    <ProtectedRoute component={NotesIndexContainer} />
                </Switch>
            </div>
        )
    }
}

export default NotesApp;
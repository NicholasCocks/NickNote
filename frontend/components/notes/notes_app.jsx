import React from 'react';
import NotesNavContainer from './notes_nav_container';
import NotebooksIndexContainer from './notebooks_index_container';
import TagsIndexContainer from './tags_index_container';
import NotesIndex from './notes_index';
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
                    <ProtectedRoute component={NotesIndex} />
                </Switch>
            </div>
        )
    }
}

export default NotesApp;
import React from 'react';
import NotesNavContainer from './notes_nav_container';
import NotebooksIndexContainer from '../notebooks/notebooks index/notebooks_index_container';
import TagsIndexContainer from '../tags/tags_index_container';
import NotesIndexContainer from '../notebooks/notes_index_container';
import NNotebookContainer from '../notebooks/n_notebook_container';
import TagNotebookContainer from '../notebooks/tag_notebook_container';
import TrashContainer from '../notebooks/trash_container';
import StarredIndexContainer from '../notebooks/starred_notebook_container';
import { ProtectedRoute } from '../../util/route_util';
import { Switch, withRouter } from 'react-router-dom';

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {dark: false}
        this.switchThemes = this.switchThemes.bind(this);
    }

    switchThemes() {
        this.setState({dark: !this.state.dark})
        console.log(this.state)
    }

    render() {
        return (
            <div className={this.state.dark ? "notes_full_page theme_dark" : "notes_full_page theme_light"}>
                <NotesNavContainer switchThemes={this.switchThemes}/>
                <Switch>
                    <ProtectedRoute path="/notes/notebook/index" component={NotebooksIndexContainer}/>
                    <ProtectedRoute path="/notes/tags/index" component={TagsIndexContainer} />
                    <ProtectedRoute path="/notes/trash" component={TrashContainer} />
                    <ProtectedRoute path="/notes/starred" component={StarredIndexContainer} />
                    <ProtectedRoute path="/notes/notebook/:notebookId" component={NNotebookContainer} />
                    <ProtectedRoute path="/notes/tags/:tagId" component={TagNotebookContainer} />
                    <ProtectedRoute component={NotesIndexContainer} /> 
                </Switch>
            </div>
        )
    }
}

export default withRouter(NotesApp);
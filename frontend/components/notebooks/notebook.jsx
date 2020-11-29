import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NotepadContainer from '../notepad/notepad_container';
import NotepadSplash from '../notepad/notepad_splash';
import NotebookItem from './notebook_item';


class Notebook extends React.Component {
    componentDidMount() {
        this.props.fetchAllTags();
        this.props.fetchAllTaggables();
        this.props.fetchNotes();
        this.props.fetchNotebooks();
    }

    createNotesList() {
        const notebookURL = this.props.notebookURL;
        
        return this.props.notesList.map((note, index) => {
            return  <NotebookItem key={index} note={note} notebookURL={this}/>
        }, notebookURL);
    }

    createTagsList() {

    }
    
    render() {

        return(
            <div className="notebook_container"> 
                <div className="notebook_noteslist_container">
                    <header className="notebook_header">
                        <h3 className="notebook_header_heading">{this.props.notebookTitle}</h3>
                        <aside>
                            <p>{this.props.notesList.length} notes</p>
                        </aside>
                    </header>
                    <div className="notebook_notebookitem_container">
                        {this.createNotesList()}
                    </div>
                   
                </div>
                <Switch>
                    <ProtectedRoute path="/notes/tags/:tagId/:noteId" component={NotepadContainer} />
                    <ProtectedRoute path="/notes/starred/:noteId" component={NotepadContainer} />
                    <ProtectedRoute path="/notes/index/:noteId" component={NotepadContainer} />
                    <ProtectedRoute path="/notes/trash/:noteId" component={NotepadContainer} />
                    <ProtectedRoute path="/notes/notebook/:notebookId/:noteId" component={NotepadContainer} />
                    
                    <ProtectedRoute component={NotepadSplash} />
               </Switch>
                    
            </div>
        )
    }
}

export default withRouter(Notebook);
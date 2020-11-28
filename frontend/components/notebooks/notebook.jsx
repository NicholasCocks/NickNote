import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NotepadContainer from '../notepad/notepad_container';
import NotepadSplash from '../notepad/notepad_splash';
import NotebookItem from './notebook_item';


class Notebook extends React.Component {
    componentDidMount() {
        if (this.props.fetchAllTags){
            this.props.fetchAllTags();
        }
        this.props.fetchNotes();
        this.props.fetchNotebooks();
        
    }

    componentDidUpdate() {
        if (this.props.tag) {
            this.props.findNotesWithTag(this.props.tag)
        }
    }

    createNotesList() {
        const notebookURL = this.props.notebookURL;
        if (notebookURL === 'tags') {
            return this.props.notesList.map((note, index) => {
                debugger
                if (note[this.props.tag.id]) {
                    return  <NotebookItem key={index} note={note[[this.props.tag.id]]} notebookURL={this}/>
                }  
            }, notebookURL);
        } else {
            return this.props.notesList.map((note, index) => {
                return  <NotebookItem key={index} note={note} notebookURL={this}/>
            }, notebookURL);
        }
        
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
                    <ProtectedRoute path="/notes/index/:noteId" component={NotepadContainer} />
                    <ProtectedRoute path="/notes/trash/:noteId" component={NotepadContainer} />
                    <ProtectedRoute path="/notes/notebook/:notebookId/:noteId" component={NotepadContainer} />
                    <ProtectedRoute path="/notes/tags/:tagId/:noteId" component={NotepadContainer} />
                    <ProtectedRoute component={NotepadSplash} />
               </Switch>
            </div>
        )
    }
}

export default withRouter(Notebook);
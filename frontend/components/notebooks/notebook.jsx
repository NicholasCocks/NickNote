import React from 'react';
import { isEqual } from 'lodash';
import { withRouter, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NotepadContainer from '../notepad/notepad_container';
import NotepadSplash from '../notepad/notepad_splash';
import NotebookItem from './notebook_item';


class Notebook extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
    }

    componentDidUpdate(prevprops, prevstate) {
        
        let lastNoteId = parseInt(prevprops.location.pathname.slice(13));
        //we want the note we were just at to be able to check if is different
    }
    
    render() {
       
        const notes = this.props.noteslist.map((note, index) => {
            return  <NotebookItem key={index} note={note}/>
        })

        return(
            <div className="notebook_container"> 
                <div className="notebook_noteslist_container">
                    <header className="notebook_header">
                        <h3 className="notebook_header_heading">{this.props.notebookTitle}</h3>
                        <aside>
                            <p>{this.props.noteslist.length} notes</p>
                        </aside>
                    </header>
                    <div className="notebook_notebookitem_container">
                        {notes}
                    </div>
                   
                </div>
                <Switch >
                    <ProtectedRoute path="/notes/index/:noteId" component={NotepadContainer} />
                    <ProtectedRoute component={NotepadSplash} />
               </Switch>
            </div>
        )
    }
}

export default withRouter(Notebook);
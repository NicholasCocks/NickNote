import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NotepadContainer from '../notepad/notepad_container';
import NotebookItem from './notebook_item';


class Notebook extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
        //componentDidUpdate, push route to first note to history
    }
    render() {
        
        const notes = this.props.notes.map((note, index) => {
            return  <NotebookItem key={index} note={note}/>
        }).sort()

        return(
            <div className="notebook_container"> 
                <div className="notebook_noteslist_container">
                    <header className="notebook_header">
                        <h3 className="notebook_header_heading">{this.props.notebookTitle}</h3>
                        <aside>
                            <p>{this.props.notes.length} notes</p>
                        </aside>
                    </header>
                    {notes}
                    {console.log(notes)}
                </div>
                {/* <NotepadContainer /> */}
               <Route path="/notes/index/:noteId" component={NotepadContainer} />
            </div>
        )
    }
}

export default withRouter(Notebook);
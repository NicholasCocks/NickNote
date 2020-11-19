import React from 'react';
import {withRouter} from 'react-router-dom';
import NotepadContainer from '../notepad/notepad_container';
import NotebookItem from './notebook_item';


class Notebook extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
    }
    render() {
        const notes = this.props.notes.map((note, index) => {
            return  <NotebookItem key={index} note={note}/>
        })

        return(
            <div className="notebook_container"> 
                <div className="notebook_noteslist_container">
                    <h3>{this.props.notebookTitle}</h3>
                    {notes}
                </div>
                <div>
                    <NotepadContainer />
                </div>
            </div>
        )
    }
}

export default withRouter(Notebook);
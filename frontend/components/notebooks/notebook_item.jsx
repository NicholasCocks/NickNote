import React from 'react';
import { NavLink } from 'react-router-dom';

class NotebookItem extends React.Component {

    render() {
        const note = this.props.note;
        const date = new Date(note.updated_at).toDateString();
        const notebookURL = this.props.notebookURL.props.notebookURL;
        
        debugger
        return (
            <NavLink to={`/notes/${notebookURL}/${note.id}`} className="notebook_item_container" activeClassName="notebook_item_container_active"> 
                <main>
                    <p className="notebook_item_title">{note.title}</p>
                    <p className="notebook_item_body">{note.body}</p>
                </main>
                <p className="notebook_item_updated_at">{date}</p>
            </NavLink> 
           
        )
    }
}

export default NotebookItem;
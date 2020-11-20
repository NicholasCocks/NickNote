import React from 'react';
import { NavLink } from 'react-router-dom';

class NotebookItem extends React.Component {

    render() {
        const note = this.props.note;
        // const lastUpdated = note.updated_at.slice(5, 10)
        const date = new Date(note.updated_at).toDateString();
        // new Date(lastUpdated)
        return (
            <NavLink to={`/notes/index/${note.id}`} className="notebook_item_container" activeClassName="notebook_item_container_active"> 
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
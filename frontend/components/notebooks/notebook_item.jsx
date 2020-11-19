import React from 'react';
import { NavLink } from 'react-router-dom';

class NotebookItem extends React.Component {

    render() {
        const note = this.props.note;
        const lastUpdated = this.props.note.updated_at.slice(5, 10)
        
        return (
            <NavLink to={`/notes/index/${note.id}`}className="notebook_item_container" activeClassName="notebook_item_container_active"> 
                <main>
                    <p className="notebook_item_title">{note.title}</p>
                    <p className="notebook_item_body">{note.body}</p>
                </main>
                <p className="notebook_item_updated_at">{lastUpdated}</p>
            </NavLink> 
           
        )
    }
}

export default NotebookItem;
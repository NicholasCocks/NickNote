import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus, faClipboard, faBook, faTag, faTrash } from '@fortawesome/free-solid-svg-icons';

class NotesNav extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
        this.createNote = this.createNote.bind(this);
    }

    logout() {
        this.props.logout();
    }

    createNote() {
        this.props.createNote(this.props.note);
    }

    render() {

        return ( 
            <div className="notes_nav_container">
                <button className="notes_logout_button"onClick={this.logout}>logout</button>
                <button className="notes_new_note_button" onClick={this.createNote}><FontAwesomeIcon icon={faPlus}/>New Note</button>    
                <NavLink to={`/notes/index`} className="notes_nav_link"><FontAwesomeIcon icon={faClipboard}/>All Notes</NavLink>
                <NavLink to="/notes/notebooks/index" className="notes_nav_link"><FontAwesomeIcon icon={faBook}/>Notebooks</NavLink>
                <NavLink to="/notes/tags/index" className="notes_nav_link"><FontAwesomeIcon icon={faTag}/>Tags</NavLink>
                <NavLink to="/notes/trash" className="notes_nav_link"><FontAwesomeIcon icon={faTrash}/>Trash</NavLink>
            </div>
        )
    }
}

export default NotesNav;
import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClipboard, faBook, faTag, faTrash, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';

class NotesNav extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
        this.createNote = this.createNote.bind(this);
        this.setOpen = this.setOpen.bind(this);
        this.state = {open: false};
    }

    setOpen() {
        this.state.open ? this.setState({open: false}) : this.setState({open: true});
    }

    logout() {
        this.props.logout();
    }

    createNote() {
        debugger
        this.props.createNote(this.props.note);
    }

    render() {
        let logoutButton;
        
        if (this.state.open) { 
            logoutButton = <button className="notes_logout_button"onClick={this.logout}>Logout {this.props.email}</button>
        } else {
            logoutButton = null; 
        }

         
        return ( 
            <div className="notes_nav_container">
                <div className="notes_nav_dropdown" onClick={() => this.setOpen()}>
                    <img src={window.sloth} className="notes_nav_icon"></img>
                    <p className="notes_nav_email">{this.props.email}</p>
                    <FontAwesomeIcon icon={faChevronDown} className="notes_nav_chevron"/>
                </div>
                {logoutButton}
                <button className="notes_new_note_button" onClick={this.createNote}><FontAwesomeIcon icon={faPlus}/>New Note</button>    
                <NavLink to="/notes/starred" className="notes_nav_link"><FontAwesomeIcon icon={faStar}/>Starred</NavLink>
                <NavLink to="/notes/index" className="notes_nav_link"><FontAwesomeIcon icon={faClipboard}/>All Notes</NavLink>
                <NavLink to="/notes/notebook/index" className="notes_nav_link"><FontAwesomeIcon icon={faBook}/>Notebooks</NavLink>
                <NavLink to="/notes/tags/index" className="notes_nav_link"><FontAwesomeIcon icon={faTag}/>Tags</NavLink>
                <NavLink to="/notes/trash" className="notes_nav_link"><FontAwesomeIcon icon={faTrash}/>Trash</NavLink>
            </div>
        )
    }
}

export default NotesNav;
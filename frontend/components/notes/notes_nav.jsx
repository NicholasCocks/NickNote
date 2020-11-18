import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class NotesNav extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout();
    }

    render() {
        return ( 
            <div className="notes_nav_container">
                <button className="notes_logout_button"onClick={this.logout}>logout</button>
                <p>NotesNav</p>
                <button className="notes_new_note_button"><FontAwesomeIcon icon={faCoffee}/>New Note</button>
                <div className="notes_nav_link">
                    <FontAwesomeIcon icon={faCoffee}/>
                    <NavLink to="/notes">All Notes</NavLink>
                </div>
                <div className="notes_nav_link">
                    <FontAwesomeIcon icon={faCoffee}/>
                    <NavLink to="/notes">Notebooks</NavLink>
                </div>
                <div className="notes_nav_link">
                    <FontAwesomeIcon icon={faCoffee}/>
                    <NavLink to="/notes">Tags</NavLink>
                </div>
            </div>
        )
    }
}

export default NotesNav;
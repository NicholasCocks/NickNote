import React from 'react';
import NotesNavContainer from './notes_nav_container';

class NotesIndex extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <div className="notes_full_page">
                <NotesNavContainer />
                <p>NotesIndex</p>
            </div>
        )
    }
}

export default NotesIndex;
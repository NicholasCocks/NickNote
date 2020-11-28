import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons';

class NotepadTagDropDown extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {open: false};
    }

    render() {
        debugger
        const tags = Object.values(this.props.taggables).map((taggable, index) => {
            if (taggable.note_id === this.props.note.id) {
                return <p>{this.props.tags[taggable.tag_id].title}</p>
            }
        })
    
        return (
            <div className="notepad_tag_bar">
                <FontAwesomeIcon icon={faTag}/>
                <div>{tags}</div>        
            </div>
    
        )
    }
}

export default NotepadTagDropDown;
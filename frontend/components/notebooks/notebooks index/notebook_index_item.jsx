import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faListAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class NotebookIndexItem extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {open: false};
        this.setOpen = this.setOpen.bind(this);
    }

    setOpen() {
        this.state.open ? this.setState({open: false}) : this.setState({open: true});
    }

    render() {
        const title = this.props.notebook.title
        const date = new Date(this.props.notebook.updated_at).toDateString();
        const notesNum = this.props.notes.length;
        let notes;
        let rotate;

        if (this.state.open) { 
            notes = notes = this.props.notes.map((note, index) => {
                rotate = 0
                let noteTitle = note.title
                if (noteTitle === "") { noteTitle = "Untitled" }
                return (
                    <Link 
                    key={index} 
                    to={`${this.props.notebook.id}/${note.id}`} 
                    className="notebook_index_item_note_item_container">
                        <div className="notebook_index_item_note_item_title">
                            <FontAwesomeIcon icon={faListAlt} />
                            <p>{noteTitle} </p>
                        </div>
                        <p>{new Date(note.updated_at).toDateString()}</p>
                    </Link>
                    
                )
            })
        } else {
            rotate = -90;
            notes = null; 
        }
            
        return (
            <div>
                <div className="notebook_index_item">
                <button onClick={() => this.setOpen()}><FontAwesomeIcon icon={faChevronDown} transform={{ rotate: rotate }}/></button>
                <Link key={this.props.index} to={`${this.props.notebook.id}`} className="notebook_index_item_container"> 
                    <div className="notebook_index_item_row">
                        
                        <FontAwesomeIcon icon={faBook} />
                        <p className="notebook_index_item_title">{title} </p>
                        <p className="notebook_index_item_num"> ({notesNum})</p>
                    </div>
                    
                    <div className="notebook_index_item_notes_container">{date}</div>
                    
                </Link>
                </div>
                <div>{notes}</div>
            </div>
        )
    }
}

export default NotebookIndexItem;
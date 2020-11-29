import React from 'react';
import { MoveFromTrashButton, MoveToTrashButton } from './notepad_trash_icons';
import { ToStarButton, UnstarButton } from './notepad_star_icons';
import NotepadNotebookDropdown from './notepad_notebook_dropdown'; 
import NotepadTagDropDown from './notepad_tag_dropdown';

class Notepad extends React.Component {
    constructor(props) {
        super(props) 
        this.state = this.props.note
        this.updateField = this.updateField.bind(this);
        this.moveNoteToTrash = this.moveNoteToTrash.bind(this);
        this.moveNoteFromTrash = this.moveNoteFromTrash.bind(this);
        this.moveNoteToStarred = this.moveNoteToStarred.bind(this);
        this.moveNoteFromStarred = this.moveNoteFromStarred.bind(this);
    }

    moveNoteToTrash() {
        this.props.note.trashed = true;
        this.setState({trashed: true});
        this.props.updateNote(this.state);
    }

    moveNoteFromTrash() {
        this.props.note.trashed = false;
        this.setState({trashed: false});
        this.props.updateNote(this.state);
    } 

    moveNoteToStarred() {
        this.props.note.starred = true;
        this.setState({starred: true});
        this.props.updateNote(this.state)
    }

    moveNoteFromStarred() {
        this.props.note.starred = false;
        this.setState({starred: false});
        this.props.updateNote(this.state);
    }

    componentDidUpdate(prevprops, prevstate) {
        if (this.props.note.id !== prevprops.note.id) {
            this.props.updateNote(prevstate)
            this.setState(this.props.note)
        }
    }
    
    updateField(field) {
        //debouncing
        //autosave
        return e => this.setState({ [field]: e.currentTarget.value }); //callback 2nd arg
    }

    render() {
        const urlTrashCheck = this.props.path.slice(7, 12);
        let trashButton;
        let starbutton;

        if (this.state.trashed) { 
            trashButton = <button onClick={this.moveNoteFromTrash}><MoveFromTrashButton /> Restore</button>
        } else {
            trashButton = <button onClick={this.moveNoteToTrash}><MoveToTrashButton /> Trash</button>
        }

        if (this.state.starred) {
            starbutton = <button onClick={this.moveNoteFromStarred}><UnstarButton /></button>
        } else {
            starbutton = <button onClick={this.moveNoteToStarred}><ToStarButton /></button>
        }

        return(
            <div className="notepad_container">
                <header className="notepad_header">
                    <div>{starbutton}</div>
                    <NotepadNotebookDropdown notebooks={this.props.notebooks} note={this.state}/>
                    <aside>
                        <p></p>
                        <div className="notepad_trash_button">{trashButton}</div>
                    </aside>
                </header>
                <div className="notepad_input_container">
                    <input 
                        type="text" 
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.updateField('title')} 
                        className="notepad_input_title" />
                    <textarea 
                        value={this.state.body}
                        onChange={this.updateField('body')}
                        placeholder="Start writing..." 
                        className="notepad_input_textarea"/>
                </div>
                <NotepadTagDropDown tags={this.props.tags} note={this.props.note} 
                createTaggable={this.props.createTaggable} deleteTaggable={this.props.deleteTaggable} taggables={this.props.taggables}/>
            </div>
        )
    }
}
export default Notepad
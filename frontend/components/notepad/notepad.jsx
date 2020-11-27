import React from 'react';
import { MoveFromTrashButton, MoveToTrashButton } from './notepad_trash_icons';
import NotepadNotebookDropdown from './notepad_notebook_dropdown';


class Notepad extends React.Component {
    constructor(props) {
        super(props) 
        this.state = this.props.note
        this.updateField = this.updateField.bind(this);
        this.moveNoteToTrash = this.moveNoteToTrash.bind(this);
        this.moveNoteFromTrash = this.moveNoteFromTrash.bind(this);
    }

    moveNoteToTrash() {
        this.state.trashed = true;
        this.props.updateNote(this.state);
    }

    moveNoteFromTrash() {
        this.state.trashed = false;
        this.props.updateNote(this.state);
    }

    componentDidUpdate(prevprops, prevstate) {
        if (this.props.note.id !== prevprops.note.id) {
            this.props.findTagsWithNote(this.props.note)
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
        let tags;
        if (urlTrashCheck === "trash") { 
            trashButton = <button onClick={this.moveNoteFromTrash}><MoveFromTrashButton /> Restore</button>
        } else {
            trashButton = <button onClick={this.moveNoteToTrash}><MoveToTrashButton /> Trash</button>
        }
        
        if (Object.keys(this.props.taggables).length !== 0) { 
            debugger
            tags = Object.values(this.props.taggables).map((tag, index) => {
                if (tag[this.props.note.id]) {
                    return <p key={index}>{tag[this.props.note.id].title}</p>
                }
        })}

        

        return(
            <div className="notepad_container">
                <header className="notepad_header">
                    <NotepadNotebookDropdown notebooks={this.props.notebooks} note={this.state}/>
                    <aside>
                        <p>buttons will go here</p>    
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
                        placeholder="Start writing..." />
                </div>
                <div>
                    <div>{tags}</div>
                </div>
            </div>
        )
    }
}
export default Notepad
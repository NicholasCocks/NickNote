import React from 'react';
import { MoveFromTrashButton, MoveToTrashButton } from './notepad_trash_icons';
import { ToStarButton, UnstarButton } from './notepad_star_icons';
import NotepadNotebookDropdown from './notepad_notebook_dropdown'; 
import NotepadTagDropDown from './notepad_tag_dropdown';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Redirect } from "react-router-dom";

class Notepad extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { note: this.props.note, saved: true }
        this.updateField = this.updateField.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.moveNoteTrash = this.moveNoteTrash.bind(this);
        this.moveNoteStarred = this.moveNoteStarred.bind(this);
    }

    moveNoteTrash() {
        this.state.note.trashed = !this.state.note.trashed;
        this.setState({trashed: !this.state.note.trashed})
        this.props.updateNote(this.state.note);
        this.props.history.push(this.props.path
            .replace(':notebookId', this.props.note.notebook_id)
            .slice(0, -7)
        );
    }

    moveNoteStarred() {
        this.state.note.starred = !this.state.note.starred;
        this.setState({starred: !this.state.note.starred})
        this.props.updateNote(this.state.note)
    }

    componentDidMount() {
        this.timer = null;
    }

    componentDidUpdate(prevprops, prevstate) {
        if (this.props.note.id !== prevprops.note.id) {

            this.props.updateNote(prevstate.note)
            this.setState({note: this.props.note})
        }
    }
    
    updateField(field) {
        //debouncing
        clearTimeout(this.timer)
        
        //autosave
        if (!this.state.saved) {
            this.timer = setTimeout(() => {
                this.props.updateNote(this.state.note)
                this.setState({note: this.state.note, saved: true})
            }, 1000)
        }

        //statesave
        return e => this.setState({note: Object.assign({}, this.state.note, { [field]: e.currentTarget.value } ), saved: false}); 
    }

    handleChange(event, editor) {
        let text = editor.getData();

        clearTimeout(this.timer2)
        
        //autosave
        if (!this.state.saved) {
            this.timer2 = setTimeout(() => {
                this.props.updateNote(this.state.note)
                this.setState({note: this.state.note, saved: true})
            }, 1000)
        }

        this.setState({note: Object.assign({}, this.state.note, { body: text }), saved: false});
    }

    render() {
        let trashButton = this.props.note.trashed ? <MoveFromTrashButton /> : <MoveToTrashButton />
        let starbutton = this.props.note.starred ? <UnstarButton /> : <ToStarButton />

        return(
            <div className="notepad_container">
                <header className="notepad_header">
                    <div className="notepad_header_top_row">
                        <button onClick={this.moveNoteStarred}>{starbutton}</button>
                        <NotepadNotebookDropdown 
                            updateNote={this.props.updateNote}
                            notebooks={this.props.notebooks} 
                            note={this.state.note}/>
                    </div>
                    <aside className="notepad_header_bottom_row">
                        <p> Last Updated {new Date(this.state.note.updated_at).toDateString()}</p>
                        <div className="notepad_trash_button" onClick={this.moveNoteTrash}>{trashButton}</div>
                    </aside>
                </header>
                <div className="notepad_input_container">
                    <input 
                        type="text" 
                        placeholder="Title"
                        value={this.state.note.title}
                        onChange={this.updateField('title')} 
                        className="notepad_input_title" />
                    <CKEditor
                        onReady={ editor => {
                            console.log( 'Editor is ready to use!', editor );

                            editor.ui.getEditableElement().parentElement.parentElement.insertBefore(
                                editor.ui.view.toolbar.element,
                                editor.ui.getEditableElement().parentElement.parentElement.childNodes[1]
                            );

                            this.editor = editor;
                        } }
                        onError={ ( { willEditorRestart } ) => {
                            if ( willEditorRestart ) {
                                this.editor.ui.view.toolbar.element.remove();
                            }
                        } }
                        onChange={this.handleChange} 
                        editor={ DecoupledEditor }
                        data={this.state.note.body}
                        config={ {toolbar: {
                            items: [ 'undo', 'redo', '|', 'fontFamily', '|', 'bold', 'underline', 'strikethrough', '|', 'fontColor' ],
                            viewportTopOffset: 30,
                            shouldNotGroupWhenFull: true
                            }, placeholder: 'Start writing...'} }
                    />
                </div>
                <NotepadTagDropDown tags={this.props.tags} note={this.props.note} saved={this.state.saved}
                createTaggable={this.props.createTaggable} deleteTaggable={this.props.deleteTaggable} taggables={this.props.taggables}/>
            </div>
        )
    }
}
export default Notepad
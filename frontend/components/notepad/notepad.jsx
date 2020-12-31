import React from 'react';
import { MoveFromTrashButton, MoveToTrashButton } from './notepad_trash_icons';
import { ToStarButton, UnstarButton } from './notepad_star_icons';
import NotepadNotebookDropdown from './notepad_notebook_dropdown'; 
import NotepadTagDropDown from './notepad_tag_dropdown';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';

class Notepad extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { note: this.props.note, saved: true }
        this.updateField = this.updateField.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.moveNoteToTrash = this.moveNoteToTrash.bind(this);
        this.moveNoteFromTrash = this.moveNoteFromTrash.bind(this);
        this.moveNoteStarred = this.moveNoteStarred.bind(this);
    }

    moveNoteToTrash() {
        this.props.note.trashed = true;
        this.props.updateNote(this.state.note);
    }

    moveNoteFromTrash() {
        this.props.note.trashed = false;
        this.props.updateNote(this.state.note);
    } 

    moveNoteStarred() {
        this.props.note.starred = !this.props.note.starred;
        this.setState({starred: !this.props.note.starred})
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
        const urlTrashCheck = this.props.path.slice(7, 12);
        let trashButton;
        let starbutton = this.props.note.starred ? <UnstarButton /> : <ToStarButton />

        if (this.state.note.trashed) { 
            trashButton = <button onClick={this.moveNoteFromTrash}><MoveFromTrashButton /> Restore</button>
        } else {
            trashButton = <button onClick={this.moveNoteToTrash}><MoveToTrashButton /> Trash</button>
        }

        return(
            <div className="notepad_container">
                <header className="notepad_header">
                    <div className="notepad_header_top_row">
                        <div><button onClick={this.moveNoteStarred}>{starbutton}</button></div>
                        <NotepadNotebookDropdown notebooks={this.props.notebooks} note={this.state.note}/>
                    </div>
                    <aside className="notepad_header_bottom_row">
                        <p> Last Updated {new Date(this.state.note.updated_at).toDateString()}</p>
                        <div className="notepad_trash_button">{trashButton}</div>
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
                            items: [ 'bold', 'underline', 'strikethrough', 'undo', 'redo', 'numberedList', 'bulletedList' ],
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
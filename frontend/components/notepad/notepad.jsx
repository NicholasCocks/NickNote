import React from 'react';
import { MoveFromTrashButton, MoveToTrashButton } from './notepad_trash_icons';
import NotepadNotebookDropdown from './notepad_notebook_dropdown';
import {stateToHTML} from 'draft-js-export-html';
import { Editor, EditorState, createWithContent, 
ContentState, convertToRaw, getCurrentContent, createFromText, RichUtils } from 'draft-js';

class Notepad extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            note: this.props.note, 
            

        }
        this.updateTitle = this.updateTitle.bind(this); 
        this.updateBody = this.updateBody.bind(this);
        this.moveNoteToTrash = this.moveNoteToTrash.bind(this);
        this.moveNoteFromTrash = this.moveNoteFromTrash.bind(this);
        this.onChange = editorState => this.setState({editorState});
    }

    moveNoteToTrash() {
        this.state.trashed = true;
        this.props.updateNote(this.state.note);
    }

    moveNoteFromTrash() {
        this.state.trashed = false;
        this.props.updateNote(this.state.note);
    }

    componentDidUpdate(prevprops, prevstate) {
        if (this.props.note.id !== prevprops.note.id) {
            this.props.updateNote(prevstate.note)
            this.setState({
                note: this.props.note, 
                editorState: EditorState.createWithContent(ContentState.createFromText(this.props.note.body))})
        }
    }
    
    updateTitle(e) {
        //debouncing
        //autosave
        
        this.setState({ note: {
            title: e.currentTarget.value, 
            id: this.props.note.id, 
            notebook_id: this.props.note.notebook_id,
            } }); 
    }

    updateBody(editorState) {
        const blocks = convertToRaw(this.state.editorState.getCurrentContent()).blocks;
        const mappedBlocks = blocks.map(
          block => (!block.text.trim() && "\n") || block.text
        );
    
        let newText = "";
        for (let i = 0; i < mappedBlocks.length; i++) {
          const block = mappedBlocks[i];
    
          // handle last block
          if (i === mappedBlocks.length - 1) {
            newText += block;
          } else {
            // otherwise we join with \n, except if the block is already a \n
            if (block === "\n") newText += block;
            else newText += block + "\n";
          }
        }
        
        debugger
        

        this.setState({note: {
            title: this.state.note.title,
            body: stateToHTML(this.state.editorState.getCurrentContent()), id: this.props.note.id, 
            notebook_id: this.props.note.notebook_id},  editorState: editorState})
        
    }

    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    render() {
        let trashButton;
        const urlTrashCheck = this.props.path.slice(7, 12);
        if (urlTrashCheck === "trash") { 
            trashButton = <button onClick={this.moveNoteFromTrash}><MoveFromTrashButton /> Restore</button>
        } else {
            trashButton = <button onClick={this.moveNoteToTrash}><MoveToTrashButton /> Trash</button>
        } 
        
        return(
            <div className="notepad_container">
                <header className="notepad_header">
                    <NotepadNotebookDropdown notebooks={this.props.notebooks} note={this.state.note}/>
                    <aside>
                        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                        <div className="notepad_trash_button">{trashButton}</div>
                    </aside>
                </header>
                <div className="notepad_input_container">
                    <input 
                        type="text" 
                        placeholder="Title"
                        value={this.state.note.title}
                        onChange={(e) => this.updateTitle(e)} 
                        className="notepad_input_title" />
                    
                   <Editor editorState={this.state.editorState} 
                        onChange={this.updateBody}/>
                </div>
            </div>
        )
    }
}

export default Notepad
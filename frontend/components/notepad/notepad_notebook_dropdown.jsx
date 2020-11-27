import React from 'react';
import { NavLink } from 'react-router-dom';

class NotepadNotebookDropdown extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {open: false};
        this.setOpen = this.setOpen.bind(this);
    }

    setOpen() {
        this.state.open ? this.setState({open: false}) : this.setState({open: true});
    }

    render() {
        let notebookMenu;
        let notebookTitle;
        
        const notebookId = this.props.note.id
        const notebookList = Object.values(this.props.notebooks).map((notebook, index) => {
            
            if (notebook.id !== notebookId) {
                return <NavLink key={index} to={`/notes/notebook/${notebook.id}`}> {notebook.title} </NavLink>
            }
        })
        
        if (this.props.notebooks[this.props.note.notebook_id]) { 
            
            notebookTitle = this.props.notebooks[this.props.note.notebook_id].title 
        }
        
        if (this.state.open) { 
            notebookMenu = <div className="notepad_notebook_dropdown_menu">{notebookList}</div>
        } else {
            notebookMenu = null; 
        }
    
        return (
            <div>
                <div className="notepad_notebook_dropdown_container" onClick={() => this.setOpen()}>
                    <p className="notepad_notebook_dropdown_title">{notebookTitle}</p>
                </div>
                {notebookMenu}
            </div>
    
        )
    }
}

export default NotepadNotebookDropdown;
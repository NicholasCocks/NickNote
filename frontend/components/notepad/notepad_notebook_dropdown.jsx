import React from 'react';
import { NavLink } from 'react-router-dom';

class NotepadNotebookDropdown extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {open: false, note: this.props.note};
        // this.notebookmodal = React.createRef();
        this.setOpen = this.setOpen.bind(this);
        this.moveNote = this.moveNote.bind(this);
        this.handleClickLocation = this.handleClickLocation.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickLocation);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickLocation);
    }

    setOpen() {
        this.state.open ? this.setState({open: false}) : this.setState({open: true});
    }

    handleClickLocation(e) {
        // debugger
        if (this.state.open && !this.notebookmodal.contains(e.target)) {
            this.setState({open: false})
        } 
    }

    moveNote(notebook) {
        this.state.note.notebook_id = notebook.id 
        this.setState({notebook_id: notebook.id})
        this.props.updateNote(this.state.note)
    }

    render() {
        let notebookMenu;
        let notebookTitle;
        
        const notebookId = this.props.note.id
        const notebookList = Object.values(this.props.notebooks).map((notebook, index) => {
            return <NavLink 
                    key={index} 
                    activeClassName={'notebook_dropdown_active'}
                    to={`/notes/notebook/${notebook.id}/${this.props.note.id}`}
                    onClick={() => this.moveNote(notebook)}> {notebook.title} </NavLink>
        })
        
        if (this.props.notebooks[this.props.note.notebook_id]) { 
            notebookTitle = this.props.notebooks[this.props.note.notebook_id].title 
        }
    
        return (
            <div ref={notebookmodal => this.notebookmodal = notebookmodal}>
                <div className="notepad_notebook_dropdown_container" onClick={() => this.setOpen()}>
                    <p className="notepad_notebook_dropdown_title">{notebookTitle}</p>
                </div>
                <div className={this.state.open ? "notepad_notebook_dropdown_menu menu_open" : "notepad_notebook_dropdown_menu"}>
                    {notebookList}
                </div>
            </div>
        )
    }
}

export default NotepadNotebookDropdown;
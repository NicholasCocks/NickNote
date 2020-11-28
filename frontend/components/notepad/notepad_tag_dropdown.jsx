import React from 'react';
import { NavLink } from 'react-router-dom';

class NotepadTagDropDown extends React.Component {
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
        
        if (this.state.open) { 
            notebookMenu = <div className="notepad_notebook_dropdown_menu">{notebookList}</div>
        } else {
            notebookMenu = null; 
        }
    
        return (
            <div>
                {notebookMenu}
            </div>
    
        )
    }
}

export default NotepadTagDropDown;
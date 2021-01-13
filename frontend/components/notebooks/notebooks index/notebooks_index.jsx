import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import NotebookIndexItemContainer from './notebook_index_item_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faPlus } from '@fortawesome/free-solid-svg-icons';

class NotebooksIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {open: false, title: ""};
        this.setOpen = this.setOpen.bind(this);
        this.update = this.update.bind(this);
        this.createNotebook = this.createNotebook.bind(this)
    }

    setOpen() {
        this.state.open ? this.setState({open: false}) : this.setState({open: true});
    }

    componentDidMount() {
        this.props.fetchAllNotes();
        this.props.fetchAllNotebooks();
    }

    createNotebook(e) {

        e.preventDefault();
        this.props.createNotebook({title: this.state.title});
        // if (this.state.title !== "") {
        //     this.setOpen() 
        // }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        let form;
        const notebookList = Object.values(this.props.notebooks).map((notebook, index) => {
            return <NotebookIndexItemContainer key={index} notebook={notebook} />
        })
        const errors = this.props.errors.map((error, i) => {
            return <p key={i} >{error}</p>
        });

        if (this.state.open) {
            form = <form className="notebook_index_create_notebook_container" onSubmit={this.createNotebook}>
                    <div className="notebook_index_create_header">
                        <h3>Create New Notebook</h3>
                        <button onClick={() => this.setOpen()}><FontAwesomeIcon icon={faPlus} transform={{ rotate: 45 }}/></button>
                    </div>
                    <p>Notebooks are useful for grouping notes around a common topic.</p>
                    <div className="notebook_index_errors">{errors}</div>
                    <p>Name</p>
                    <input type="text" placeholder="Notebook Name" onChange={this.update('title')}/>
                    <div className="notebook_index_create_button_container">
                        <button type="submit">Create</button>
                    </div>
                </form>
        } else {
            form = null
        } 

        return (
            <div className="notebooks_index_container">
                <h1 className="notebooks_index_title">Notebooks</h1>
                <div className="notebooks_index_banner">
                    <h3>My notebook list</h3>
                    <button onClick={() => this.setOpen()}
                    className="notebooks_index_new_notebook"><FontAwesomeIcon icon={faBookMedical} /> New Notebook</button>
                </div>
                <div className="notebooks_index_column">
                    <p>TITLE</p>
                    <p>UPDATED</p>
                </div>
                {form}
                <div className="notebooks_index_list">{notebookList}</div>
            </div>
        )
    }
}

export default withRouter(NotebooksIndex);
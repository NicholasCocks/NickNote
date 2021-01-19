import React from 'react'; 
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClipboard, faBook, faTag, faTrash, faChevronDown, faStar, faSearch, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class NotesNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {open: false, inputVal: ''};
        this.logout = this.logout.bind(this);
        this.createNote = this.createNote.bind(this);
        this.setOpen = this.setOpen.bind(this);
        this.selectName = this.selectName.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClickLocation = this.handleClickLocation.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickLocation);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickLocation);
    }

    handleInput(event) {
        this.setState({inputVal: event.currentTarget.value});
    }

    handleClickLocation(e) {
        // debugger
        if (this.state.open && !this.notenavmodal.contains(e.target)) {
            this.setState({open: false})
        } 
    }

    selectName(event) {
        const name = event.currentTarget.innerText;
        this.setState({inputVal: ''});
    }

    matches() {
        const matches = [];
        if (this.state.inputVal.length === 0) {
          return [];
        }
    
        this.props.notes.forEach(note => {
          const sub = note.title.slice(0, this.state.inputVal.length);
          if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
            matches.push(note);
          }
        });
    
        if (matches.length === 0) {
          matches.push({title: 'No matches'});
        }
    
        return matches;
    }

    setOpen() {
        this.state.open ? this.setState({open: false}) : this.setState({open: true});
    }

    logout() {
        this.props.logout();
    }

    createNote() {
        if (this.props.location.pathname.slice(0,16) === "/notes/notebook/") {
            this.props.note.notebook_id = parseInt(this.props.location.pathname.slice(16))
        }
        
        let that = this;

        this.props.createNote(this.props.note).then((response) => {
            that.props.history.push(`/notes/index/${response.note.id}`)
        });
    }

    render() {
        let logoutButton;
        
        if (this.state.open) { 
            logoutButton = <button 
                className="notes_logout_button" 
                onClick={this.logout}
                 >Logout {this.props.email}</button>
        } else {
            logoutButton = null; 
        }

        let results = this.matches().map((result, i) => {
            return (
              <Link to={`/notes/index/${result.id}`}key={i} onClick={this.selectName}>{result.title}</Link>
            );
        });

        let searchResultsClass = "notes_nav_search_results"

        if (this.matches().length === 0) {searchResultsClass = ""}
         
        return ( 
            <div className="notes_nav_container">
                <div className="notes_nav_dropdown" onClick={() => this.setOpen()} ref={notenavmodal => this.notenavmodal = notenavmodal}>
                    <img src={window.sloth} className="notes_nav_icon"></img>
                    <p className="notes_nav_email">{this.props.email}</p>
                    <FontAwesomeIcon icon={faChevronDown} className="notes_nav_chevron"/>
                    {logoutButton}
                </div>
                <div className="notes_nav_search_bar">
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                    onChange={this.handleInput}
                    value={this.state.inputVal}
                    placeholder='Search Titles...'
                    />
                </div>
                <ul className={`${searchResultsClass}`}>
                    {results}
                </ul>
                <button className="notes_new_note_button" onClick={this.createNote}><FontAwesomeIcon icon={faPlus}/>New Note</button>    
                <NavLink to="/notes/starred" className="notes_nav_link"><FontAwesomeIcon icon={faStar}/>Starred</NavLink>
                <NavLink to="/notes/index" className="notes_nav_link"><FontAwesomeIcon icon={faClipboard}/> All Notes</NavLink>
                <NavLink to="/notes/notebook/index" className="notes_nav_link"><FontAwesomeIcon icon={faBook}/>Notebooks</NavLink>
                <NavLink to="/notes/tags/index" className="notes_nav_link"><FontAwesomeIcon icon={faTag}/>Tags</NavLink>
                <NavLink to="/notes/trash" className="notes_nav_link"><FontAwesomeIcon icon={faTrash}/>Trash</NavLink>
                {/* <div onClick={this.props.switchThemes}>Dark Mode</div> */}
                <div className="notes_nav_about_links_bar">
                    <a target="_blank" href="https://github.com/NicholasCocks"><FontAwesomeIcon icon={faGithub} className="notes_nav_about_link" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/nicholas-cocks/"><FontAwesomeIcon icon={faLinkedin} className="notes_nav_about_link" /></a>
                    <a target="_blank" href="https://nicholascocks.github.io/"><FontAwesomeIcon icon={faGlobe} className="notes_nav_about_link" /></a>
                </div>
            </div>
        )
    }
}

export default NotesNav;
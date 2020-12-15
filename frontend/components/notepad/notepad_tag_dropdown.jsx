import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faPlus } from '@fortawesome/free-solid-svg-icons';

class NotepadTagDropDown extends React.Component {
  constructor(props) {
      super(props) 
      this.state = {
          open: false,
          inputVal: ''
        };
      this.tags = [];
      this.selectName = this.selectName.bind(this);
      this.setOpen = this.setOpen.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.deleteTaggable = this.deleteTaggable.bind(this);
  }

  setOpen() {
      this.state.open ? this.setState({open: false}) : this.setState({open: true});
  }

  handleInput(event) {
      this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
      const matches = [];
      if (this.state.inputVal.length === 0) {
        return [];
      }
      
      
      Object.values(this.props.tags).forEach(tag => {
        const sub = tag.title.slice(0, this.state.inputVal.length);
        if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
          matches.push(tag);
        }
      }, this);
  
      if (matches.length === 0) {
        matches.push('No matches');
      }

      return matches;
  }

  selectName(tag) {
      console.log(tag)
      this.props.createTaggable(this.props.note, tag);
      this.setState({inputVal: ''});
  }

  deleteTaggable(taggable) {
    
    this.tags = this.tags.filter((tag) => {return tag.id !== taggable.tag_id} )
    
    this.props.deleteTaggable(taggable)
    this.setState({inputVal: ''});
  }

  render() {
      const tags = Object.values(this.props.taggables).map((taggable, index) => {
          if (taggable.note_id === this.props.note.id) {
              this.tags.push(this.props.tags[taggable.tag_id]);
              return (
                <div  key={index} className="notepad_tag_drop_tag_container">
              <p>{this.props.tags[taggable.tag_id].title}
              <FontAwesomeIcon icon={faPlus} transform={{ rotate: 45 }} onClick={() => this.deleteTaggable(taggable)}/>
              </p></div>)
          }
      }, this) 

      const results = Object.values(this.matches()).map((result, i) => {
        if (!this.tags.includes(result)) {
          return (
            <p key={i} onClick={() => this.selectName(result)}>{result.title}</p>
          )
        }
      }, this);

      let searchResultsClass = "notepad_tag_drop_results_container"

      if (this.matches().length === 0) {searchResultsClass = ""}

      let savedStatus = this.props.saved ? 'All changes saved.' : 'Saving...'
  
      return (
          <div className="notepad_tag_bar">
              <FontAwesomeIcon icon={faTag} transform={{ rotate: 45 }}/>
              <input
                  onChange={this.handleInput}
                  value={this.state.inputVal}
                  placeholder='Search...'/>
              <div className={searchResultsClass}>{results}</div>
              <div className="notepad_tag_drop_tags_container">{tags}</div>   
              <p className="notepad_tag_drop_saved_status">{savedStatus}</p>     
          </div>
  
      )
  }
}

export default NotepadTagDropDown;
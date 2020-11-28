import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons';

class NotepadTagDropDown extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            open: false,
            inputVal: ''
          };
        this.selectName = this.selectName.bind(this);
        this.setOpen = this.setOpen.bind(this);
        this.handleInput = this.handleInput.bind(this);
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
        const name = tag.title;
        this.setState({inputVal: name});
      }

    render() {
        const tags = Object.values(this.props.taggables).map((taggable, index) => {
            if (taggable.note_id === this.props.note.id) {
                return <p key={index}>{this.props.tags[taggable.tag_id].title}</p>
            }
        }) 

        const results = Object.values(this.matches()).map((result, i) => {
            return (
              <p key={i} onClick={() => this.selectName(result)}>{result.title}</p>
            );
        }, this);
    
        return (
            <div className="notepad_tag_bar">
                <FontAwesomeIcon icon={faTag}/>
                <input
                    onChange={this.handleInput}
                    value={this.state.inputVal}
                    placeholder='Search...'/>
                    <div className="notepad_tag_drop_results_container">{results}</div>
                <div>{tags}</div>        
            </div>
    
        )
    }
}

export default NotepadTagDropDown;
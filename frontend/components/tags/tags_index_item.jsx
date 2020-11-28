import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class TagsIndexItem extends React.Component { 
    constructor(props) {
        super(props) 
    }

    // updateTag deleteTag
    render() {
        return (
            <div className="tags_index_list_item">
            <Link to={`/notes/tags/${this.props.tag.id}`} >{this.props.tag.title}</Link>
            <FontAwesomeIcon icon={faTrash} onClick={() => this.props.deleteTag(this.props.tag)}/>
            </div>
        )
    }
}

export default TagsIndexItem;
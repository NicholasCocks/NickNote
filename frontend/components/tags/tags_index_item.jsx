import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class TagsIndexItem extends React.Component { 
    constructor(props) {
        super(props) 
    }

    // updateTag 
    render() {
        const notesNum = Object.values(this.props.taggables).filter(taggable => {
            return taggable.tag_id === this.props.tag.id}, this
            ).length  
        return (
            
            <div className="tags_index_list_item">
                <Link to={`/notes/tags/${this.props.tag.id}`} >
                    <div className="notebook_index_item_row">
                        <p className="notebook_index_item_title">{this.props.tag.title} </p>
                        <p className="notebook_index_item_num">({notesNum})</p>
                    </div>
                </Link>
                <FontAwesomeIcon icon={faTrash} onClick={() => this.props.deleteTag(this.props.tag)}/>
            </div>
            
        )
    }
}

export default TagsIndexItem;
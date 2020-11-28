import React from 'react';
import NotepadSplash from '../notepad/notepad_splash';
import TagsIndexItem from './tags_index_item';
import { ProtectedRoute } from '../../util/route_util';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

class TagsIndex extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {title: ''}
        this.createTag = this.createTag.bind(this);
    }


    componentDidMount() {
        this.props.fetchAllNotes();
        this.props.fetchAllTags();
    }

    createTagsList() {
        return this.props.tagsList.map((tag, index) => {
            return <TagsIndexItem key={index} tag={tag} updateTag={this.props.updateTag} deleteTag={this.props.deleteTag}/>
            // return <Link to={`/notes/tags/${tag.id}`} key={index} className="tags_index_list_item">{tag.title}</Link>
        });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    createTag(e) {
        e.preventDefault();
        this.props.createTag(this.state);
        this.setState({title: ''})
    }

    render() {
        return (
            <div className="notebook_container"> 
                <div className="notebook_noteslist_container">
                    <header className="notebook_header">
                        <h3 className="notebook_header_heading">Tags</h3>
                        <form onSubmit={this.createTag}>
                            <input type="text" 
                            placeholder="Create New Tag" 
                            value={this.state.title}
                            onChange={this.update('title')} />
                            <button type="submit"><FontAwesomeIcon icon={faTag}/></button>
                        </form>
                    </header>
                    <div className="notebook_notebookitem_container">
                        <div className="tags_index_tags_list_container">
                            {this.createTagsList()}
                        </div>
                    </div>
                   
                </div>
                <ProtectedRoute component={NotepadSplash} />
            </div>
        )
    }
}

export default withRouter(TagsIndex);
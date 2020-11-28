import React from 'react';
import NotepadSplash from '../notepad/notepad_splash';
import { ProtectedRoute } from '../../util/route_util';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';

class TagsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllNotes();
        this.props.fetchAllTags();
    }

    createTagsList() {
        return this.props.tagsList.map((tag, index) => {
            return <Link to={`/notes/tags/${tag.id}`} key={index} >{tag.title}</Link>
        });
    }

    render() {
        return (
            <div className="notebook_container"> 
                <div className="notebook_noteslist_container">
                    <header className="notebook_header">
                        <h3 className="notebook_header_heading">Tags</h3>
                       
                    </header>
                    <div className="notebook_notebookitem_container">
                        {this.createTagsList()}
                    </div>
                   
                </div>
                <ProtectedRoute component={NotepadSplash} />
            </div>
        )
    }
}

export default withRouter(TagsIndex);
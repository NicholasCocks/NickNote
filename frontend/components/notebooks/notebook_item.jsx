import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class NotebookItem extends React.Component {
    favorited() {
        if (this.props.note.starred) { 
            return <FontAwesomeIcon icon={faStar}/> 
        } else { 
            return null 
        }
    }

    render() {
        const note = this.props.note;
        const date = new Date(note.updated_at).toDateString();
        const notebookURL = this.props.notebookURL.props.notebookURL;
        let noteTitle = note.title;
        let body = note.body.length > 50 ? note.body.slice(0, 50) + "..." : note.body

        if (note.title === "") { noteTitle = "Untitled"}
        
        return (
            <NavLink to={`/notes/${notebookURL}/${note.id}`} className="notebook_item_container" activeClassName="notebook_item_container_active"> 
                <main>
                    <div className="notebook_item_title"><p>{noteTitle}</p> {this.favorited()}</div>
                    
                    <p className="notebook_item_body">{ReactHtmlParser(body)}</p>
                </main>
                <p className="notebook_item_updated_at">{date}</p>
            </NavLink> 
           
        )
    }
}

export default NotebookItem;
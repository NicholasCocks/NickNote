import React from 'react';

class NotebookItem extends React.Component {

    render() {
        const note = this.props.note;
        const lastUpdated = this.props.note.updated_at.slice(5, 10)
        
        return (
            <div className="notebook_item_container">
                <main>
                    <p className="notebook_item_title">{note.title}</p>
                    <p className="notebook_item_body">{note.body}</p>
                </main>
                <p className="notebook_item_updated_at">{lastUpdated}</p>
               
            </div>
        )
    }
}

export default NotebookItem;
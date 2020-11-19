import React from 'react';

class NotebookItem extends React.Component {

    render() {
        const note = this.props.note;
        return (
            <div>
                <p>NotebookItem</p>
                <p>{note.title}</p>
            </div>
        )
    }
}

export default NotebookItem;
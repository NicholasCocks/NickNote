import React from 'react';

class NotesIndex extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout();
    }

    render() {
        return (<div>
            <button onClick={this.logout}>logout</button>
            <p>NotesIndex</p>
            </div>)
    }
}

export default NotesIndex;
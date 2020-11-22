import React from 'react';

class NotepadSplash extends React.Component {

    render() {
        return (
            <div className="notepad_splash_container">
                <img src={window.notepad_splash} className="notepad_splash_background"></img>
            </div>
        )            
    }
}

export default NotepadSplash;
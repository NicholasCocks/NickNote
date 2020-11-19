import React from 'react';

class Notepad extends React.Component {

    render() {
        return(
            <div className="notepad_container">
                <header>
                    <p>notebook title will go here</p>
                    <aside>
                        <p>buttons will go here</p>    
                    </aside>
                </header>
                <div className="notepad_input_container">
                    <input type="text" placeholder="Title" className="notepad_input_title"></input>
                    <textarea placeholder="Start writing..."></textarea>
                </div>
            </div>
        )
    }
}
export default Notepad
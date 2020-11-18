import React from 'react';

class Notepad extends React.Component {

    render() {
        return(
            <div className="notepad_page_container">
                <p>buttons will go here</p>
                <div className="notepad_input_container">
                    <input type="text" placeholder="Title" ></input>
                    <textarea placeholder="Start writing..."></textarea>
                </div>
            </div>
        )
    }
}
export default Notepad
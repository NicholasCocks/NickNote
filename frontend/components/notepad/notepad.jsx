import React from 'react';

class Notepad extends React.Component {
    constructor(props) {
        super(props) 
        this.state = this.props.note 
    }

    updateField(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return(
            
            <div className="notepad_container">
                {console.log(this.state)}
                <header>
                    <p>notebook title will go here</p>
                    <aside>
                        <p>buttons will go here</p>    
                    </aside>
                </header>
                <div className="notepad_input_container">
                    <input 
                    type="text" 
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.updateField('title')} 
                    className="notepad_input_title"></input>
                    <textarea 
                    value={this.state.body}
                    onChange={this.updateField('body')}
                    placeholder="Start writing..."></textarea>
                </div>
            </div>
        )
    }
}
export default Notepad
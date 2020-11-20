import React from 'react';

class Notepad extends React.Component {
    constructor(props) {
        super(props) 
        this.state = this.props.note
        this.updateField = this.updateField.bind(this);
    }

    componentDidUpdate(prevprops, prevstate) {
        if (this.props.note.id !== prevprops.note.id) {
            this.props.updateNote(prevstate)
            this.setState(this.props.note)
        }
    }
    
    updateField(field) {
        //debouncing
        //autosave
        return e => this.setState({ [field]: e.currentTarget.value }); //callback 2nd arg
    }

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
                    <input 
                        type="text" 
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.updateField('title')} 
                        className="notepad_input_title" />
                    <textarea 
                        value={this.state.body}
                        onChange={this.updateField('body')}
                        placeholder="Start writing..." />
                </div>
            </div>
        )
    }
}
export default Notepad
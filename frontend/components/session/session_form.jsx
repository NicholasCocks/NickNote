import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            email: "",
            password: "",
        };
        this.handleSumbit = this.handleSumbit.bind(this)
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }
    

    handleField(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSumbit(e) {
        e.preventDefault()
        this.props.processForm(this.state).then(() => this.props.history.push('/notes'))
    }

    render() {

        const errors = this.props.errors.map((error, i) => {
            return <p key={i}>{error}</p>
        });

        return (
            <form onSubmit={this.handleSumbit}>
                <label>
                    <input 
                    type="text"
                    value={this.state.email}
                    onChange={this.handleField('email')}
                    />
                </label>
                <label>
                    <input 
                    type="password"
                    value={this.state.password}
                    onChange={this.handleField('password')}
                    />
                </label>
                <div>{errors}</div>
                <input className="session-submit" type="submit" value={this.props.formType} />
                <p>{this.props.blurb}</p>
                <p>{this.props.sessionLink}</p>
            </form>
        )
    }
}

export default SessionForm;

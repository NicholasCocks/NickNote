import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            email: "",
            password: "",
        };
        this.handleSumbit = this.handleSumbit.bind(this)
    }

    handleField(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSumbit(e) {
        e.preventDefault()
        this.props.signupAction(this.state).then(() => this.props.history.push('/notes'))
    }

    render() {
        return (<div className="session_form">
            <h1>Nick Note</h1>
            <p>remember everything important</p>
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
                <input className="session-submit" type="submit" value="continue" />
            </form>
        </div>)
    }
}

export default Signup;

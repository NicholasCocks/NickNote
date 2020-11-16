import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: "",
            password: "",
        };
        this.handleSumbit = this.handleSumbit.bind(this)``
    }

    handleField(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSumbit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state).then(() => this.props.history.push('/notes'))
    }

    render() {
        return (<div className="session_form">
            <h1>Nick Note</h1>
            <p>remember everything important</p>
            <form>
                <input 
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                />
                <input 
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                />
                <button onClick={this.handleSumbit}>Continue</button>
            </form>
        </div>)
    }
}

export default Signup;

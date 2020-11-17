import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {email: "", password: "", passwordShown: false};
        this.handleSumbit = this.handleSumbit.bind(this)
        this.togglePassword = this.togglePassword.bind(this);
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
        delete this.state["passwordShown"]
        this.props.processForm(this.state).then(() => this.props.history.push('/notes'))
    }

    togglePassword() {
        if (this.state.passwordShown === true) { this.setState({passwordShown: false}) 
        } else {
            this.setState({passwordShown: true})
        }
    }

    render() {

        const errors = this.props.errors.map((error, i) => {
            return <p key={i} >{error}</p>
        });

        const picon = () => { if (this.state.passwordShown){ return faEye } else {return faEyeSlash}}

        return (
            <form onSubmit={this.handleSumbit} className="session_form">
                <label className="error_messages">
                    <div>{errors}</div>
                </label>
                <label>
                    <input 
                    type="text"
                    value={this.state.email}
                    onChange={this.handleField('email')}
                    placeholder="Email"
                    className="session_dynamic_inputs"
                    />
                </label>
                <label>
                    <input 
                    type={this.state.passwordShown ? "text" : "password"}
                    value={this.state.password}
                    onChange={this.handleField('password')}
                    placeholder="Password"
                    className="session_dynamic_inputs"
                    />
                    <FontAwesomeIcon icon={picon()} className="session_password_toggle_icon" onClick={() => {this.togglePassword()}}/>
                </label> 
                <label>
                    <input 
                    className="session_submit" 
                    type="submit" 
                    value={this.props.formType} 
                    />
                </label>
                <label>
                    <button 
                    className="session_demo_user" 
                    type="button" 
                    value="Demo User" 
                    onClick={() => {this.props.demoUser()}}
                    > Demo User </button>
                </label>
                <div className="session_footer">
                    <p className="session_blurb">{this.props.blurb}</p>
                    <p className="session_link">{this.props.sessionLink}</p>
                </div>
            </form>
        )
    }
}

export default SessionForm;

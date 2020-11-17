import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { signupAction, clearErrors, loginDemoUser } from '../../actions/session';

const mapStateToProps = (state) => {
    return {
        errors: Object.values(state.errors), 
        formType: 'Signup',
        blurb: "Already have an account?",
        sessionLink: <Link to="/session/login">Login</Link>,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: formUser => dispatch(signupAction(formUser)),
        clearErrors: () => dispatch(clearErrors()),
        demoUser: () => dispatch(loginDemoUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import React from 'react'
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { loginAction, clearErrors, loginDemoUser } from '../../actions/session';

const mapStateToProps = (state) => {
    return {
        errors: Object.values(state.errors.session),
        formType: 'Login',
        blurb: "Don't have an account?",
        sessionLink: <Link to="/session">Create account</Link>,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(loginAction(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoUser: () => dispatch(loginDemoUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import React from 'react'
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { loginAction, clearErrors } from '../../actions/session';

const mapStateToProps = (state) => {
    return {
        errors: Object.values(state.errors),
        formType: 'login',
        blurb: "Don't have an account",
        sessionLink: <Link to="/session">Create Account</Link>,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(loginAction(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
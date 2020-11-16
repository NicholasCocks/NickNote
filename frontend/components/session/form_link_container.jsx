import React from 'react';
import { connect } from 'react-redux';
import FormLink from './form_link';

const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser
    }
}


export default connect(mapStateToProps)(FormLink);
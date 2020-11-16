import { connect } from 'react-redux';
import { signupAction } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => {
    return {
        signupAction: formUser => dispatch(signupAction(formUser)),
    }
}

export default connect(null, mapDispatchToProps)(Signup);
import { connect } from 'react-redux';
import NotesNav from './notes_nav';
import { logoutAction } from '../../actions/session';

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAction()),
    }
}

export default connect(null, mapDispatchToProps)(NotesNav)
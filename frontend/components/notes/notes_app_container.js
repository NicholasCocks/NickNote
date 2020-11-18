import { connect } from 'react-redux';
import NotesApp from './notes_app';
import { logoutAction } from '../../actions/session';

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAction())
    }
}

export default connect(null, mapDispatchToProps)(NotesApp);
import { connect } from 'react-redux';
import NoteIndex from './notes_index';
import { logoutAction } from '../../actions/session';

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAction())
    }
}

export default connect(null, mapDispatchToProps)(NoteIndex);
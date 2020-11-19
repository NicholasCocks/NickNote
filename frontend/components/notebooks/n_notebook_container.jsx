import { connect } from 'react-redux';
import Notebook from './notebook';

const mapStateToProps = (state) => {
    return {
        notebookTitle: "NotebookTitlePlaceholder"
    }
}


export default connect(null)(Notebook);
import React from 'react';
import { connect } from 'react-redux';
import Notebook from './notebook';
import { fetchAllNotes } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import { fetchAllTags } from '../../actions/tags_actions';
import { fetchAllTaggables } from '../../actions/taggable_actions';

class StarredIndex extends React.Component {
    render() {
        const { notes, notesList, fetchNotes, fetchNotebooks, fetchAllTags, fetchAllTaggables,
            notebookTitle, notebookURL, taggables } = this.props;
        return (
            <Notebook
            taggables={taggables}
            notes={notes}
            notesList={notesList}
            fetchNotes={fetchNotes}
            fetchNotebooks={fetchNotebooks}
            notebookTitle={notebookTitle} 
            notebookURL={notebookURL}
            fetchAllTags={fetchAllTags}
            fetchAllTaggables={fetchAllTaggables}/>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        taggables: state.entities.taggables,
        notes: state.entities.notes,
        notesList: Object.values(state.entities.notes).sort((obj1, obj2) => {
            return new Date(obj2.updated_at) - new Date(obj1.updated_at)
        }).filter(note => { return note.trashed === false && note.starred === true }),
        notebookTitle: "Starred",
        notebookURL: "starred",
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchAllNotes()),
        fetchNotebooks: () => dispatch(fetchAllNotebooks()),
        fetchAllTags: () => dispatch(fetchAllTags()),
        fetchAllTaggables: () => dispatch(fetchAllTaggables()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarredIndex);